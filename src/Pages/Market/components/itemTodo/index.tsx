import React, {useContext, useEffect, useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

import pencil from '../../../../assets/icons/Pencil.png';
import trash from '../../../../assets/icons/Trash.png';

import {
  ItemTodo,
  ContainerCheckboxAndTasks,
  TodoName,
  ContainerEditAndDelete,
  IconButton,
  Icon,
} from './styles';
import database from '@react-native-firebase/database';
import {Modal} from 'react-native';
import {
  AddTaskButton,
  AddTaskButtonTitle,
  CloseButton,
  IconClose,
  InputContainer,
  InputContainerInput,
  InputContainerTitle,
  ModalContainer,
  ModalView,
} from '../../styles';
import Close from '../../../../assets/icons/Close.png';
import {MonitorContext} from '../../../../context';

export default function Itemtodo({data}: any) {
  const {monitor, setMonitor} = useContext(MonitorContext);

  const newReference = database().ref(`/Mercado/${data.id}`);

  const [name, onChangeText] = useState(`${data.task}`);
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(
    data.isCompleted,
  );

  function handleSubmitCheckbox(value: boolean) {
    setToggleCheckBox(value);
    newReference
      .update({
        isDone: !toggleCheckBox,
      })
      .then(() => console.log('Data updated.'));
    setMonitor(!monitor);
  }

  function handleSubmit() {
    newReference
      .update({
        task: name,
      })
      .then(() => console.log('Data updated.'));
    setModalVisibleEdit(!modalVisibleEdit);
    setMonitor(!monitor);
  }

  async function handleDelete() {
    await database().ref(`/Mercado/${data.id}`).set(null);
    setMonitor(!monitor);
  }

  return (
    <>
      <ItemTodo>
        <ContainerCheckboxAndTasks>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => handleSubmitCheckbox(newValue)}
            tintColors={{true: '#4bb1f8', false: '#4bb1f8'}}
          />
          <TodoName>{data.task}</TodoName>
        </ContainerCheckboxAndTasks>
        {toggleCheckBox ? (
          <></>
        ) : (
          <ContainerEditAndDelete>
            <IconButton
              disabled={data.isCompleted}
              onPress={() => setModalVisibleEdit(true)}>
              <Icon source={pencil} />
            </IconButton>
            <IconButton
              disabled={data.isCompleted}
              onPress={() => handleDelete()}>
              <Icon source={trash} />
            </IconButton>
          </ContainerEditAndDelete>
        )}
      </ItemTodo>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleEdit}
        onRequestClose={() => {
          setModalVisibleEdit(!modalVisibleEdit);
        }}>
        <ModalContainer>
          <ModalView>
            <CloseButton onPress={() => setModalVisibleEdit(!modalVisibleEdit)}>
              <IconClose source={Close} />
            </CloseButton>
            <InputContainer>
              <InputContainerTitle>Tarefa:</InputContainerTitle>
              <InputContainerInput
                placeholderTextColor={'black'}
                placeholder="Atualize o nome da sua tarefa"
                onChangeText={text => onChangeText(text)}
              />
              <AddTaskButton onPress={handleSubmit}>
                <AddTaskButtonTitle>Atualizar</AddTaskButtonTitle>
              </AddTaskButton>
            </InputContainer>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
}
