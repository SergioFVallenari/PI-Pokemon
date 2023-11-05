const axios = require('axios')

const getPokemons = async (req, res) =>{
//    res.status(200).send('aca hay pokemones')
    try {
        const url = 'https://pokeapi.co/api/v2/pokemon'
        const limit = 5
        const {data} = await axios(`${url}?limit=${limit}&offset=00`)

        const listPokemons = data.results

        const detailPokemons = await Promise.all(listPokemons.map(async(pokemon)=>{
            const {data} = await axios(pokemon.url)
            const characterPokemon = {
                id: data.id,
                name: data.name,
                image: data.sprites.other.home.front_default,
                hp: data.stats.find((stat)=>stat.stat.name === 'hp').base_stat,
                attack: data.stats.find((stat)=>stat.stat.name === 'attack').base_stat,
                defense: data.stats.find((stat)=>stat.stat.name === 'defense').base_stat,
                speed: data.stats.find((stat)=> stat.stat.name === 'speed').base_stat,
                height: data.height,
                weight: data.weight,
                types: data.types.map((type)=>type.type.name)
            }
            return characterPokemon
        }))

        res.status(200).json(detailPokemons)

    } catch (error) {
        res.status(404).send('Error al cargar datos')
    }
}

module.exports = getPokemons