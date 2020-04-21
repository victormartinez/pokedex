import React from "react";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";

function ContainerPagination(props) {
  return (
    <Container maxWidth="lg">
      <Box display="flex" width={500} height={80} m="auto" marginTop={5}>
        <Pagination
          count={props.count}
          onChange={props.onChange}
          variant="outlined"
          color="secondary"
        />
      </Box>
    </Container>
  );
}
export default ContainerPagination;
