const { Router } = require('express');
const getPokemons = require('../controllers/getPokemons');
const getPokemonsById = require('../controllers/getPokemonsById');
const getType = require('../controllers/getTypes');
const postPokemon = require('../controllers/postPokemons');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', getPokemons)
router.get('/pokemons/:id', getPokemonsById)
router.get('/pokemons/name')
router.get('/types', getType)
router.post('/pokemons', postPokemon)


module.exports = router;
