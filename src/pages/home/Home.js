import React, { Component } from "react";

import PokeGrid from "../../components/PokeGrid";
import Pagination from "../../components/Pagination";
import paginationStore from "../../stores/paginationStore";
import pokemonStore from "../../stores/pokemonStore";
import * as pokemonActions from "../../actions/pokemonActions";
import * as pokedexActions from "../../actions/pokedexActions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.itemsPerPage = 24;
    this.state = { count: null, pokemons: null };
  }

  componentDidMount() {
    pokemonStore.addChangeListener(this.onChange);
    if (this.state.pokemons === null) {
      pokemonActions.loadPokemons(1, this.itemsPerPage);
    }
  }

  componentWillUnmount() {
    pokemonStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      count: paginationStore.getCount(),
      pokemons: pokemonStore.getPokemons(),
    });
  };

  onChangePage = (event, page) => {
    this.setState({ count: null, pokemons: null });
    pokemonActions.loadPokemons(page, this.itemsPerPage);
  };

  capturePokemonHandler(pokemon) {
    pokedexActions.capturePokemon(pokemon);
  }

  render() {
    return (
      <React.Fragment>
        <PokeGrid
          pokemons={this.state.pokemons}
          onCapturePokemon={this.capturePokemonHandler}
        />

        <Pagination
          count={Math.ceil(this.state.count / this.itemsPerPage)}
          onChange={this.onChangePage}
        />
      </React.Fragment>
    );
  }
}
export default Home;
