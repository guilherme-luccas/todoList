import styled from 'styled-components/native';
import {ScrollView, TouchableOpacity} from 'react-native';

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.orange};
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
  line-height: 24px;
  color: ${({theme}) => theme.colors.text1};
  font-family: ${({theme}) => theme.fonts.bold};
`;
export const UserJob = styled.Text`
  font-size: 15px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.text2};
  font-family: ${({theme}) => theme.fonts.regular};
`;
export const BackgroundContainerApp = styled.View`
  background-color: ${({theme}) => theme.colors.orange};
  flex: 1;
`;
export const ContainerApp = styled(ScrollView)`
  background-color: white;
  flex: 1;
  border-top-left-radius: 70px;
  padding-top: 48px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const TitlePage = styled.Text`
  font-size: 20px;
  line-height: 24px;
  color: ${({theme}) => theme.colors.orange};
  font-family: ${({theme}) => theme.fonts.bold};
`;
export const ContainerProjects = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 32px;
`;
export const ProjectWork = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.colors.blue};
  height: 130px;
  width: 145px;
  border-radius: 20px;
  margin-bottom: 15px;
  margin-right: 10px;
`;
export const ProjectCollege = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.colors.green};
  height: 130px;
  width: 145px;
  border-radius: 20px;
  margin-bottom: 15px;
`;
export const ProjectMarket = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.colors.orange};
  height: 130px;
  width: 145px;
  border-radius: 20px;
  margin-bottom: 15px;
  margin-right: 10px;
`;
export const ProjectPharmacy = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.colors.red};
  height: 130px;
  width: 145px;
  border-radius: 20px;
  margin-bottom: 75px;
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
  color: ${({theme}) => theme.colors.text1};
  margin-left: 12px;
  font-family: ${({theme}) => theme.fonts.regular};
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
  color: ${({theme}) => theme.colors.text1};
  font-family: ${({theme}) => theme.fonts.bold};
`;
export const TaksTotal = styled.Text`
  font-size: 15px;
  line-height: 22px;
  color: ${({theme}) => theme.colors.text1};
  opacity: 0.7;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const TaskCompletedIcon = styled.Image``;
