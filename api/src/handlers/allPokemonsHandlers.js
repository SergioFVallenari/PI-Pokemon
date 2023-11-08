const getPokemons = require("../controllers/getPokemons")

const allPokemonsHandler = async (req, res) => {
    try {
        const allPokemons = await getPokemons()
        res.status(200).json(allPokemons)
    } catch (error) {
        res.status(400).send('Error del servidor')
    }
}

module.exports = allPokemonsHandler