import { createElement } from "./react/index.js";
/**
 * Lista de etiquetas
 */
const tags = ["h1", "h2", "span", "small", "div", "p", "img", "header", "form", "input", "button", "select", "section"];

function buildStyles(strings, dynamicValues, props) {
  // La funcion Slice() realiza la copia de un array.
  let style = strings.slice();
  dynamicValues.forEach((value, index) => {
    style[index] += value(props);
  });

  return style.join("");
}

/**
 * Se encarga de almacenar
 * los tipos de estructuras HTML
 * y como se van a ejecutar estas
 */
function createStyled(tags) {
  let styled = {};

  tags.forEach((tag) => {
    styled[tag] = function (strings, ...dynamicValues) {
      // String: propiedades en forma de texto,
      // dynamicValues: Valores dinamicos, dentro del tagged template.
      return function (props, content) {
        // En props, tambien le pasamos el objeto que contiene los colores. 
        const style = buildStyles(strings, dynamicValues, props);
        return createElement(
          tag,
          {
            ...props,
            style: style,
          },
          content
        );
      };
    };
  });
  return styled;
}

/**
 * Styled component recibe los estilos
 * y el tipo de estructura HTML que va
 * a encerrar nuestro componente
 * */

const style = createStyled(tags);

export default style;
