import { FILTER_TYPE, GET_ALL_POKEMONS, GET_POKEMON_ID, GET_POKEMON_NAME, GET_TYPES, ORDER_BY } from "./actions-types"
import axios from 'axios'
const endpoint = 'http://localhost:3001'

const getAllPokemons = () =>{
    return async(dispatch)=>{
        try {
            const {data} = await axios(`${endpoint}/pokemons`)
            return dispatch({
                type: GET_ALL_POKEMONS,
                payload: data
            })    
        } 
        catch (error) {
            alert(error.message)
        }
    }
}

const getPokemonName = (name) =>{
    return async (dispatch)=>{
        try {
            if (!name) {
                throw new Error('Ingrese un nombre')
            }
            const { data } = await axios(`${endpoint}/pokemon`,{ params: { name } })
                return dispatch({
                    type: GET_POKEMON_NAME,
                    payload: data
                })
            
            
        } 
        catch (error) {
            alert(error.message)
            // throw error
        }
    }
}

const getPokemonId = (id) =>{
    return async(dispatch) =>{
        try {
            const {data} = await axios(`${endpoint}/pokemons/${id}`)
            return dispatch({
                type: GET_POKEMON_ID,
                payload: data
            })
        } 
        catch (error) {
            
        }
    }
}

const getTypes = () =>{
    return async(dispatch)=>{
        try {
            const {data} = await axios(`${endpoint}/types`)
            return dispatch({
                type: GET_TYPES,
                payload: data
            })
        } 
        catch (error) {
            
        }
    }
}

const filterType = (type) =>{
    return {
        type: FILTER_TYPE,
        payload: type
    }
}

const orderBy = (order) =>{
    return {
        type: ORDER_BY,
        payload: order
    }
}


export {
    getAllPokemons,
    getPokemonName,
    getTypes,
    getPokemonId,
    filterType,
    orderBy
}