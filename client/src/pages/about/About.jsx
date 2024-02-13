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
import { Link } from 'react-router-dom'

const About = () => {

    const iconsArray = [
        {
            icon: react,
            alt:"react"
        },
        {
            icon: node,
            alt:"nodejs"
        },
        {
            icon: js,
            alt:"javascript"
        },
        {
            icon: php,
            alt:"php"
        },
        {
            icon: html,
            alt:"html5"
        },
        {
            icon: css,
            alt:"css"
        },
    ]

    const socialIcons = [
        {
            icon:linkedin,
            url:"https://www.linkedin.com/in/sergio-vallenari-45737b20a/"
        },
        {
            icon:github,
            url:"https://github.com/SergioFVallenari"
        },
        {
            icon:instagram,
            url:"https://sergio-vallenari.netlify.app"
        },

    ]

    return (
        <section className="lg:flex lg:w-[1024px] mx-auto lg:py-24">
            <article className='flex flex-1 flex-col items-center bg-gray-700/50 rounded-l'>
                <img src={img} alt="Imagen de Sergio" className="size-96 object-contain" />
                <div className="flex">
                    {
                        socialIcons.map(icon=>(
                            <a href={icon.url} target='_blank'><img src={icon.icon} alt="" className='size-20 py-4 hover:scale-110 transition-all duration-300' /></a>
                        ))
                    }
                </div>
            </article>
            <article className="flex flex-col flex-1 bg-gray-700/50 rounded-r">
                <h2 className='text-center text-2xl py-10 text-white'>About me</h2>
                <p className='text-center text-pretty text-white '>Hi I'm sergio! Full Stack Web Programmer with a solid background in front-end and back-end technologies. Committed to learning and staying up to date on the latest trends and tools in the world of web development. I have teamwork, effective communication and problem solving skills. I look for opportunities to apply my knowledge and grow professionally as a web developer.</p>
                <div className="lg:flex lg:flex-row grid grid-cols-3">
                    {
                        iconsArray.map(icon=>(
                            <img src={icon.icon} alt={icon.alt} className='size-16 mx-auto my-2' />
                        ))
                    }
                </div>
                    <hr />
                <Link to='/'>
                    <button className="my-10 w-24 items-center justify-center mx-auto flex bg-black/70 hover:scale-110">Back</button>
                </Link>
            </article>
        </section>
    )

}

export default About