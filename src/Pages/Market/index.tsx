import React, {useContext, useEffect, useState} from 'react';
import {Modal, StatusBar, ActivityIndicator, ScrollView} from 'react-native';

import cart from '../../assets/icons/ShoppingCart.png';
import addButton from '../../assets/icons/Plus.png';
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
  InputContainerError,
} from './styles';
import ItemTodo from './components/itemTodo';

import database from '@react-native-firebase/database';
import {MonitorContext} from '../../context';

const newReference = database().ref('/Mercado');
interface ListProps {
  id: string;
  isCompleted: boolean;
  task: string;
}
interface ValueProps {
  isDone: boolean;
  task: string;
}
export default function Market() {
  const {monitor, setMonitor} = useContext(MonitorContext);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, onChangeText] = useState('');
  const [list, setList] = useState<Array<ListProps>>([]);
  const [errorSubmit, setErrorSubmit] = useState<boolean>(false);

  function handleSubmit() {
    if (!name) {
      setErrorSubmit(true);
      return;
    }
    newReference.push().set({
      task: name,
      isDone: false,
    });
    setModalVisible(!modalVisible);
    setMonitor(!monitor);
    onChangeText('');

    setErrorSubmit(false);
  }

  function FilterByIsCompleted(item: any) {
    const tasks = item.filter((item: any) => {
      return item.isCompleted === true;
    });
    return tasks.length;
  }

  useEffect(() => {
    async function getList() {
      try {
        const listFromFirebase = await database()
          .ref('/Mercado')
          .once('value')
          .then(snapshot => {
            const tasks: ValueProps = snapshot.val();
            if (!tasks) {
              return [];
            }

            return Object.entries(tasks).map(([key, value]) => {
              return {
                id: key,
                isCompleted: value.isDone,
                task: value.task,
              };
            });
          });

        setList(listFromFirebase);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    getList();
    FilterByIsCompleted(list);
  }, [monitor]);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <>
      <StatusBar hidden />
      <Header>
        <IconFolder source={cart} />
        <TitleHeaderWork>
          <ContainerTitleAndTasks>
            <Title>Mercado</Title>
            <TaskInformation>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <>
                  {FilterByIsCompleted(list)}/{list.length} de tarefas
                </>
              )}
            </TaskInformation>
          </ContainerTitleAndTasks>
          <AddButton onPress={() => setModalVisible(true)}>
            <IconAdd source={addButton} />
          </AddButton>
        </TitleHeaderWork>
      </Header>
      <BackgroundContainerApp>
        <ContainerApp>
          <ScrollView>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <>
                {list?.map(item => {
                  return <ItemTodo key={item.id} data={item} />;
                })}
              </>
            )}
          </ScrollView>
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
                placeholderTextColor="black"
                placeholder="Digite sua tarefa"
                onChangeText={text => onChangeText(text)}
              />
              {errorSubmit ? (
                <InputContainerError>Campo Obrigatório</InputContainerError>
              ) : (
                <></>
              )}
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
