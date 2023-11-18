import Cards from "../../components/cards/Cards"
import NavBar from "../../components/navBar/NavBar"
import style from './homePage.module.css'

import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { filterType, getAllPokemons, getTypes } from "../../redux/actions/actions"
import { useEffect, useState } from "react"
import TypesFilter from "../../components/filters/Filters"
import Pagination from "../../components/pagination/pagination"
import Loading from "../../components/loading/Loading"



const HomePage = React.memo(() => {
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.allPokemonsCopy)
    const allTypes = useSelector((state) => state.allTypes)
    const [loading, setLoading] = useState(false)
    const [selectedRadio, setSelectedRadio] = useState('all');
    // console.log('estos son los pokemons', allPokemons);

    useEffect(() => {  //Se muestran todos los pokemones ni bien se monta el componente
        const fetchData = async () => {
            try {
                setLoading(true)
                await dispatch(getAllPokemons());
                await dispatch(getTypes());
            } catch (error) {

            }
            finally {
                // Oculta el loader después de cargar los datos
                setLoading(false);
            }
        }
        fetchData()

    }, [dispatch])


    /*Comienzo del paginado*/
    const [actualPage, setActualPage] = useState(1)
    const cardsXpage = 12

    //Calculo de elementos para mostrar

    const indexOfLastCard = actualPage * cardsXpage
    const indexOfFirstCard = indexOfLastCard - cardsXpage
    const currentCards = allPokemons.slice(indexOfFirstCard, indexOfLastCard)
    const totalPages = Math.ceil(allPokemons.length / cardsXpage)

    // console.log('pokemones en total', allPokemons);



    const handlePageChange = (newPage) => {
        setActualPage(newPage);
    };


    const handleRadioChange = (radioName) => {
        setSelectedRadio(radioName);
        dispatch(filterType(radioName))
        setActualPage(1)
    };
    return (
        <>
            <div className={style.container}>
                <NavBar />
                {
                    loading ? <Loading /> : <>
                        <TypesFilter allTypes={allTypes} handleRadioChange={handleRadioChange} selectedRadio={selectedRadio} />
                        <div className={style.homeContainer}>
                            <Pagination handlePage={handlePageChange} actualPage={actualPage} totalPages={totalPages} indexFirst={indexOfFirstCard} />
                            <Cards allPokemons={currentCards} />
                        </div>
                    </>
                }
            </div>
        </>
    )
});

export default HomePage