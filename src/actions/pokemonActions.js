import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";

import getPokemons, {
  retrievePokemons,
  handleResponse,
  handleResponseMany,
  getUrls,
} from "../services/PokeApi";

export function loadPokemons(page, itemsPerPage) {
  getPokemons(page, itemsPerPage)
    .then((res) => handleResponse(res))
    .then((data) => {
      dispatcher.dispatch({
        actionType: actionTypes.GET_PAGE_POKEMONS,
        count: data.count,
      });
      return data;
    })
    .then((data) => getUrls(data))
    .then((urls) => retrievePokemons(urls))
    .then((res) => handleResponseMany(res))
    .then((data) => {
      const results = data.map((pokemon) => {
        return {
          id: pokemon.id,
          name: pokemon.name,
          image: pokemon.sprites.front_default,
          types: pokemon.types.map((type) => {
            return type.type.name;
          }),
        };
      });

      dispatcher.dispatch({
        actionType: actionTypes.LOAD_POKEMONS,
        pokemons: results,
      });
    });
}
