import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './components/TopBar';
import PokeGrid from './components/PokeGrid';
import Pagination from './components/Pagination';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemons: [
        {
          id: 1,
          name: "Bulbasaur",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          types: ["grass", "poison"]
        },
        {
          id: 2,
          name: "Bulbasaur",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          types: ["grass", "poison"]
        },
        {
          id: 3,
          name: "Bulbasaur",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          types: ["grass", "poison"]
        },
        {
          id: 4,
          name: "Bulbasaur",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          types: ["grass", "poison"]
        },
        {
          id: 5,
          name: "Bulbasaur",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          types: ["grass", "poison"]
        },
        {
          id: 6,
          name: "Bulbasaur",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          types: ["grass", "poison"]
        },
        {
          id: 7,
          name: "Bulbasaur",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          types: ["grass", "poison"]
        },
        {
          id: 8,
          name: "Bulbasaur",
          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          types: ["grass", "poison"]
        }
      ]
    }
  }

  render () {
    return (
      <React.Fragment>
        <CssBaseline />
        <TopBar />
        <PokeGrid pokemons={this.state.pokemons} />
        <Pagination />
      </React.Fragment>
    );
  }
}
export default App;