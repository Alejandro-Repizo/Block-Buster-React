/**
 * Fucion render, encardaga de recibir el elemento y
 * el container, para luego agregar el uno al otro
 */
function render(element, container) {
  /**
   * Con element instaceof Element, comprobamos
   * de que sea un elemenot html
   */
  if (typeof element === "string" || element instanceof Element) {
    return container.append(element);
  }

  /**
   * Funcion encargada de hacer un
   * nuevo renderizado del elemento
   * actualizado
   * @param {render()} newChild 
   */
  function reRender(newChild) {
    // Remplaza el elemento viejo por el nuevo element
    container.replaceChild(newChild, childElement)
    childElement = newChild
  }

  element.update = reRender

  let childElement = element.build();
  container.append(childElement);

  element.componentDidMount()
}

export { render };
