const axios = require('axios')
const {Type} = require('../db')

const getType = async(req, res) =>{
    try {

        const dbTypes = await Type.findAll()

        if (dbTypes.length === 0) {
            const url = 'https://pokeapi.co/api/v2/type'
            const {data} = await axios(url)
    
            const listTypes = data.results.map((type)=>{
                return {name: type.name}
            })
            await Type.bulkCreate(listTypes)


            const dbTypesActualized = await Type.findAll()
           return res.status(200).json(dbTypesActualized)
        }

        res.status(200).json(dbTypes)

    } 
    catch (error) {
        res.status(500).json({ error: 'Hubo un error al obtener los tipos de Pokémon' });
    }
}

module.exports = getType