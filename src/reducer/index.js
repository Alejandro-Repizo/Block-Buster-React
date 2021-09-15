import { ADD_MOVIES, SET_FILTER, SEARCH_MOVIE } from "../actions/index.js";
import {
  movieListAsMap,
  getAllIds,
  getLeastValuedIds,
  getMostValuedIds,
} from "../normalize.js";

function filterByTitle(title, movies) {
  /**
   * Crear un nuevo array con los elementos
   * que cumplan la condición de la función dada.
   */
  const list = []

  movies.forEach((movie) => {
    if (movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())) {
      return list.push(movie.id)
    }
  });

  return list
}

function findById(id, allIds) {
  /**
   * Find te ayuda a encontrar un elemento
   * dentro de una lista, el iterador terminará
   *  luego de encontrar la primer coincidencia.
   */
  const parseId = parseInt(id, 10)
  if (allIds.includes(parseId)) {
    return [parseId]
  }

  return allIds
  // return movies.find((movie) => {
  //   return movie.id === parseInt(id, 10);
  // });
}

function searchMovie(query, list, allIds) {
  if (isNaN(query)) {
    return filterByTitle(query, list);
  }
  return findById(query, allIds);
}

/**
 * Evalua los comportamientos
 * de las acciones y realiza las
 * interpretaciones de las mismas
 */
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_MOVIES:
      const movieList = movieListAsMap(payload, state.movieList);
      const all = getAllIds(payload, state.list.all);
      const leastValued = getLeastValuedIds(payload, state.list.leastValued);
      const mostValued = getMostValuedIds(payload, state.list.mostValued);
      return {
        ...state,
        movieList,
        list: {
          ...state.list,
          all,
          leastValued,
          mostValued,
        },
      };
    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      };

    case SEARCH_MOVIE:
      return {
        ...state,
        filter: "search",
        list: {
          ...state.list,
          search: searchMovie(payload, state.movieList, state.list.all),
        },
      };
    default:
      return state;
      break;
  }
};

export { reducer };
