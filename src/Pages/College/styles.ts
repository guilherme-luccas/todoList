import {TouchableOpacity, TextInput} from 'react-native';
import styled from 'styled-components/native';

export const Header = styled.View`
  display: flex;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.green};
  padding-top: 19px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
`;

export const BackgroundContainerApp = styled.View`
  background-color: ${({theme}) => theme.colors.green};
  flex: 1;
`;
export const ContainerApp = styled.View`
  background-color: ${({theme}) => theme.colors.white};
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
  font-size: 32px;
  line-height: 39px;
  color: ${({theme}) => theme.colors.text1};
  font-family: ${({theme}) => theme.fonts.bold};
`;
export const TaskInformation = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: ${({theme}) => theme.colors.text2};
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const AddButton = styled(TouchableOpacity)`
  height: 60px;
  width: 60px;
`;
export const IconAdd = styled.Image``;

export const ModalContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000047;
  position: relative;
`;
export const ModalView = styled.View`
  height: 239px;
  width: 90%;
  border-radius: 20px;
  background-color: ${({theme}) => theme.colors.white};
  padding: 15px;
  position: relative;
`;
export const CloseButton = styled(TouchableOpacity)`
  height: 40px;
  width: 40px;
  position: absolute;
  right: 10px;
  top: 20px;
`;
export const IconClose = styled.Image`
  height: 30px;
  width: 30px;
`;
export const InputContainer = styled.View`
  width: 100%;
`;
export const InputContainerTitle = styled.Text`
  font-size: 17px;
  line-height: 17px;
  color: ${({theme}) => theme.colors.text3};
  margin-top: 45px;
  font-family: ${({theme}) => theme.fonts.regular};
`;
export const InputContainerInput = styled(TextInput)`
  width: 100%;
  height: 50px;
  background: ${({theme}) => theme.colors.gray};
  border-radius: 10px;
  margin-top: 10px;
  font-family: ${({theme}) => theme.fonts.regular};
`;
export const AddTaskButton = styled(TouchableOpacity)`
  height: 50px;
  width: 100%;
  color: ${({theme}) => theme.colors.text1};
  background-color: ${({theme}) => theme.colors.orange};
  margin-top: 24px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
export const AddTaskButtonTitle = styled.Text`
  font-size: 16px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.text1};
  font-family: ${({theme}) => theme.fonts.bold};
`;
export const InputContainerError = styled.Text`
  margin-top: 4px;
  font-size: 12px;
  line-height: 13px;
  color: ${({theme}) => theme.colors.red};
  font-family: ${({theme}) => theme.fonts.regular};
`;
