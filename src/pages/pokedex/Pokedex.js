import React, { Component } from 'react';

import PokeGrid from '../../components/PokeGrid';
import pokedexStore from '../../stores/pokedexStore';

class Pokedex extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemons: []
    }
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

  render () {
    return (
      <React.Fragment>
          <PokeGrid pokemons={this.state.pokemons} />
      </React.Fragment>
    );
  }
}
export default Pokedex;