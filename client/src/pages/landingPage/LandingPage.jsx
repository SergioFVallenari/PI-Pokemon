import { Link } from 'react-router-dom'
import style from './landingPage.module.css'

const LandingPage = () => {


    return (
        <>
            <div className={style.container}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png' alt="" />
                <h1>
                    <Link to='/home'>
                        Press Start
                    </Link>
                </h1>
                <h2>
                    <Link to='/about'>
                        About me
                    </Link>
                </h2>
                <h3>
                    Created By: Sergio Vallenari
                </h3>
            </div>
        </>
    )
}

export default LandingPage