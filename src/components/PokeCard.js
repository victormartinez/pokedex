import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth: 345,
    },
}));

function PokeCard(props) {
  const classes = useStyles();
  const pokemon = props.pokemon;

  return (
      <Grid item xs={2}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={pokemon.name}
                height="140"
                image={pokemon.image}
                title={pokemon.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {pokemon.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {pokemon.types.map(type => type.toUpperCase()).join(" | ")}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={() => props.onCapturePokemon(pokemon)}>
                Capture
              </Button>
            </CardActions>
          </Card>
        </Grid>
  );
}
export default PokeCard;