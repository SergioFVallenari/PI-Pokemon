import { NavLink, useNavigate } from "react-router-dom"
import SearchBar from "../searchBar/SearchBar"
import style from './navbar.module.css'
import huevo from '../../../public/huevo.png'

const NavBar = ({setActualPage}) => {

    const navigate = useNavigate()
    const handleExit = ()=>{
        navigate('/')
    }

    return (
        <>
            <header>
                <nav className={style.navContainer}>
                    <NavLink to='/createpokemon'><button> <img src={huevo}></img> Create Pokémon </button></NavLink>
                    <SearchBar setActualPage={setActualPage}/>
                    <button onClick={handleExit}>Exit</button>
                </nav>
            </header>
        </>
    )
}

export default NavBar