import Cards from "../../components/cards/Cards"
import NavBar from "../../components/navBar/NavBar"
import style from './homePage.module.css'

import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { filterOrigin, filterType, orderBy } from "../../redux/actions/actions"
import {  useState } from "react"
import TypesFilter from "../../components/filters/Filters"
import Pagination from "../../components/pagination/pagination"



const HomePage = ({actualPage, handlePageChange, setActualPage}) => {
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.allPokemonsCopy)
    const allTypes = useSelector((state) => state.allTypes)
    const [selectedRadio, setSelectedRadio] = useState('all');
    const [selectedOrder, setSelectedOrder] = useState('null')
    const [selectedOrigin, setSelectedOrigin] = useState('')
    const [showRadios, setShowRadios] = useState(false);

    /*Comienzo del paginado*/
    // const [actualPage, setActualPage] = useState(1)
    const cardsXpage = 12

    //Calculo de elementos para mostrar

    const indexOfLastCard = actualPage * cardsXpage
    const indexOfFirstCard = indexOfLastCard - cardsXpage
    const currentCards = allPokemons.slice(indexOfFirstCard, indexOfLastCard)
    const totalPages = Math.ceil(allPokemons.length / cardsXpage)



    const handleRadioChange = (radioName) => {
        setSelectedRadio(radioName);
        dispatch(filterType(radioName))
        setActualPage(1)
    };

    const handleOrder = (selectValue) => {
        setSelectedOrder(selectValue)
        dispatch(orderBy(selectValue))
        setActualPage(1)
    }

    const handleOrigin = (originValue) => {
        setSelectedOrigin(originValue)
        dispatch(filterOrigin(originValue))
        setActualPage(1)
    }

    const handleButtonClick = () => {
        setShowRadios(!showRadios);
        if (showRadios) {
            handleRadioChange('all')
            setSelectedOrigin('')
            setSelectedOrder('null')
        }
    };

    

    return (
        <>
            <section className={style.container}>
                <NavBar setActualPage={setActualPage}/>
                        <TypesFilter
                            allTypes={allTypes}
                            handleRadioChange={handleRadioChange}
                            selectedRadio={selectedRadio}
                            handleOrder={handleOrder}
                            selectedOrder={selectedOrder}
                            handleOrigin={handleOrigin}
                            selectedOrigin={selectedOrigin}
                            handleButtonClick={handleButtonClick}
                            showRadios={showRadios}
                        />
                        <div className={style.homeContainer}>
                            <Pagination handlePage={handlePageChange} actualPage={actualPage} totalPages={totalPages} indexFirst={indexOfFirstCard} />
                            <Cards allPokemons={currentCards} />
                        </div>
                    
                
            </section>
        </>
    )
};

export default HomePage