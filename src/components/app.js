import { Component } from "../lib/react/index.js"
import style from "../lib/styled-component.js"
import Header from "./header.js"
import Actions from "./actions.js"
import Search from "./search.js"
import Filters from "./filters.js"
import MovieList from "./movie-list.js"

const AppStyled = style.div``


class App extends Component {
    render() {
        return AppStyled({
            children: [
                new Header(),
                new Actions({
                    children: [
                        new Search(),
                        new Filters()
                    ]
                }),
                new MovieList()
               
            ]
        })
    }
}

export default App