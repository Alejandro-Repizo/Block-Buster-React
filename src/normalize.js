
// Se encarga de mapear las movies, 
// utilzando el id como key y la movie como value
function movieListAsMap(newList, oldList = new Map()) {
  return newList.reduce((list, movie) => {
    list.set(movie.id, movie)
    return list
  }, oldList)
}

// Iteramos la lista de movies y solo
// devolvemos los Id's de estás.
function getAllIds(list, oldList = []) {
  return  oldList.concat(list.map((movie) => movie.id))
}


/**
 * La funcion reduce recibe dos parametros, el primero es una
 * funcion que recibe tres parametros, el valor previo, 
 * el valor actul y el index. ademas como segundo parametro
 * recibe el valor inicial, si este existe el valor previo va a tomar
 * el valor inicial y el valor actual va a tomar el primer elemnto del
 * array, si no existe valor inicial entonces el valor previo va a tomar
 * el primer elemento del array y el valor actual el segundo elemento
 */
function getMostValuedIds(list, oldList = []) {
  
  return list.reduce((preValues, actualValue, index) => {
    if (actualValue.vote_average >= 7) {
        preValues.push(actualValue.id);
    }
    return preValues
}, oldList)
}



/**
 * Ejecuta una función reductora sobre cada 
 * elemento del array devolviendo un único valor, 
 * puede ser un booleano, objeto, número, string o array.
 */

function getLeastValuedIds(list, oldList = []) {
  return  list.reduce((list, movie) => {
    if (movie.vote_average < 7) {
      list.push(movie.id);
    }
    return list;
  }, oldList);
}


// console.log(movieList);

export {
  movieListAsMap,
  getAllIds,
  getMostValuedIds,
  getLeastValuedIds,
}