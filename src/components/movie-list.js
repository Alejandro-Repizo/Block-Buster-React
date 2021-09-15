import { Component } from "../lib/react/index.js"
import style from "../lib/styled-component.js"
import { WrapperStyled } from "./wrapper.js"
import Movie from "./movie.js"
import { store } from "../store.js"
import api from "./api.js"
import { ADD_MOVIES } from "../actions/index.js"


const MovieListStyled = style.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, 200px);
    justify-content: center;
    box-sizing: border-box;
    gap: 1em;
`

class MovieList extends Component {
    state = {
      page: 1,
    }

    getPage = async (page) => {
      // Toda función asincrona
      // devuelve una promesa!
      const { results } = await api.moviePage(page)
      store.dispatch({
        type: ADD_MOVIES,
        payload: results
      })
    }
    
    handleIntersection = (entries) => {
      console.log(entries)
      if (entries[0].isIntersecting) {
        this.getPage(this.state.page)
        this.setState({
          page: this.state.page + 1

        })
        console.log("traer nueva pagina")
      }
    }

    componentDidMount() {
      this.getPage()
      store.subscribe(() => {
        console.log("me he actualiado")
        this.setState()
      })
      const observer = new IntersectionObserver(this.handleIntersection)
      observer.observe(window.intersector)
    }

    render() {
        const state = store.getState()
        const movieListId = state.list[state.filter]
        console.log(movieListId)
        const movieList = state.movieList
        console.log(state)
        const { movies } = this.state
        return WrapperStyled({
            children: MovieListStyled({
                children: movieListId.map((id) => new Movie(movieList.get(id)))
            })
        })
    }

}

{/* <div class="wrapper">
  <section class="movie-list" id="container">
    <article class="movie recommended">
      <img
        class="movie-poster"
        src="//image.tmdb.org/t/p/w220_and_h330_face/ugZW8ocsrfgI95pnQ7wrmKDxIe.jpg"
        alt=""
      />
      <p class="movie-title">Duro de matar</p>
      <p class="movie-id">123456</p>
      <span class="movie-rate">10</span>
    </article>
  </section>
</div>  */}

export default MovieList