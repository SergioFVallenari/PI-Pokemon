const axios = require("axios")

const getPokemonsById = async (req, res) =>{
    try {
        const {id} = req.params
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
        const {data} = await axios(url)
        if (data.id) {
            const pokemonById = {
                id: data.id,
                name: data.name,
                image: data.sprites.front_default,
                hp: data.stats.find((stat)=>stat.stat.name === 'hp').base_stat,
                attack: data.stats.find((stat)=>stat.stat.name === 'attack').base_stat,
                defense: data.stats.find((stat)=>stat.stat.name === 'defense').base_stat,
                speed: data.stats.find((stat)=> stat.stat.name === 'speed').base_stat,
                height: data.height,
                weight: data.weight
            }
            res.status(200).json(pokemonById)
        }
    } 
    catch (error) {
        res.status(404).send('Error al cargar el personaje')
    }
}

module.exports = getPokemonsById