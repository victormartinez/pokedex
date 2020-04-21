import React, { Component } from 'react';

import PokeGrid from '../../components/PokeGrid';
import * as pokedexActions from '../../actions/pokedexActions';
import pokedexStore from '../../stores/pokedexStore';

class Pokedex extends Component {

  constructor(props) {
    super(props);
    this.state = { pokemons: [] }
  }

  componentDidMount() {
    pokedexStore.addChangeListener(this.onChange);
    this.setState({
      pokemons: pokedexStore.getPokemons()
    });
  }

  componentWillUnmount() {
    pokedexStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState({
      pokemons: pokedexStore.getPokemons()
    });
  }

  freePokemonHandler(pokemon) {
    pokedexActions.freePokemon(pokemon);
  }

  render () {
    return (
      <React.Fragment>
          <PokeGrid
            pokemons={this.state.pokemons}
            onFreePokemon={this.freePokemonHandler} />
      </React.Fragment>
    );
  }
}
export default Pokedex;