import React from 'react'
import './Works.css'
import Cpp from '../../img/cpp.png'
import Git from '../../img/git.png'
import Node from '../../img/node.png'
import react from '../../img/react.png'
import Python from '../../img/python.png'
import { themeContext } from '../../Context'
import { useContext } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
function Works() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="works">
            <div className="awesome works1">
                <span style={{ color: darkMode ? 'white' : '' }}>My</span>
                <span>Skills</span>
                <span>Web Penetration Testing, Full stack<br />Web Developemer & Data analytics.</span>
                <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                    {/* <input type="button" className="w-button" value="Hire Me" /> */}
                    <button className="w-button" style={{fontSize:'16px'}}>Hire Me</button>
                </Link>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Cpp} style={{ height: "116px" }} alt="Cant Load" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Git} style={{ height: "116px" }} alt="Cant Load" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Node} style={{ height: "116px" }} alt="Cant Load" />
                    </div>
                    <div className="w-secCircle">
                        <img src={react} style={{ height: "116px" }} alt="Cant Load" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Python} style={{ height: "116px" }} alt="Cant Load" />
                    </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}
export default Works