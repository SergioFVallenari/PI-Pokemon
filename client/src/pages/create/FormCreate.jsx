import style from './formCreate.module.css'
import rojo from '../../../public/rojo.png'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import validation from './validation'
import { Link, useNavigate } from 'react-router-dom'
import { getAllPokemons } from '../../redux/actions/actions'


const FormCreate = ({ create }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const types = useSelector((state) => state.allTypes)
    const [inputData, setInputData] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: []
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {

        const { name, value, type, checked } = event.target;

        if (type === 'checkbox') {
            const updatedTypes = checked ? [...inputData.types, value] : inputData.types.filter((type) => type !== value);

            setInputData({
                ...inputData,
                types: updatedTypes.slice(0, 3) // Limitar a 2 elementos
            })
        }
        else {
            setInputData({
                ...inputData,
                [name]: value
            })
            setErrors(validation({
                ...inputData,
                [name]: value
            }))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formErrors = validation(inputData);

        if (Object.keys(formErrors).length === 0) {
            create(inputData);
            dispatch(getAllPokemons());
            navigate('/home');
        } else {
            setErrors(formErrors);
        }

    }

    return (
        <>
            <section className="flex md:flex-wrap md:min-h-screen items-center justify-around">
                <article className={`flex flex-col justify-center items-center place-content-center md:w-[50vw] xl:min-h-screen mx-2 my-4 lg:my-10 bg-[#DC143C] rounded-lg border-2 border-black ${style.formContainer}`}>
                    <h2>Create Pokémon</h2>
                    <form onChange={handleChange} className='flex place-content-center items-center flex-col md:w-[80%] max-h-full m-[10px] border-2 border-black rounded-lg bg-[#B22222] text-sm'>
                        <label htmlFor="name">Name:</label>
                        <input type="text" value={inputData.name} name='name' id='name' onChange={handleChange} />
                        {
                            errors.name && <p>{errors.name}</p>
                        }
                        <label htmlFor="image">Image:</label>
                        <input type="text" value={inputData.image} name='image' id='image' onChange={handleChange} placeholder='http://example.png' />
                        {
                            errors.image && <p>{errors.image}</p>
                        }
                        <label htmlFor="hp">Hp:</label>
                        <input type="text" value={inputData.hp} name='hp' id='hp' onChange={handleChange} />
                        {
                            errors.hp && <p>{errors.hp}</p>
                        }
                        <label htmlFor="attack">Attack:</label>
                        <input type="text" value={inputData.attack} name='attack' onChange={handleChange} />
                        {
                            errors.attack && <p>{errors.attack}</p>
                        }
                        <label htmlFor="defense">Defense:</label>
                        <input type="text" value={inputData.defense} name='defense' onChange={handleChange} />
                        {
                            errors.defense && <p>{errors.defense}</p>
                        }
                        <label htmlFor="speed">Speed:</label>
                        <input type="text" value={inputData.speed} name='speed' onChange={handleChange} />
                        {
                            errors.speed && <p>{errors.speed}</p>
                        }
                        <label htmlFor="height">Height:</label>
                        <input type="text" value={inputData.height} name='height' onChange={handleChange} />
                        {
                            errors.height && <p>{errors.height}</p>
                        }
                        <label htmlFor="weight">Weight:</label>
                        <input type="text" value={inputData.weight} name='weight' onChange={handleChange} />
                        {
                            errors.weight && <p>{errors.weight}</p>
                        }
                        <span>Types:</span>
                        {
                            errors.types && <p>{errors.types}</p>
                        }
                        <div className={`${style.typesContainer} grid grid-cols-2 lg:grid-cols-3 p-3 lg:w-[50%] gap-2`}>
                            {
                                types.map((type, index) => (
                                    <label key={index}>
                                            <input type="checkbox" value={type} onChange={handleChange} checked={inputData.types.includes(type)} />
                                            {type}
                                    </label>
                                ))
                            }
                        </div>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-y-4 py-4 gap-x-4'>
                            <button className='bg-[black] p-2' onClick={handleSubmit}> Create </button>
                            <Link to='/home'>
                                <button className='bg-[black] p-2'> Back </button>
                            </Link>
                        </div>
                    </form>
                </article>
                <article className='hidden xl:block'>
                    <img src={rojo} alt="" />
                </article>
            </section>
        </>
    )
}

export default FormCreate