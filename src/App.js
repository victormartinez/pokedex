import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './components/TopBar';
import PokeGrid from './components/PokeGrid';
import Pagination from './components/Pagination';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <PokeGrid />
      <Pagination />
    </React.Fragment>
  );
}
export default App;