import { Link } from "react-router-dom"
import style from './card.module.css'

const Card = ({ id, name, image, types }) => {
    // Elimina espacios adicionales de los nombres de los tipos
    const cleanedTypes = types ? types.map(type => type.trim()) : [];

    const backgroundClass = cleanedTypes.length > 0 ? cleanedTypes[0].toLowerCase() : 'defaultBackground';



    // console.log('cleanedTypes:', cleanedTypes);
    // console.log('backgroundClass:', backgroundClass);
    // console.log(types);
    return (
        <>
            <div className={`${style.cardContainer} ${style[backgroundClass]}`}>
                <div className={style.imgContainer}>
                    <img src={image} alt="" />
                </div>
                <h3>{name.charAt(0).toUpperCase() + name?.slice(1)}</h3>
                {/* <h3>{types.map((type) => type.charAt(0).toUpperCase() + type?.slice(1))}</h3> */}
                <div className={style.icon}>
                    {types.map((type, index) => (
                        <span key={index} className={style[`type${type.trim()}`]}>
                            {/* {type.charAt(0).toUpperCase() + type?.slice(1)} */}
                        </span>
                    ))}
                </div>
                <Link to={`/detail/${id}`}>
                    <button className={style.btnDetail}>➕</button>
                </Link>


            </div>
        </>
    );
};

export default Card