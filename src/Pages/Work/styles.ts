import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Header = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #4bb1f8;
  padding-top: 19px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
`;

export const BackgroundContainerApp = styled.View`
  background-color: #4bb1f8;
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
export const IconFolder = styled.Image`
  height: 60px;
  width: 60px;
`;
export const TitleHeaderWork = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ContainerTitleAndTasks = styled.View`
  display: flex;
`;
export const Title = styled.Text`
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;
`;
export const TaskInformation = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: rgba(255, 255, 255, 0.7);
`;

export const AddButton = styled(TouchableOpacity)`
  height: 60px;
  width: 60px;
`;
export const IconAdd = styled.Image``;
