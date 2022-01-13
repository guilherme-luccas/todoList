import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f28119;
  padding-top: 40px;
  padding-left: 20px;
  padding-bottom: 32px;
`;
export const AvatarCircle = styled.Image`
  height: 95px;
  width: 95px;
`;
export const NameContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const UserName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  color: white;
`;
export const UserJob = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: #ffffffb0;
`;
export const BackgroundContainerApp = styled.View`
  background-color: #f28119;
  flex: 1;
`;
export const ContainerApp = styled.View`
  background-color: white;
  flex: 1;
  border-top-left-radius: 70px;
  padding-top: 48px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const TitlePage = styled.Text`
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  color: #f28119;
`;
export const ContainerProjects = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 32px;
`;
export const ProjectWork = styled(TouchableOpacity)`
  background-color: #4bb1f8;
  height: 130px;
  width: 160px;
  border-radius: 20px;
  margin-bottom: 15px;
`;
export const ProjectCollege = styled(TouchableOpacity)`
  background-color: #53db89;
  height: 130px;
  width: 160px;
  border-radius: 20px;
  margin-bottom: 15px;
`;
export const ProjectMarket = styled(TouchableOpacity)`
  background-color: #f98a4b;
  height: 130px;
  width: 160px;
  border-radius: 20px;
  margin-bottom: 15px;
`;
export const ProjectPharmacy = styled(TouchableOpacity)`
  background-color: #ff5e5e;
  height: 130px;
  width: 160px;
  border-radius: 20px;
  margin-bottom: 15px;
`;
export const IconFolder = styled.Image`
  height: 50px;
  width: 50px;
  margin-top: 24px;
  margin-left: 12px;
`;
export const FolderTitle = styled.Text`
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin-left: 12px;
`;
export const ContainerTasksFolder = styled.View`
  width: 85%;
  margin: auto;
  height: 22px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
export const TaksCompleted = styled.Text`
  font-size: 17px;
  line-height: 22px;
  color: #ffffff;
  font-weight: bold;
`;
export const TaksTotal = styled.Text`
  font-size: 15px;
  line-height: 22px;
  color: #ffffff;
  opacity: 0.7;
  font-weight: bold;
`;
