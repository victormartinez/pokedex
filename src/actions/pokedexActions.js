import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function capturePokemon(pokemon) {
  console.log("CAPTURE POKEMON ACTION");
  dispatcher.dispatch({
    actionType: actionTypes.CAPTURE_POKEMON,
    pokemon: pokemon
  });
}
