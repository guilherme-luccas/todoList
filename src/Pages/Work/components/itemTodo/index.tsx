import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

import pencil from '../../../../assets/icons/Pencil.png';
import trash from '../../../../assets/icons/Trash.png';

import {
  ItemTodo,
  ContainerCheckboxAndTasks,
  TodoName,
  ContainerEditAndDelete,
  IconButton,
  Icon,
} from './styles';

export default function Itemtodo() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ItemTodo>
      <ContainerCheckboxAndTasks>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          tintColors={{true: '#4bb1f8', false: '#4bb1f8'}}
        />
        <TodoName>Tarefa de numero 2</TodoName>
      </ContainerCheckboxAndTasks>
      <ContainerEditAndDelete>
        <IconButton>
          <Icon source={pencil} />
        </IconButton>
        <IconButton>
          <Icon source={trash} />
        </IconButton>
      </ContainerEditAndDelete>
    </ItemTodo>
  );
}
