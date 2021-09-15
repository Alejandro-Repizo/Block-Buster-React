import { Component, createElement } from "../lib/react/index.js";
import select from "./select.js";
import { store } from "../store.js"
import { SET_FILTER } from "../actions/index.js"

class Filters extends Component {

  handleChange = (e) => {
    store.dispatch({
      type: SET_FILTER,
      payload: e.target.value
    })
  }
  render() {
    return select({
      onChange: this.handleChange,
      children: [
        createElement("option", { value: "all" }, "Todas"),
        createElement("option", { value: "mostValued" }, "Más valoradas"),
        createElement("option", { value: "leastValued" }, "Menos valoradas"),
      ],
    });
  }
}

{/* <select name="" id="filter">
  <option value="all">Todas</option>
  <option value="most-valued">Más valoradas</option>
  <option value="least-valued">Menos valoradas</option>
</select>; */}

export default Filters;
