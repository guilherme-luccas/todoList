import React, {useEffect, useState} from 'react';
import {Alert, Modal, StatusBar} from 'react-native';

import computer from '../../assets/icons/DesktopTower.png';
import addButton from '../../assets/icons/AddButtonBlue.png';
import Close from '../../assets/icons/Close.png';

import {
  Header,
  BackgroundContainerApp,
  IconFolder,
  ContainerApp,
  TitleHeaderWork,
  Title,
  ContainerTitleAndTasks,
  TaskInformation,
  IconAdd,
  AddButton,
  ModalContainer,
  ModalView,
  CloseButton,
  IconClose,
  InputContainer,
  InputContainerTitle,
  InputContainerInput,
  AddTaskButton,
  AddTaskButtonTitle,
} from './styles';
import ItemTodo from './components/itemTodo';

import database from '@react-native-firebase/database';

// let itemsRef = database().ref('Trabalho');

export default function Work() {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, onChangeText] = useState('');

  function handleSubmit() {
    database()
      .ref('/Trabalho')
      .set({
        name,
      })
      .then(() => console.log('Data set.'))
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <StatusBar hidden />
      <Header>
        <IconFolder source={computer} />
        <TitleHeaderWork>
          <ContainerTitleAndTasks>
            <Title>Trabalho</Title>
            <TaskInformation>30/40 de tarefas</TaskInformation>
          </ContainerTitleAndTasks>
          <AddButton onPress={() => setModalVisible(true)}>
            <IconAdd source={addButton} />
          </AddButton>
        </TitleHeaderWork>
      </Header>
      <BackgroundContainerApp>
        <ContainerApp>
          <ItemTodo />
          <ItemTodo />
          <ItemTodo />
        </ContainerApp>
      </BackgroundContainerApp>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <ModalContainer>
          <ModalView>
            <CloseButton onPress={() => setModalVisible(!modalVisible)}>
              <IconClose source={Close} />
            </CloseButton>
            <InputContainer>
              <InputContainerTitle>Tarefa:</InputContainerTitle>
              <InputContainerInput
                placeholder="Digite sua tarefa"
                onChangeText={text => onChangeText(text)}
              />
              <AddTaskButton onPress={handleSubmit}>
                <AddTaskButtonTitle>Adicionar</AddTaskButtonTitle>
              </AddTaskButton>
            </InputContainer>
          </ModalView>
        </ModalContainer>
      </Modal>
    </>
  );
}
