import React from "react";

import Alert from "@material-ui/lab/Alert";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";

import PokeRow from "./PokeRow";

function chunkArray(myArray, chunk_size) {
  var results = [];
  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }
  return results;
}

function Loader() {
  return (
    <Box display="flex" width={44} height={44} m="auto" marginTop={5}>
      <CircularProgress color="secondary" />
    </Box>
  );
}

function Main(props) {
  const itemsPerRow = 6;
  if (props.pokemons === null) {
    return <Loader />;
  } else if (props.pokemons.length > 0) {
    const chunks = chunkArray(props.pokemons, itemsPerRow);
    return chunks.map((row, index) => {
      return (
        <PokeRow
          key={index}
          pokemons={row}
          onCapturePokemon={props.onCapturePokemon}
          onFreePokemon={props.onFreePokemon}
        />
      );
    });
  } else {
    return (
      <Grid container spacing={12}>
        <Alert severity="warning" display="flex" m="auto">
          You have no pokemons yet.
        </Alert>
      </Grid>
    );
  }
}

function PokeGrid(props) {
  return (
    <Container maxWidth="lg">
      <Main {...props} />
    </Container>
  );
}
export default PokeGrid;
