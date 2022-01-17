import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const ItemTodo = styled.View`
  width: 100%;
  padding: 15px;
  border: 1px solid ${({theme}) => theme.colors.borderColor1};
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;
export const ContainerCheckboxAndTasks = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
`;
export const ContainerEditAndDelete = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;
export const TodoName = styled.Text`
  width: 220px;
  font-size: 16px;
  line-height: 18px;
  color: ${({theme}) => theme.colors.blue};
  font-family: ${({theme}) => theme.fonts.regular};
`;
export const IconButton = styled(TouchableOpacity)`
  width: 26px;
  height: 26px;
`;
export const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;
