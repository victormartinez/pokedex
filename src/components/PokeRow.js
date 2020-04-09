import React from 'react';
import Grid from '@material-ui/core/Grid';

import PokeCard from './PokeCard';

function PokeRow({pokemons}) {
  return (
    <Grid container spacing={3}>
      {
        pokemons.map(pokemon => {
          return <PokeCard key={pokemon.id} pokemon={pokemon} />
        })
      }
    </Grid>
  );
}
export default PokeRow;