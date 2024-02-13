import { FILTER_ORIGIN, FILTER_TYPE, GET_ALL_POKEMONS, GET_POKEMON_ID, GET_POKEMON_NAME, GET_TYPES, ORDER_BY, RESET_DETAIL } from "./actions-types"
import axios from 'axios'
import { showAlert } from "../../App"
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
            showAlert(error.message)
        }
    }
}

const getPokemonName = (name) =>{
    return async (dispatch)=>{
        try {
            if (!name) {
                throw new Error('Enter a name')
            }
            const response = await axios(`${endpoint}/pokemon`,{ params: { name } })
                return dispatch({
                    type: GET_POKEMON_NAME,
                    payload: response.data
                })
             
        } 
        catch (error) {
            if (error.response && error.response.status === 400) {
                showAlert('Pokémon not found');
            } else {
                showAlert(error.message);
            }
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

const resetDetail = () =>{
    return (dispatch) =>{
        return dispatch({
            type: RESET_DETAIL
        })
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

const filterType = (type1) =>{
    return {
        type: FILTER_TYPE,
        payload: type1
    }
}

const orderBy = (order) =>{
    return {
        type: ORDER_BY,
        payload: order
    }
}

const filterOrigin = (origin) =>{
    return {
        type: FILTER_ORIGIN,
        payload: origin
    }
}


export {
    getAllPokemons,
    getPokemonName,
    getTypes,
    getPokemonId,
    filterType,
    orderBy, 
    filterOrigin,
    resetDetail
}