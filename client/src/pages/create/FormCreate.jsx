import style from './formCreate.module.css'
import rojo from '../../../public/rojo.png'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import validation from './validation'
import { useNavigate } from 'react-router-dom'


const FormCreate = ({ create }) => {
    const navigate = useNavigate()
    const types = useSelector((state) => state.allTypes)
    // console.log('componente form', types);
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
                types: updatedTypes.slice(0, 2) // Limitar a 2 elementos
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
        event.preventDefault()

        const formErrors = validation(inputData)

        if (Object.keys(formErrors).length === 0) {
            create(inputData)
            navigate('/home')
        }else {
            setErrors(formErrors);
        }
            
    }

    return (
        <>
            <section className={style.container}>
                <article className={style.formContainer}>


                    <h2>Creá tu pokemon</h2>


                    <form onChange={handleChange}>
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
                        <div className={style.typesContainer}>
                            {
                                types.map((type, index) => (
                                    <label key={index}>
                                        <input type="checkbox" value={type} onChange={handleChange} checked={inputData.types.includes(type)} />
                                        {type}
                                    </label>
                                ))
                            }
                        </div>
                        <input type="submit" value='Crear' onClick={handleSubmit} />
                    </form>
                </article>
                <article>
                    <img src={rojo} alt="" />
                </article>
            </section>
        </>
    )
}

export default FormCreate