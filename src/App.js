import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './components/TopBar';
import PokeGrid from './components/PokeGrid';
import Pagination from './components/Pagination';
import getPokemons, { retrievePokemons, handleResponse, handleResponseMany, getUrls } from './services/PokeApi';


class App extends Component {

  constructor(props) {
    super(props);
    this.itemsPerPage = 24;

    this.state = {
      count: 0,
      next: null,
      previous: null,
      results: []
    }
  }

  componentDidMount() {
    this.fetchAndRenderPokemons(1);
  }

  fetchAndRenderPokemons(page) {
    getPokemons(page, this.itemsPerPage)
    .then(res => handleResponse(res))
    .then(data => this.savePagination(data))
    .then(data => getUrls(data))
    .then(urls => retrievePokemons(urls))
    .then(res => handleResponseMany(res))
    .then(pokemons => this.savePokemons(pokemons))
    .catch(err => {
      // TODO
      console.log(err)
    })
  }

  savePagination(data) {
    this.setState({
      count: data.count,
      next: data.next,
      previous: data.previous,
      results: []
    });
    return data;
  }

  savePokemons(pokemons) {
    const { count, next, previous } = this.state;
    const results = pokemons.map(pokemon => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        types: pokemon.types.map(type => { return type.type.name })
      }
    });
    this.setState({
      count: count,
      next: next,
      previous: previous,
      results: results
    })
  }

  onChangePage = (event, page) => {
    this.fetchAndRenderPokemons(page);
  }

  render () {
    return (
      <React.Fragment>
        <CssBaseline />
        <TopBar />
        <PokeGrid pokemons={this.state.results} />
        <Pagination 
          count={Math.ceil(this.state.count / this.itemsPerPage)} 
          onChange={this.onChangePage} />
      </React.Fragment>
    );
  }
}
export default App;