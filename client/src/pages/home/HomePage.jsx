import Cards from "../../components/cards/Cards"
import NavBar from "../../components/navBar/NavBar"
import style from './homePage.module.css'


import React, { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { filterOrigin, filterType, getAllPokemons, orderBy } from "../../redux/actions/actions"
import { useState } from "react"
import TypesFilter from "../../components/filters/Filters"
import Pagination from "../../components/pagination/Pagination"



const HomePage = ({ actualPage, handlePageChange, setActualPage }) => {
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.allPokemonsCopy)
    const allTypes = useSelector((state) => state.allTypes)
    const [selectedRadio, setSelectedRadio] = useState('all');
    const [selectedOrder, setSelectedOrder] = useState('null')
    const [selectedOrigin, setSelectedOrigin] = useState('')
    const [showRadios, setShowRadios] = useState(false);
    const [slideDirection, setSlideDirection] = useState('slide-normal')
    console.log(allPokemons);
    useEffect(() => {
        setTimeout(() => {
            setSlideDirection(null)
        }, 500)
    }, [slideDirection])



    /*Comienzo del paginado*/
    // const [actualPage, setActualPage] = useState(1)
    const cardsXpage = 14

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
            dispatch(filterOrigin('all'))
        }
    };

    const handlePageChangeWithSlide = (newPage) => {
        const direction = newPage > actualPage ? 'slide-left' : 'slide-right'
        setSlideDirection(direction)
        setTimeout(() => {
            setActualPage(newPage)
        }, 250)
    }

    return (
        <>
            <section>
                <NavBar setActualPage={setActualPage} />
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
                <div className={`flex flex-col items-center`}>
                    <Pagination handlePage={handlePageChangeWithSlide} actualPage={actualPage} totalPages={totalPages} indexFirst={indexOfFirstCard} />
                    <div className={`${slideDirection}`}>
                        <Cards allPokemons={currentCards} />
                    </div>
                    <div className="block md:hidden">
                        <Pagination handlePage={handlePageChangeWithSlide} actualPage={actualPage} totalPages={totalPages} indexFirst={indexOfFirstCard} />
                    </div>
                </div>
            </section>
        </>
    )
};

export default HomePage