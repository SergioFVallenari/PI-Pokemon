const postPokemon = require("../controllers/postPokemons")

const postPokemonHandler = async (req, res) => {
    try {
        const { name, image, hp, attack, defense, speed, height, weight, types } = req.body
         if (!name || !image || !hp || !attack || !defense) {
            throw new Error('Faltan datos')
        }
        else{
            const lowerName = name.toLowerCase()
            const newPokemon = await postPokemon(lowerName, image, hp, attack, defense, speed, height, weight, types)
            if (newPokemon) {
                res.status(200).send('Pokemon creado con éxito')
            }
        }
    } 
    catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = postPokemonHandler