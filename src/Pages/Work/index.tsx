import React, {useEffect, useState} from 'react';
import {Alert, Modal, StatusBar, Text} from 'react-native';

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
import {useNavigation} from '@react-navigation/native';

const newReference = database().ref('/Trabalho');
interface ListProps {
  id: string;
  isCompleted: boolean;
  task: string;
}
interface ValueProps {
  isDone: boolean;
  task: string;
}
export default function Work() {
  const [modalVisible, setModalVisible] = useState(false);

  const [name, onChangeText] = useState('');
  const [list, setList] = useState<Array<ListProps>>([]);
  const {goBack} = useNavigation();
  function handleSubmit() {
    newReference
      .push()
      .set({
        task: name,
        isDone: false,
      })
      .then(() => console.log('Data updated.'));
    goBack();
  }

  useEffect(() => {
    async function getList() {
      try {
        const listFromFirebase = await database()
          .ref('/Trabalho')
          .once('value')
          .then(snapshot => {
            const tasks: ValueProps = snapshot.val();

            return Object.entries(tasks).map(([key, value]) => {
              return {
                id: key,
                isCompleted: value.isDone,
                task: value.task,
              };
            });
          });

        setList(listFromFirebase);
      } catch (err) {}
    }
    getList();
  }, []);

  console.log(list);

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
          {list?.map(item => {
            return <ItemTodo key={item.id} data={item} />;
          })}
          {/* <ItemTodo /> */}
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
