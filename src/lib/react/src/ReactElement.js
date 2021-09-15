import { render } from "../../react-dom.js";

function renderChildren(children, container) {
  if (Array.isArray(children)) {
    return children.forEach((el) => render(el, container));
  }
  return render(children, container);
}

function setEvents(element, event, callback) {
  return element.addEventListener(event, callback);
}

function setProperties(prop, value, element) {
  // Soporte para eventos
  if (prop.startsWith("on")) {
    // onClick = click
    const event = prop.replace("on", "").toLowerCase();
    return setEvents(element, event, value);
  }

  // Soporte para children
  if (prop === "children") {
    return renderChildren(value, element);
  }

  // Agregamos los atributos y el valor de este al elemento
  return element.setAttribute(prop, value);
}

export function createElement(type, props, content) {
  // Realizamos al creacion del elemento
  const element = document.createElement(type);

  /**
   * Comprobamos que venga contenido de otra
   * manera no se agrega nada
   */
  if (content) {
    element.textContent = content;
  }

  /**
   * Obtenemos las llaves de nuestro objeto en forma
   * de array este lo iteramos y enviamos la propiedad,
   * el valor de esta y el elemento.
   */
  if (props) {
    Object.keys(props).forEach((prop) => {
      // console.log(prop);
      setProperties(prop, props[prop], element);
    });
  }

  return element;
}
