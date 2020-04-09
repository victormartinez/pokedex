import React from 'react';
import Container from '@material-ui/core/Container';
import PokeRow from './PokeRow';

function PokeGrid() {
    return (
      <Container maxWidth="lg">
        <PokeRow />
        <PokeRow />
        <PokeRow />
        <PokeRow />
        <PokeRow />
      </Container>
    );
}
export default PokeGrid;