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
  switch(action.actionType) {
    case actionTypes.CAPTURE_POKEMON:
      let data = "";
      const pokedex = window.localStorage.getItem("pokedex");
      if (pokedex === null) {
        data = JSON.stringify([action.pokemon])
      } else {
        const arr = JSON.parse(pokedex);
        arr.push(action.pokemon);
        data = JSON.stringify(arr)
      }
      window.localStorage.setItem("pokedex", data);
      store.emitChange();
      break;

    default:
      // do nothing
  }
});

export default store;