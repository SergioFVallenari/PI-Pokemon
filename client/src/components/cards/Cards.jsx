import style from './cards.module.css'
import Card from "../card/Card"


const Cards = ({ allPokemons, pokemonXtype }) => {
    return (
        <>
            <div className={style.cardsContainer}>
                {
                   
                        pokemonXtype.length > 0 ? pokemonXtype.map((pokemon, index) => (
                            <Card
                                key={index}
                                id={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.image}
                                types={pokemon.types.map((type) => type.name + " ")}
                            />
                        ))
                        :
                        allPokemons && pokemonXtype.length < 0 ? allPokemons.map((pokemon, index) => (
                            <Card
                                key={index}
                                id={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.image}
                                types={pokemon.types.map((type) => type.name + " ")}
                            />
                        ))
                            :
                            <h2>No hay pokemones con este tipo</h2>
            }
            </div>
        </>
    );
};

export default Cards;