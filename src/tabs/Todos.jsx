import { Component } from 'react';
// import { nanoid } from 'nanoid';
import {
    Grid,
    GridItem,
    SearchForm,
    // EditForm,
    Text,
    Todo
} from 'components';

export class Todos extends Component {
    state = {
        todos: [], 
    }

  render() {
      return (
          <>
       <Text>Todos</Text>
        <SearchForm />
         <Grid>
            <GridItem>
              <Todo />
            </GridItem>
         </Grid>
        </>
      )
      
  }
}
