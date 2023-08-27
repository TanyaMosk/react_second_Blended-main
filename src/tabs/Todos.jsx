import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
    Grid,
    GridItem,
    SearchForm,
    // EditForm,
    Text,
    Todo
} from 'components';

const STORAGE_KEY = 'saved_contacts'

export class Todos extends Component {
    state = {
        todos: [], 
    }
  //  Дістаємо з локал сторадж внесені контакти
  componentDidMount() {
    const storage = localStorage.getItem(STORAGE_KEY);
    const storageContacts = JSON.parse(storage);
  //  Перевіряємо чи є дані в сховищі
    if (storageContacts !== null) {
      this.setState({ todos: storageContacts });
    }
  }

  // Додаємо в локал сторадж контакти
  componentDidUpdate(prevProps, prevState) {
    
    if (this.state.todos !== prevState.todos) {      
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.todos));
   }    
  }
  
  handleSubmit = (newText) => {
    const todo = { text: newText, id: nanoid() };
    this.setState(prevState => ({ todos: [...prevState.todos, todo] })
    );    
  };
  
  onDelete = (todoId) => {
    // console.log(todoId);    
    this.setState(prevState => ({ todos: prevState.todos.filter(todo => todo.id !== todoId) }));
  };

  render() {    

    const { todos } = this.state;

      return (
          <>
       <Text>Todos</Text>
        <SearchForm onSubmit={this.handleSubmit}/>
          <Grid>
            {todos.map(({ text, id },index) => (
                <GridItem key={id} >
                <Todo id={id} text={text} index={index +1} onDelete={this.onDelete} />
            </GridItem>
            ))}            
         </Grid>
        </>
      )
      
  }
}
