import { createStore } from "./redux/index.js";
import { reducer } from "./reducer/index.js";
import movies from "./movies.js";
import {
    movieListAsMap,
    getAllIds,
    getMostValuedIds,
    getLeastValuedIds,
} from "./normalize.js"

// Se colocan los estados por defecto
const initialState = {
    movieList: movieListAsMap(movies),
    filter: "all",
    list: {
        all: getAllIds(movies),
        mostValued: getMostValuedIds(movies),
        leastValued: getLeastValuedIds(movies)
    }
}

const store = createStore(reducer, initialState);

// store.dispatch() -> Envio acciones
// store.getState() -> Devuelve el estado
// store.subscribe() -> Almacena una funcion que se dispara cada que cambia el estado


export { store }