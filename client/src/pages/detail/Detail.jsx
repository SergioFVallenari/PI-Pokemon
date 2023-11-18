import style from './detail.module.css'

import { Link, useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import { getPokemonId } from "../../redux/actions/actions"



const Detail = ({ deletePokemons }) => {
    let { id } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const detailPokemon = useSelector((state) => state.detailPokemon)

    useEffect(() => {
        dispatch(getPokemonId(id))
    }, [dispatch, id])

    function capitalLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const handleSubmit = () => {
        deletePokemons(id)
        navigate('/home')
    }

    const handleSubmitNext = () => {
        const nextId = parseInt(id, 10) + 1;
        if (nextId <= 350) {
            navigate(`/detail/${nextId}`);
            dispatch(getPokemonId(nextId));
        }
        else{
            alert('No hay mas pokemons!')
        }
    }

    const handleSubmitPrevious = () => {
        const previousId = parseInt(id, 10) - 1;
        if (previousId < 1) {
            alert('No hay pokemons')
            navigate(`/detail/${id}`);
        }else{
            navigate(`/detail/${previousId}`);
            dispatch(getPokemonId(previousId));
        }
    }

    return (
        <>
            <section className={style.detailContainer}>
                <div className={style.contBorder}>
                    <article className={style.infoContainer}>
                        <Link to='/home'>
                            <button className={style.btnHome}>✖</button>
                        </Link>
                        {
                            isNaN(id) && <button onClick={handleSubmit}>Delete</button>
                        }
                        <div className={style.border}>
                            <img src={detailPokemon.image} alt={detailPokemon.name} />
                            <div className={style.info}>
                                <h1>#{detailPokemon.id}</h1>
                                <h2>Name: {detailPokemon.name?.charAt(0).toUpperCase() + detailPokemon.name?.slice(1)}</h2>
                                <h3>Types:
                                    {detailPokemon.types && detailPokemon.types.map((type, index) => (
                                        <span
                                            key={index}
                                            className={style[`type${capitalLetter(type.name)}`]}>
                                            {capitalLetter(type.name)}
                                        </span>
                                    ))}
                                </h3>
                                <div className={style.iconStyle}>
                                    {detailPokemon.types && detailPokemon.types.map((type, index) => (
                                        <span
                                            key={index}
                                            className={style[`icon${capitalLetter(type.name)}`]}>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className={style.statsContainer}>
                        <h2>Stats</h2>
                        <div className={style.borderStats}>
                            <h3>Hp: {detailPokemon.hp} /200</h3>
                            <progress
                                className={style.statsBar}
                                value={detailPokemon.hp}
                                max="200"
                            ></progress>
                            <h3>Attack: {detailPokemon.attack}/200</h3>
                            <progress
                                className={style.statsBar}
                                value={detailPokemon.attack}
                                max="200"
                            ></progress>
                            <h3>Defense: {detailPokemon.defense}/200</h3>
                            <progress
                                className={style.statsBar}
                                value={detailPokemon.defense}
                                max="200"
                            ></progress>
                            <h3>Speed: {detailPokemon.speed ?? null}/200</h3>
                            <progress
                                className={style.statsBar}
                                value={detailPokemon.speed ?? 0}
                                max="200"
                            ></progress>
                            <h3>Height: {detailPokemon.height !== null ? detailPokemon.height + '0cm' : null}/600cm</h3>
                            <progress
                                className={style.statsBar}
                                value={detailPokemon.height !== null ? detailPokemon.height + '0' : null}
                                max="600"
                            ></progress>
                            <h3>Weight: {detailPokemon.weight + 'kg' ?? null}/1000kg</h3>
                            <progress
                                className={style.statsBar}
                                value={detailPokemon.weight ?? 0}
                                max="1000"
                            ></progress>
                        </div>
                        <span>

                            <button onClick={handleSubmitPrevious}></button>
                            <button></button>
                            <button onClick={handleSubmitNext}></button>
                        </span>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Detail