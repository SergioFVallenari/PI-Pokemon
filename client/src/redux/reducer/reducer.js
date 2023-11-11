import { FILTER_TYPE, GET_ALL_POKEMONS, GET_POKEMON_ID, GET_POKEMON_NAME, GET_TYPES } from "../actions/actions-types"

const initialState = {
    allPokemons: [],
    allTypes: [],
    detailPokemon: [],
    pokemonXtype: [],
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_ALL_POKEMONS:
            return {
                ...state,
                allPokemons: payload,
                pokemonXtype: payload
            }

        case GET_TYPES:
            return {
                ...state,
                allTypes: payload
            }

        case GET_POKEMON_NAME:
            return {
                ...state,
                allPokemons: payload,
                pokemonXtype:payload
            }
        case GET_POKEMON_ID:
            return {
                ...state,
                detailPokemon: payload
            }
        case FILTER_TYPE:
            const pokemonsCopy = state.allPokemons.filter((pokemon) => pokemon.types.map((type) => type.name).includes(payload))
            return {
                ...state,
                pokemonXtype: payload === 'all' ? state.allPokemons : pokemonsCopy 
            }
            
        default:
            return state
    }
}

export default reducer