import style from './cards.module.css'
import Card from "../card/Card"


const Cards = ({ allPokemons }) => {
    return (
        <>
            <div className={style.cardsContainer}>
                {
                       allPokemons.length > 0 ? allPokemons.map((pokemon, index) => (
                            <Card
                                key={index}
                                id={pokemon.id}
                                name={pokemon.name}
                                image={pokemon.image}
                                types={pokemon.types?.map((type) => type.name + " ")}
                            />
                        ))
                            :
                            <h2>Oops! No pokemons found</h2>
            }
            </div>
        </>
    );
};

export default Cards;