import dispatcher from '../appDispatcher';
import actionTypes from './actionTypes';

export function capturePokemon(pokemon) {
  dispatcher.dispatch({
    actionType: actionTypes.CAPTURE_POKEMON,
    pokemon: pokemon
  });
}
