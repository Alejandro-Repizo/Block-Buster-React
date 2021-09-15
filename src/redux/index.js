const createStore = (reducer, initialState) => {
  /**
   * Almacena el estado inicial y permite
   * actulizarce con el tiempo
   */
  let state = initialState;

  /**
   * Funcion actulizadora,
   * se lanza cada vez que haya
   * un cambio
   */
  let updater = () => {};

  /**
   * Retorna el estado
   */
  const getState = () => state;

  const dispatch = (action) => {
    /**
     * Cambia el estado apartir
     * de la interpretacion que hace
     * el reducer de la accion
     */
    state = reducer(state, action);

    /**
     * Invocamos el updater ya que
     * aca es donde ocurren los cambios
     */
    updater();
  };

  /**
   * Se ejecuta cada vez que exista
   * algun tipo de cambio
   */
  const subscribe = (listener) => {
    updater = listener;
  };

  return {
    getState,
    dispatch,
    subscribe,
  };
};

export { createStore }
