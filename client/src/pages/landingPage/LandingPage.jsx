import { Link } from 'react-router-dom'
import style from './landingPage.module.css'

const LandingPage = () => {


    return (
        <>
            <div className={`${style.container} flex items-center flex-col h-screen`}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' alt="" />
                <h1 className={`${style.h1Name} md:text-[40px] text-[35px] md:top-[250px] top-[250px] md:h-[90px] `}>
                    <Link to='/home'>
                        Press Start
                    </Link>
                </h1>
                <h2 className={`${style.h2Name} md:h-[90px] text-[30px] md:text-[40px] hover:text-pokeGold`}>
                    <Link to='/about'>
                        About me
                    </Link>
                </h2>
                <h3 className={`${style.h3Name} md:top-[90vh] top-[75vh] text-[15px] p-2 md:text-[25px]`}>
                    Created By: Sergio Vallenari
                </h3>
            </div>
        </>
    )
}

export default LandingPage