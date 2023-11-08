const axios = require("axios");
const { Pokemon, Type } = require('../db');



const getPokemonsQuery = async (name) => {
    if (!name) {
        throw new Error('Debe proporcionar un nombre');
    }

    const dbPokemon = await Pokemon.findAll({
        where: {
            name: name
        }
    });

    let apiResponse;
    let pokemonName = null;

    try {
        apiResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = apiResponse.data;
        pokemonName = {
            id: data.id,
            name: data.species.name,
            image: data.sprites.front_default,
            hp: data.stats.find((stat) => stat.stat.name === 'hp').base_stat,
            attack: data.stats.find((stat) => stat.stat.name === 'attack').base_stat,
            defense: data.stats.find((stat) => stat.stat.name === 'defense').base_stat,
            speed: data.stats.find((stat) => stat.stat.name === 'speed').base_stat,
            height: data.height,
            weight: data.weight,
            types: data.types.map((type) => type.type.name)
        };

    }
    catch (error) {
         
    }

    if (dbPokemon.length > 0 && apiResponse && pokemonName) {
        return [...dbPokemon, pokemonName];
    } else if (dbPokemon.length > 0) {
        return dbPokemon;
    } else if (apiResponse && pokemonName) {
        return [pokemonName];
    } else {
        throw new Error('No se encontró al pokemon')
    }
};


module.exports = getPokemonsQuery