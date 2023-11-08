const { Pokemon, Type } = require("../db")

const postPokemon = async (name, image, hp, attack, defense, speed, height, weight, types) => {
        if (types.length > 0 && types.length <= 2) {
            const [newPokemon, create] = await Pokemon.findOrCreate({
                where: { name: name },
                defaults: { name, image, hp, attack, defense, speed, height, weight }
            })

            if (create) {
                const addTypes = await Type.findAll({
                    where: {
                        name: types
                    }
                })
                return await newPokemon.addTypes(addTypes);
            
            } else {
                throw new Error('El pokemon ya existe')
            }
        }
        else {
            throw new Error('El nuevo pokemón no puede tener más de dos tipos')
        }
}

module.exports = postPokemon