import { Component, createElement } from "../lib/react/index.js";
import { WrapperStyled } from "./wrapper.js";

class Actions extends Component {
  render() {
    const { children } = this.props
    return WrapperStyled({
        children: createElement("div", {
            class: "actions",
            children,
        })
    });
  }
}

{/* <section class="wrapper">
  <div class="actions">
    <form action="" id="search-form">
      <input
        placeholder="Escribe tu película favorita"
        name="title"
        type="Busca una pelicula"
      />
      <button>Buscar</button>
    </form>
    <select name="" id="filter">
      <option value="all">Todas</option>
      <option value="most-valued">Más valoradas</option>
      <option value="least-valued">Menos valoradas</option>
    </select>
  </div>
</section>; */}

export default Actions;
