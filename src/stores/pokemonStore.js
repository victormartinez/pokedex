import { EventEmitter } from "events";
import dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";

let _pokemons = [];

class PokemonStore extends EventEmitter {
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
    return _pokemons;
  }
}

const store = new PokemonStore();

dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.LOAD_POKEMONS:
      _pokemons = action.pokemons;
      store.emitChange();
      break;

    default:
    // do nothing
  }
});

export default store;
