import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    query: '',
    images: [],
    page: 1,   
    noResults: false,
  };

  handleSubmit = value => {
    this.setState({ query: value });

    if (value.trim() === "") {
      this.setState({
          images: [],
        });
      alert('Please fill in the field!');
      return;
    }

    if (this.query !== "") {
      this.changeQuery(value);
      return;
    }
  };

  changeQuery = (newQuery) => {
    this.setState({
      query: newQuery,
      images: [],
      page: 1,
    })
  };

  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      
      this.fetch(this.guery, this.page);
    }
  }
 
  fetch = async () => {
    const { query, page } = this.state;

    try {
      if (query.trim() === '') {        
        return;
      }
      const result = await ImageService.getImages(query, page);
      // console.log(result.total_results);

      if (result.total_results === 0) {
        this.setState({
          noResults: true,
        });
        return;
      }

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...result.photos], 
          noResults: false,
        };
      });
    } catch (error) {
      console.log(error);
    }
  };

  loadMore =()=> {
    this.setState(prevState => ({ page: prevState.page + 1 }));    
  }
  

  render() {
    const { images, noResults } = this.state;

    return (
      <>
        <SearchForm onSubmit={this.handleSubmit} />
        
        {/* {images.length < 1 && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )} */}

        {noResults ? <Text textAlign="center">Sorry. There are no images ... 😭</Text> :
          <Grid>
          {images.map(({ id, avg_color, alt, src: { large } }) => (
            <GridItem key={id}>
              <CardItem color={avg_color}>
                <img src={large} alt={alt} />
              </CardItem>
            </GridItem>            
          ))}          
        </Grid>        
         }       
        {images.length !== 0 && <Button type='button' onClick={this.loadMore}>Load more</Button>}        
      </>
    );
  }
}
