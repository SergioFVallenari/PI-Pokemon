const { Router } = require('express');
const routerPokemon = require('../routes/pokemonsRoute')
const routerTypes = require('../routes/typesRoute')

const getPokemonsQuery = require('../controllers/getPokemonsQuery');
const namePokemonHandler = require('../handlers/namePokemonHandler');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', routerPokemon)
router.get('/pokemon', namePokemonHandler)
router.use('/types', routerTypes)



module.exports = router;
