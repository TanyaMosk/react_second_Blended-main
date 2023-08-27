import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export class SearchForm extends Component {
  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
    this.reset();
  };

  handleInput = e => {
    const { value } = e.currentTarget;
    this.setState({ query: value });
  };

  reset = () => {
    this.setState({ query: '' });
  };
  render() {
    return (
      <SearchFormStyled onSubmit={this.handleSubmit}>
        <InputSearch onChange={this.handleInput} value={this.state.query}
         placeholder="What do you want to write?"
         name="search"
         required
         autoFocus/>
        <FormBtn type="submit">
          <FiSearch />
        </FormBtn>
      </SearchFormStyled>
    );
  }
}
