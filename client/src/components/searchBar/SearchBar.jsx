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
                    placeholder="Enter a name or Id" />
                <button type="submit" onClick={handleSubmit} className={style.btnSearch}>Search</button>
                {/* <button type="button" onClick={handleReset} className={style.btnReset}>Reset</button> */}
            </form>
        </>
    )
}

export default SearchBar