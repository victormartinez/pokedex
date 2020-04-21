import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = "change";

class PokedexStore extends EventEmitter {

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getPokemons() {
    const pokedex = window.localStorage.getItem("pokedex");
    if (pokedex === null) {
      return [];
    }
    return JSON.parse(pokedex);
  }
}

const store = new PokedexStore();

dispatcher.register(action => {
  const pokedex = window.localStorage.getItem("pokedex");

  switch(action.actionType) {
    case actionTypes.CAPTURE_POKEMON:
      let data = "";
      if (pokedex === null) {
        data = JSON.stringify([action.pokemon])
      } else {
        const arr = JSON.parse(pokedex);
        const pokemonIds = new Set(arr.map(pokemon => parseInt(pokemon.id)));

        if (!pokemonIds.has(parseInt(action.pokemon.id))) {
          arr.push(action.pokemon);
          data = JSON.stringify(arr);
        } else {
          data = JSON.stringify(arr);
        }
      }
      window.localStorage.setItem("pokedex", data);
      store.emitChange();
      break;

    case actionTypes.FREE_POKEMON:
      const res = JSON.parse(pokedex).filter(pokemon => pokemon.id !== parseInt(action.pokemon.id))
      window.localStorage.setItem("pokedex", JSON.stringify(res));
      store.emitChange();
      break;

    default:
      // do nothing
  }
});

export default store;
