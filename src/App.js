import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 30
  },
  card: {
    maxWidth: 345,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <ButtonAppBar />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Bulbasaur"
                  height="140"
                  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
                  title="Bulbasaur"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Bulbasaur
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    GRASS | POISON
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Capture
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Ivysaur"
                  height="140"
                  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
                  title="Ivysaur"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Ivysaur
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    GRASS | POISON
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Capture
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Venusaur"
                  height="140"
                  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
                  title="Venusaur"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Venusaur
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    GRASS | POISON
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Capture
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Charmander"
                  height="140"
                  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
                  title="Charmander"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Charmander
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    FIRE
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Capture
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Charmeleon"
                  height="140"
                  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
                  title="Charmeleon"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Charmeleon
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    FIRE
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Capture
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Charizard"
                  height="140"
                  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
                  title="Charizard"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Charizard
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    FIRE
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Capture
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Squirtle"
                  height="140"
                  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
                  title="Squirtle"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Squirtle
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    WATER
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Capture
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Wartortle"
                  height="140"
                  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
                  title="Wartortle"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Wartotle
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    WATER
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Capture
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Box display="flex" width={500} height={80} m="auto" marginTop={5}>
          <Pagination count={10} variant="outlined" color="secondary" />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;