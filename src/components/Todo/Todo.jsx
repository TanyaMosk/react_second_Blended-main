import { Text } from 'components';
import {
    TodoWrapper,
    DeleteButton,
    // EditButton
} from './Todo.styled';
import {
    RiDeleteBinLine,
    // RiEdit2Line
} from 'react-icons/ri';

export const Todo = () => {
    return (
    <>
      <TodoWrapper>
       <Text textAlign="center" marginBottom="20px">
         TODO #1
        </Text>
        <Text>Some description</Text>
        <DeleteButton type="button">
        <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
    )
  
    // <h2>Todo</h2>;
};
