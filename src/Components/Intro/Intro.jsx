import React from 'react'
import './Intro.css'
import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import Boy from "../../img/boy1.png"
import Thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import Glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

function Intro() {
    const transition = { duration: 2, type: 'spring' }
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="intro" id='Intro'>
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? 'white' : '' }}>Hi !!! I Am</span>
                    <span>Onkar Sabale</span>
                    <span>Full Stack Web Developer, Mern Stack,<br />C++, Python Programming, Github.</span>
                </div>
                <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                    <button className="button i-button">
                        Hire Me
                    </button>
                </Link>
                <div className="i-icons">
                    <a href='https://github.com/onkarsabale15' target='blank'>
                        <img src={Github} alt="Cant Load Github Icon" />
                    </a>
                    <a href='https://www.linkedin.com/in/onkar-sabale-270152177/' target='blank'>
                        <img src={Linkedin} alt="Cant Load Linkedin Icon" />
                    </a>
                    <a href='https://www.instagram.com/onkar_sabale_1911/' target='blank'>
                        <img src={Instagram} alt="Cant Load Instagram Icon" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="Cant Load Vector1" />
                <img src={Vector2} alt="Cant Load Vector2" />
                <img src={Boy} alt="Cant Load" />
                <motion.img initial={{ left: '-36%' }} whileInView={{ left: '-24%' }} transition={transition} src={Glassesimoji} alt="Cant Load GIF" />
                <motion.div initial={{ top: '-4%', left: '74%' }} whileInView={{ left: '68%' }} transition={transition} style={{ top: '-4%', left: '68%' }} className='floating-div'>
                    <FloatingDiv image={Crown} text1="Web" text2="Developer" />
                </motion.div>
                <motion.div initial={{ left: '-6%' }} whileInView={{ left: 0 }} transition={transition} style={{ top: '18rem', left: '0rem' }} className='floating-div'>
                    <FloatingDiv image={Thumbup} text1="C++, Python" text2="Programmer" />
                </motion.div>
                <div className="blur" style={{ backgroundColor: 'rgb(238 210 255)' }}></div>
                <div className="blur" style={{ background: '#54dcf7', top: '15rem', width: '21rem', height: '11rem', left: '-6rem', filter: 'blur(80px)' }}></div>
            </div>
        </div>
    )
}
export default Intro