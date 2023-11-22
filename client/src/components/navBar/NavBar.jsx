import { NavLink } from "react-router-dom"
import SearchBar from "../searchBar/SearchBar"
import style from './navbar.module.css'

const NavBar = ({setActualPage}) => {

    return (
        <>
            <header>
                <nav className={style.navContainer}>
                    <NavLink to='/createpokemon'><button>Create Pokémon</button></NavLink>
                    <SearchBar setActualPage={setActualPage}/>
                    <NavLink to='/'><button>Exit</button></NavLink>
                </nav>
            </header>
        </>
    )
}

export default NavBar