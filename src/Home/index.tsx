import React from 'react';
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

export default function Home({navigation}) {
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
                <TaksCompleted>02/</TaksCompleted>
                <TaksTotal>10</TaksTotal>
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
