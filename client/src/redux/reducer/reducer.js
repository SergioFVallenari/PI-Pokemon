import { FILTER_ORIGIN, FILTER_TYPE, GET_ALL_POKEMONS, GET_POKEMON_ID, GET_POKEMON_NAME, GET_TYPES, ORDER_BY } from "../actions/actions-types"

const initialState = {
    allPokemons: [], //Almacena todos los pokemons en general, este estado no se modifica sino que sirve para ir filtrando y ordenando
    allPokemonsCopy: [], //Esta es una copia del estado original que se va modificando segun cada CASE
    dbPokemons: [], //Almacena los pokemons que encuentra en la bd
    apiPokemons: [], //Almacena los pokemons que encuentra en la api
    detailPokemon: [], //Almacena los datos de los pokemons en la llamada por ID
    allTypes: [], // Almacena los tipos de pokemons en la llamada get y sirve para ir haciendo mapeos en el renderizado de los componentes
}



const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_POKEMONS:

            const api = payload.filter((pokemon) => {
                return !isNaN(pokemon.id)
            })

            const db = payload.filter((pokemon) => {
                return isNaN(pokemon.id)
            })

            return {
                ...state,
                allPokemons: payload,
                allPokemonsCopy: payload,
                dbPokemons: db,
                apiPokemons: api
            }

        case GET_TYPES:
            return {
                ...state,
                allTypes: payload
            }

        case GET_POKEMON_NAME:
            return {
                ...state,
                allPokemonsCopy: payload,
            }
        case GET_POKEMON_ID:
            return {
                ...state,
                detailPokemon: payload
            }

        case FILTER_TYPE:
            const pokemonsFilters = payload === 'all' ? state.allPokemons : state.allPokemons.filter((pokemon) => pokemon.types.map((type) => type.name).includes(payload))
            // const dbPkoemonFilters = payload === 'all' ? state.dbPokemons : state.dbPokemons.filter((pokemon) => pokemon.types.map((type) => type.name).includes(payload))
            return {
                ...state,
                allPokemonsCopy: pokemonsFilters,
            }

        case ORDER_BY:
            const pokemons = payload === 'A-Z' ?
                state.allPokemonsCopy.slice().sort((a, b) => a.name.localeCompare(b.name)) :
                payload === 'Z-A' ?
                    state.allPokemonsCopy.slice().sort((a, b) => b.name.localeCompare(a.name)) :
                    payload === "ATQ-ASC" ? state.allPokemonsCopy.slice().sort((a, b) => a.attack - b.attack) :
                        payload === "ATQ-DESC" ? state.allPokemonsCopy.slice().sort((a, b) => b.attack - a.attack) :
                            state.allPokemonsCopy

            return {
                ...state,
                allPokemonsCopy: pokemons
            }
        case FILTER_ORIGIN:
            const origin = payload === 'db' ? state.dbPokemons : payload === 'api' ? state.apiPokemons : payload === 'all' && state.allPokemons
            return {
                ...state,
                allPokemonsCopy: origin
            }
        default:
            return{
                ...state
            } 
                
    }
}


export default reducer