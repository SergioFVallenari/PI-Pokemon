import { useState } from "react"
import { useDispatch } from "react-redux"
import { getPokemonName } from "../../redux/actions/actions"
import style from './searchbar.module.css'

const SearchBar = ({setActualPage}) => {
    const dispatch = useDispatch()
    const [nameInput, setNameInput] = useState("")
   
    const handleChange = (event) => {
        setNameInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
         dispatch(getPokemonName(nameInput));
         setActualPage(1)
    }



    return (
        <>
            <form>
                <input
                    type="search"
                    id="name"
                    value={nameInput}
                    onChange={handleChange}
                    placeholder="Enter a name or Id" 
                    className="rounded-lg p-2 text-center text-black mb-2 mt-2 lg:mr-2 text-sm tablet:w-auto w-[50%] mr-2"/>
                <button type="submit" onClick={handleSubmit} className="bg-[#B22222]  text-sm p-2 md:m-2 hover:bg-[#F08080] text-white">Search</button>
                {/* <button type="button" onClick={handleReset} className={style.btnReset}>Reset</button> */}
            </form>
        </>
    )
}

export default SearchBar