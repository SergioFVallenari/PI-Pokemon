import style from './detail.module.css'
import next from './next.png'
import previous from './previous.png'
import exit from './exit.png'

import { Link, useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react"
import { getAllPokemons, getPokemonId, resetDetail } from "../../redux/actions/actions"
import Loading from '../../components/loading/Loading'




const Detail = ({ deletePokemons }) => {
    let { id } = useParams()
    // console.log('este es el id', id);
    const [showPag, setShowPag] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const detailPokemon = useSelector((state) => state.detailPokemon)

    useEffect(() => {
        setShowPag(true); // Mostrar el loader
        dispatch(getPokemonId(id))
            .then(() => setShowPag(false)); // Ocultar el loader cuando los datos se carguen

        return () => {
            dispatch(resetDetail())
        }
    }, [dispatch, id])

    function capitalLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const handleSubmit = () => {
        const confirmed = window.confirm('¿Do you want to delete the card?')
        if (confirmed) {

            deletePokemons(id)
            dispatch(getAllPokemons())
            navigate('/home')
        }
    }

    const handleSubmitNext = () => {
        const nextId = Number(id) + 1;
        if (nextId <= 350) {
            navigate(`/detail/${nextId}`);
            dispatch(getPokemonId(nextId));
        }
        else {
            alert('No hay mas pokemons!')
        }
    }

    const handleSubmitPrevious = () => {
        const previousId = Number(id) - 1;
        if (previousId < 1) {
            alert('No hay pokemons')
            navigate(`/detail/${id}`);
        } else {
            navigate(`/detail/${previousId}`);
            dispatch(getPokemonId(previousId));
        }
    }

    return (
        <>
            {
                showPag ? <Loading /> :
                    <section className='md:w-[60vw] mx-auto md:flex sm:pt-[5%] sm:pb-[5%] p-2'>
                        <div className=''>
                            <article className='bg-[#DCDCDC] md:w-[60vw] items-center justify-center md:flex flex-col rounded-t-xl'>
                                {
                                    isNaN(id) && <button onClick={handleSubmit} className='md:ml-0 ml-[35%]'>Delete</button>
                                }
                                <div className={`${style.imgContainer} md:m-2`}>
                                    <img src={detailPokemon.image} alt={detailPokemon.name} className='h-96' />
                                </div>
                                <div className='bg-[#C0C0C0] flex flex-col md:p-2 md:w-[60vw] text-center items-center'>
                                    <h1 className='text-pokeGold pt-2 text-sm md:text-xl'>#{detailPokemon.id}</h1>
                                    <h2 className='p-2 text-sm'>Name: {detailPokemon.name?.charAt(0).toUpperCase() + detailPokemon.name?.slice(1)}</h2>
                                    <h3 className='m-2 text-sm md:text-md'>Types:
                                        {detailPokemon.types && detailPokemon.types.map((type, index) => (
                                            <span
                                                key={index}
                                                className={`${style[`type${capitalLetter(type.name)}`]} p-[5px]`}>
                                                {capitalLetter(type.name)}
                                            </span>
                                        ))}
                                    </h3>
                                    <div className='flex content-center ' >
                                        {detailPokemon.types && detailPokemon.types.map((type, index) => (
                                            <span
                                                key={index}
                                                className={style[`icon${capitalLetter(type.name)}`]}>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                            <article className=' bg-[#696969] md:p-2 items-center justify-between ,tablet:flex tablet:flex-col text-center rounded-b-xl'>
                                <h2 className='md:p-2 text-pokeGold'>Stats</h2>
                                <div className='text-center'>
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
                                {
                                    !isNaN(id) ?
                                        <span className='md:p-2'>
                                            <button onClick={handleSubmitPrevious} className={`${style.btnPrev} hover:bg-[#DCDCDC]`}><img src={previous} alt="" /></button>
                                            <Link to='/home'>
                                                <button className={style.btnHome}> <img src={exit} alt="" /></button>
                                            </Link>
                                            <button onClick={handleSubmitNext} className={`${style.btnNext} hover:bg-[#DCDCDC]`}><img src={next} alt="" /></button>
                                        </span> :
                                        <Link to='/home'>
                                            <button className={`${style.btnHome}`}> <img src={exit} alt="" /></button>
                                        </Link>
                                }
                            </article>
                        </div>
                    </section>
            }
        </>
    )
}

export default Detail
