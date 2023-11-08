// const postPokemon = require('../controllers/postPokemons')
const allPokemonsHandler = require('../handlers/allPokemonsHandlers')
const idPokemonHandler = require('../handlers/idPokemonHandler')


const {Router} = require('express')
const postPokemonHandler = require('../handlers/postPokemonHandler')

const router = Router()

router.get('/', allPokemonsHandler)
router.get('/:id', idPokemonHandler)
router.post('/', postPokemonHandler)

module.exports = router