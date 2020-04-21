import React from 'react';
import Grid from '@material-ui/core/Grid';

import PokeCard from './PokeCard';

function PokeRow(props) {
  return (
    <Grid container spacing={3}>
      {
        props.pokemons.map(pokemon => {
          return <PokeCard key={pokemon.id} pokemon={pokemon} onCapturePokemon={props.onCapturePokemon} onFreePokemon={props.onFreePokemon} />
        })
      }
    </Grid>
  );
}
export default PokeRow;