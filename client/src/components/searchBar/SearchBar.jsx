import { useState } from "react"
import { useDispatch } from "react-redux"
import { getAllPokemons, getPokemonName } from "../../redux/actions/actions"
import style from './searchbar.module.css'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [nameInput, setNameInput] = useState("")

    const handleChange = (event) => {
        setNameInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
         dispatch(getPokemonName(nameInput));
         setNameInput("")
    }
    const handleReset = () => {
        dispatch(getAllPokemons());
        setNameInput("")
    };


    return (
        <>
            <form>
                <input
                    type="search"
                    id="name"
                    value={nameInput}
                    onChange={handleChange} />
                <button type="submit" onClick={handleSubmit} className={style.btnSearch}>Search</button>
                <button type="button" onClick={handleReset} className={style.btnReset}>Reset</button>
            </form>
        </>
    )
}

export default SearchBar