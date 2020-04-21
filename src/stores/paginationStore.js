import { EventEmitter } from 'events';
import dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = "change";

let _count = 0;

class PaginationStore extends EventEmitter {

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCount() {
    return _count;
  }
}

const store = new PaginationStore();

dispatcher.register(action => {
  switch(action.actionType) {
    case actionTypes.GET_PAGE_POKEMONS:
      _count = action.count;
      store.emitChange();
      break;

    default:
      // do nothing
  }
});

export default store;
