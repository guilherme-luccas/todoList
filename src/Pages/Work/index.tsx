import React, {useState} from 'react';
import {Modal, StatusBar} from 'react-native';

import computer from '../../assets/icons/DesktopTower.png';
import addButton from '../../assets/icons/AddButtonBlue.png';

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
} from './styles';
import ItemTodo from './components/itemTodo';

export default function Work() {
  const [modalVisible, setModalVisible] = useState(false);
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
        <Header>
          <AddButton onPress={() => setModalVisible(!modalVisible)}>
            <IconAdd source={addButton} />
          </AddButton>
        </Header>
      </Modal>
    </>
  );
}
