import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native';

export const ItemTodo = styled.View`
  width: 100%;
  height: 61px;
  padding: 15px;
  border: 1px solid #4bb1f840;
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
  font-size: 16px;
  line-height: 18px;
  color: #4bb1f8;
`;
export const IconButton = styled(TouchableOpacity)`
  width: 26px;
  height: 26px;
`;
export const Icon = styled.Image`
  width: 25px;
  height: 25px;
`;
