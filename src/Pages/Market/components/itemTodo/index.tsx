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
  InputContainerError,
  InputContainerInput,
  InputContainerTitle,
  ModalContainer,
  ModalView,
} from '../../styles';
import Close from '../../../../assets/icons/Close.png';
import {MonitorContext} from '../../../../context';

interface ItemTodo {
  data: {
    id: string;
    isCompleted: boolean;
    task: string;
  };
}
export default function Itemtodo({data}: ItemTodo) {
  const {monitor, setMonitor} = useContext(MonitorContext);

  const newReference = database().ref(`/Mercado/${data.id}`);

  const [name, onChangeText] = useState(data.task);
  const [modalVisibleEdit, setModalVisibleEdit] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(
    data.isCompleted,
  );
  const [errorSubmit, setErrorSubmit] = useState<boolean>(false);

  function handleSubmitCheckbox(value: boolean) {
    setToggleCheckBox(value);
    newReference.update({
      isDone: !toggleCheckBox,
    });
    setMonitor(!monitor);
  }

  function handleSubmit() {
    if (!name) {
      setErrorSubmit(true);
      return;
    }
    newReference.update({
      task: name,
    });
    setModalVisibleEdit(!modalVisibleEdit);
    setMonitor(!monitor);
    setErrorSubmit(false);
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
                value={name}
                placeholderTextColor="black"
                placeholder="Digite um novo nome para sua tarefa"
                onChangeText={text => onChangeText(text)}
              />
              {errorSubmit ? (
                <InputContainerError>Campo Obrigatório</InputContainerError>
              ) : (
                <></>
              )}
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
