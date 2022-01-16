import React, {useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import avatar from '../assets/images/avatar.png';
import computer from '../assets/icons/DesktopTower.png';
import cap from '../assets/icons/GraduationCap.png';
import cart from '../assets/icons/ShoppingCart.png';
import firstAid from '../assets/icons/FirstAidKit.png';

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
} from './styles';
import {StatusBar} from 'react-native';
import database from '@react-native-firebase/database';
import {MonitorContext} from '../context';

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
  const [list, setList] = useState<Array<ListProps>>([]);

  function FilterByIsCompleted(item: any) {
    const tasks = item.filter((item: any) => {
      return item.isCompleted === true;
    });
    return tasks.length;
  }

  useFocusEffect(() => {
    async function getList() {
      console.log(' entrou');

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
  });

  return (
    <>
      <StatusBar hidden />
      <Header>
        <AvatarCircle source={avatar} />
        <NameContainer>
          <UserName>Jonas B. Alves</UserName>
          <UserJob>Desenvolvedor</UserJob>
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
                <TaksCompleted>{FilterByIsCompleted(list)}/</TaksCompleted>
                <TaksTotal>{list.length}</TaksTotal>
              </ContainerTasksFolder>
            </ProjectWork>
            <ProjectCollege>
              <IconFolder source={cap} />
              <FolderTitle>Faculdade</FolderTitle>
              <ContainerTasksFolder>
                <TaksCompleted>02/</TaksCompleted>
                <TaksTotal>05</TaksTotal>
              </ContainerTasksFolder>
            </ProjectCollege>
            <ProjectMarket>
              <IconFolder source={cart} />
              <FolderTitle>Mercado</FolderTitle>
              <ContainerTasksFolder>
                <TaksCompleted>02/</TaksCompleted>
                <TaksTotal>30</TaksTotal>
              </ContainerTasksFolder>
            </ProjectMarket>
            <ProjectPharmacy>
              <IconFolder source={firstAid} />
              <FolderTitle>Remédios</FolderTitle>
              <ContainerTasksFolder>
                <TaksCompleted>02/</TaksCompleted>
                <TaksTotal>02</TaksTotal>
              </ContainerTasksFolder>
            </ProjectPharmacy>
          </ContainerProjects>
        </ContainerApp>
      </BackgroundContainerApp>
    </>
  );
}
