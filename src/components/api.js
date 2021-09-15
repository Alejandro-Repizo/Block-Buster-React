
import { API_KEY } from "../constants.js"

class API {
    constructor(API_KEY) {
        this.API_KEY = API_KEY
    }

    #baseAPI = "https://api.themoviedb.org/3/"

    get discoverMovie() {
        return `${this.#baseAPI}discover/movie?api_key=${this.API_KEY}`
    }

    async moviePage(page) {
        // Recibe dos parametros:
        // 1. Entry Point - Punto de entrada / Ruta.
        // 2. Parametro de configuración.
        const response = await fetch(`${this.discoverMovie}&page=${page}`)
        const data = await response.json()

        return data
        
    }
}

// Hacemos la exportación de una nueva instacia
// de la clase API
export default new API(API_KEY)