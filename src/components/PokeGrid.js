import React from 'react';
import Container from '@material-ui/core/Container';

import PokeRow from './PokeRow';


function chunkArray(myArray, chunk_size){
  var results = [];
  while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
  }
  return results;
}

function PokeGrid({ pokemons }) {

  const itemsPerRow = 6;
  const chunks = chunkArray(pokemons, itemsPerRow);

  return (
    <Container maxWidth="lg">
      {
        chunks.map((row, index) => {
          return <PokeRow key={index} pokemons={row} />
        })
      }
    </Container>
  );
} 
export default PokeGrid;