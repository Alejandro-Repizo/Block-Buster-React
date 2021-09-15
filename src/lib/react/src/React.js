/**
 * Creamos la clase Component
 */
class Component {
  constructor(props = {}, state = {}) {
    this.props = props;
    this.state = state;
  }
  
  update() {}
  
  /**
   * Se encarga de ejecutar la funcion update()
   * que a su vez tiene la funcion reRender() que
   * recibe un nuevo elemento este nuevo elemento 
   * es una nueva ejecucion de la funcion render()
   * del componente
   */
  #updater() {
    this.componentWillUpdate();
    this.update(this.render())
    this.componentDidUpdate()
  }

  // Se ejecuta antes de que se renderice el componente
  componentWillMount() {

  }

  // Se ejecuta cuando el componente ya se renderizo
  componentDidMount() {
    
  }

  // Se ejecuta antes de hacer una nueva renderizacion del componente actualizado
  componentWillUpdate() {

  }

  // Se ejecuta cuando se realiza una actulizacion del componente
  componentDidUpdate() {

  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    };

    this.#updater();
  }

  build() {
    this.componentWillMount()
    return this.render()
  }

  /**
   * Con # colocamos un metodo, propiedad, get o set en privado. 
   * #propiedad
   * #metodo() {}
   * get #name
   * set #name
   */
}

export { Component };
