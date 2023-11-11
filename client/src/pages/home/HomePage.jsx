import Cards from "../../components/cards/Cards"
import NavBar from "../../components/navBar/NavBar"
import style from './homePage.module.css'

import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons, getTypes } from "../../redux/actions/actions"
import { useEffect } from "react"
import TypesFilter from "../../components/filters/Filters"




const HomePage = () => {
    const dispatch = useDispatch()
    const allPokemons = useSelector((state) => state.allPokemons)
    const allTypes = useSelector((state) => state.allTypes)
    const pokemonXtype = useSelector((state) => state.pokemonXtype);
    // console.log(pokemonXtype);

    useEffect(() => {
        dispatch(getTypes())
        dispatch(getAllPokemons())
    }, [dispatch])



    return (
        <>
            <div className={style.container}>
                <NavBar />
                <div className={style.homeContainer}>
                    <TypesFilter allTypes={allTypes} />
                    <Cards allPokemons={allPokemons} pokemonXtype={pokemonXtype} />
                </div>
            </div>
        </>
    )
}

export default HomePage