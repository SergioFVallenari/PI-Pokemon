import react from '../../../public/about-images/react.svg'
import node from '../../../public/about-images/nodejs-1.svg'
import js from '../../../public/about-images/javascript-1.svg'
import php from '../../../public/about-images/php-1.svg'
import html from '../../../public/about-images/html-1.svg'
import css from '../../../public/about-images/css-3.svg'
import linkedin from '../../../public/about-images/linkedin-icon-3.svg'
import instagram from '../../../public/about-images/instagram-2016-5.svg'
import github from '../../../public/about-images/github-icon-2.svg'
import img from '../../../public/about-images/sergiopng.png'
import style from './about.module.css'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className={style.aboutContent}>
            <article className={style.infoContainer}>
                <Link to='/'>
                    <button>Back</button>
                </Link>
                <h2>About me</h2>
                <p>Hi I'm sergio! Full Stack Web Programmer with a solid background in front-end and back-end technologies. Committed to learning and staying up to date on the latest trends and tools in the world of web development. I have teamwork, effective communication and problem solving skills. I look for opportunities to apply my knowledge and grow professionally as a web developer.</p>
                <div className={style.logos}>
                    <img src={react} alt="" />
                    <img src={node} alt="" />
                    <img src={js} alt="" />
                    <img src={php} alt="" />
                    <img src={html} alt="" />
                    <img src={css} alt="" />
                    <hr />
                </div>
                <h3>Social Networks</h3>
                <div className={style.redes}>
                    <a href="https://www.linkedin.com/in/sergio-vallenari-45737b20a/" target='BLANK'><img src={linkedin} alt="linkedin" /></a>
                    <a href="https://www.instagram.com/sergiovallenari/" target='BLANK'><img src={instagram} alt="instagram" /></a>
                    <a href="https://github.com/SergioFVallenari" target='BLANK'><img src={github} alt="github" /></a>
                </div>
            </article>
            <img src={img} alt="Imagen de Sergio" className={style.image} />
        </section>
    )

}

export default About