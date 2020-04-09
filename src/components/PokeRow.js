import React from 'react';
import Grid from '@material-ui/core/Grid';

import PokeCard from './PokeCard';

function PokeRow() {
    return (
        <Grid container spacing={3}>
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
          <PokeCard />
        </Grid>
    );
}
export default PokeRow;