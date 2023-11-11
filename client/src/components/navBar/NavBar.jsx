import { NavLink } from "react-router-dom"
import SearchBar from "../searchBar/SearchBar"
import style from './navbar.module.css'

const NavBar = () => {

    return (
        <>
        <div className={style.navContainer}>
            <NavLink to='/createpokemon'><button>Crear Pokemon</button></NavLink>
            <SearchBar />
            <NavLink to='/'><button>Salir</button></NavLink>
        </div>
        </>
    )
}

export default NavBar