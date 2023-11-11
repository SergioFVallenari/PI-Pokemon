const getPokemonsQuery = require("../controllers/getPokemonsQuery")

const namePokemonHandler = async (req, res) =>{
    try {
        const { name } = req.query
        const nameLower = name.toLowerCase().trim()//dejar el trim() para mostrar un bug y solucionarlo
        const pokemonName = await getPokemonsQuery(nameLower)
        console.log('Pokemon name',pokemonName);
        if (pokemonName) {
            return res.status(200).json(pokemonName)
        }
        
    } 
    catch (error) {
     return res.status(404).send(error.message)   
    }
}

module.exports = namePokemonHandler