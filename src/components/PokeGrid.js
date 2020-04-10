import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import PokeRow from './PokeRow';


function chunkArray(myArray, chunk_size){
  var results = [];
  while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
  }
  return results;
}

function Loader() {
  return(
    <Box display="flex" width={44} height={44} m="auto" marginTop={5}>
      <CircularProgress color="secondary" />
    </Box>
  );
}

function Main({pokemons}) {

  const itemsPerRow = 6;
  if (pokemons.length > 0) {
    const chunks = chunkArray(pokemons, itemsPerRow);
    return chunks.map((row, index) => {
      return <PokeRow key={index} pokemons={row} />
    })
  } else {
    return <Loader />
  }
}

function PokeGrid({ pokemons }) {
  return (
    <Container maxWidth="lg">
      <Main pokemons={pokemons} />
    </Container>
  );
} 
export default PokeGrid;