import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2";

function getPokemons(page, limit) {
  const pageNumber = page <= 0 ? 1 : page;
  const offset = (pageNumber - 1) * limit;

  const url = `${baseUrl}/pokemon?offset=${offset}&limit=${limit}`;
  return axios.get(url);
}

export function getUrls(data) {
  return data.results.map((element) => {
    return element.url;
  });
}

export function retrievePokemons(urls) {
  return axios.all(
    urls.map((url) => {
      return axios.get(url);
    })
  );
}

export function handleResponseMany(res) {
  return res.map((data) => {
    return data.data;
  });
}

export function handleResponse(res) {
  if (res.status !== 200) {
    throw Error(res);
  }
  return res.data;
}

export default getPokemons;
