import { NavLink, useNavigate } from "react-router-dom"
import SearchBar from "../searchBar/SearchBar"
import { CiMenuBurger } from "react-icons/ci";
import { FaRegWindowClose } from "react-icons/fa";

import huevo from '../../../public/huevo.png'
import { useState } from "react"

const NavBar = ({ setActualPage }) => {
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()
    const handleExit = () => {
        navigate('/')
    }

    const content = (
        <nav className="md:flex md:items-center md:justify-around justify-center lg:h-20 p-2">
            <SearchBar setActualPage={setActualPage} className="" />
            <div className="md:flex gap-x-2">
                <NavLink to='/createpokemon'>
                    <button className="flex items-center bg-[#B22222] p-2 lg:m-0 text-sm mb-2 rounded-full text-white hover:bg-[#F08080]">
                        <img src={huevo} alt="Ícono de Huevo" className="mr-2" />
                        New Pokémon
                    </button>
                </NavLink>
                <NavLink to='/pokememo'>
                    <button className="flex items-center bg-[#B22222] p-2 text-sm text-white rounded-full hover:bg-[#F08080]">
                        PokeMemo
                    </button>
                </NavLink>
            <button onClick={handleExit} className="text-sm text-white bg-[#B22222] p-2 rounded-full tablet:mt-2 lg:mt-0 hover:bg-[#F08080]">Exit</button>
            </div>
        </nav>
    )

    return (
        <>
            <header className="bg-[#CD5C5C]">
                <div className="md:hidden flex justify-between p-2 h-16">
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-10 h-10 bg-pokeGold rounded-full p-2 animate-bounce" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M3 12h6" /><path d="M15 12h6" /></svg>
                    <button onClick={() => setShowMenu(!showMenu)} className="text-white">
                        {showMenu ? <FaRegWindowClose /> : <CiMenuBurger />}
                    </button>
                </div>
                {showMenu && content}
                <div className="hidden md:inline">
                    {content}
                </div>
            </header>
        </>
    )
}

export default NavBar