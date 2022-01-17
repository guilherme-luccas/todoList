import React, {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

import avatar from '../assets/images/Avatar2.png';
import computer from '../assets/icons/DesktopTower.png';
import cap from '../assets/icons/GraduationCap.png';
import cart from '../assets/icons/ShoppingCart.png';
import firstAid from '../assets/icons/FirstAidKit.png';
import iconCompleted from '../assets/icons/CircleWavyCheck.png';

import {
  Header,
  AvatarCircle,
  NameContainer,
  UserName,
  UserJob,
  BackgroundContainerApp,
  ContainerApp,
  TitlePage,
  ContainerProjects,
  ProjectWork,
  ProjectCollege,
  ProjectMarket,
  ProjectPharmacy,
  IconFolder,
  FolderTitle,
  ContainerTasksFolder,
  TaksCompleted,
  TaksTotal,
  TaskCompletedIcon,
} from './styles';
import {ActivityIndicator, StatusBar} from 'react-native';
import database from '@react-native-firebase/database';

interface ListProps {
  id: string;
  isCompleted: boolean;
  task: string;
}
interface ValueProps {
  isDone: boolean;
  task: string;
}

export default function Home({navigation}) {
  const [listWork, setListWork] = useState<Array<ListProps>>([]);
  const [listCollege, setListCollege] = useState<Array<ListProps>>([]);
  const [listMarket, setListMarket] = useState<Array<ListProps>>([]);
  const [listPharmacy, setListPharmacy] = useState<Array<ListProps>>([]);

  const [taskIndicatorWork, setTaskIndicatorWork] = useState<number>(0);
  const [taskIndicatorCollege, setTaskIndicatorCollege] = useState<number>(0);
  const [taskIndicatorMarket, setTaskIndicatorMarket] = useState<number>(0);
  const [taskIndicatorPharmacy, setTaskIndicatorPharmacy] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);
  const isFocused = useIsFocused();

  function FilterByIsCompleted(item: any) {
    const tasks = item.filter((item: any) => {
      return item.isCompleted === true;
    });
    return tasks.length;
  }

  function TasksWork() {
    return taskIndicatorWork === listWork.length ? (
      listWork.length > 0 ? (
        <TaskCompletedIcon source={iconCompleted} />
      ) : (
        <></>
      )
    ) : (
      <>
        <TaksCompleted>{FilterByIsCompleted(listWork)}/</TaksCompleted>
        <TaksTotal>{listWork.length}</TaksTotal>
      </>
    );
  }

  function TasksCollege() {
    return taskIndicatorCollege === listCollege.length ? (
      listCollege.length > 0 ? (
        <TaskCompletedIcon source={iconCompleted} />
      ) : (
        <></>
      )
    ) : (
      <>
        <TaksCompleted>{FilterByIsCompleted(listCollege)}/</TaksCompleted>
        <TaksTotal>{listCollege.length}</TaksTotal>
      </>
    );
  }
  function TasksMarket() {
    return taskIndicatorMarket === listMarket.length ? (
      listMarket.length > 0 ? (
        <TaskCompletedIcon source={iconCompleted} />
      ) : (
        <></>
      )
    ) : (
      <>
        <TaksCompleted>{FilterByIsCompleted(listMarket)}/</TaksCompleted>
        <TaksTotal>{listMarket.length}</TaksTotal>
      </>
    );
  }
  function TasksPharmacy() {
    return taskIndicatorPharmacy === listPharmacy.length ? (
      listPharmacy.length > 0 ? (
        <TaskCompletedIcon source={iconCompleted} />
      ) : (
        <></>
      )
    ) : (
      <>
        <TaksCompleted>{FilterByIsCompleted(listPharmacy)}/</TaksCompleted>
        <TaksTotal>{listPharmacy.length}</TaksTotal>
      </>
    );
  }
  useEffect(() => {
    async function getList() {
      setLoading(true);
      try {
        const listFromFirebaseWork = await database()
          .ref('/Trabalho')
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

        const listFromFirebaseCollege = await database()
          .ref('/Faculdade')
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
        const listFromFirebaseMarket = await database()
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
        const listFromFirebasePharmacy = await database()
          .ref('/Farmacia')
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

        const FilteredTasksWork = FilterByIsCompleted(listFromFirebaseWork);
        const FilteredTasksCollege = FilterByIsCompleted(
          listFromFirebaseCollege,
        );
        const FilteredTasksMarket = FilterByIsCompleted(listFromFirebaseMarket);
        const FilteredTasksPharmacy = FilterByIsCompleted(
          listFromFirebasePharmacy,
        );
        setListPharmacy(listFromFirebasePharmacy);
        setTaskIndicatorPharmacy(FilteredTasksPharmacy);

        setListMarket(listFromFirebaseMarket);
        setTaskIndicatorMarket(FilteredTasksMarket);

        setListCollege(listFromFirebaseCollege);
        setTaskIndicatorCollege(FilteredTasksCollege);

        setListWork(listFromFirebaseWork);
        setTaskIndicatorWork(FilteredTasksWork);

        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }

    getList();
  }, [isFocused]);

  return (
    <>
      <StatusBar hidden />
      <Header>
        <AvatarCircle source={avatar} />
        <NameContainer>
          <UserName>Guilherme L. Costa</UserName>
          <UserJob>Desenvolvedor Front-End</UserJob>
        </NameContainer>
      </Header>
      <BackgroundContainerApp>
        <ContainerApp>
          <TitlePage>Projetos:</TitlePage>
          <ContainerProjects>
            <ProjectWork onPress={() => navigation.navigate('Work')}>
              <IconFolder source={computer} />
              <FolderTitle>Trabalho</FolderTitle>
              <ContainerTasksFolder>
                {loading ? <ActivityIndicator /> : <TasksWork />}
              </ContainerTasksFolder>
            </ProjectWork>
            <ProjectCollege onPress={() => navigation.navigate('College')}>
              <IconFolder source={cap} />
              <FolderTitle>Faculdade</FolderTitle>
              <ContainerTasksFolder>
                {loading ? <ActivityIndicator /> : <TasksCollege />}
              </ContainerTasksFolder>
            </ProjectCollege>
            <ProjectMarket onPress={() => navigation.navigate('Market')}>
              <IconFolder source={cart} />
              <FolderTitle>Mercado</FolderTitle>
              <ContainerTasksFolder>
                {loading ? <ActivityIndicator /> : <TasksMarket />}
              </ContainerTasksFolder>
            </ProjectMarket>
            <ProjectPharmacy onPress={() => navigation.navigate('Pharmacy')}>
              <IconFolder source={firstAid} />
              <FolderTitle>Remédios</FolderTitle>
              <ContainerTasksFolder>
                {loading ? <ActivityIndicator /> : <TasksPharmacy />}
              </ContainerTasksFolder>
            </ProjectPharmacy>
          </ContainerProjects>
        </ContainerApp>
      </BackgroundContainerApp>
    </>
  );
}
