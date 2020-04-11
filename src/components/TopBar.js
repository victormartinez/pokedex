import React from 'react';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 30
  },
  title: {
    flexGrow: 1,
  },
}));

function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Pokedex
          </Typography>
            <IconButton aria-label="home" color="default">
              <Link to="/">
                <HomeIcon/>
              </Link>
            </IconButton>
            <IconButton aria-label="pokedex" color="default">
              <Link to="/pokedex">
                <ListAltIcon/>
              </Link>
            </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default TopBar;