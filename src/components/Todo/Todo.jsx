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

export const Todo = ({id,text,onDelete,index}) => {
    return (
    <>
      <TodoWrapper>
       <Text textAlign="center" marginBottom="20px">
         TODO #{index}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={()=>{onDelete(id)}}>
        <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
    )
  
    // <h2>Todo</h2>;
};
