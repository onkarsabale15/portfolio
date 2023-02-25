import React from 'react'
import './Footer.css'
import fotr from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Fb from '@iconscout/react-unicons/icons/uil-facebook'
import Gith from '@iconscout/react-unicons/icons/uil-github'
function Footer() {
  return (
    <div className="footer">
        <img src={fotr} alt="Cant load" style={{width:'100%'}}/>
        <div className="f-content">
            <span>contact.onkar15@gmail.com</span>
            <div className="f-icons">
              <a href="https://www.facebook.com/onkar.sabale.507" target='blank'><Fb color='white' size='3rem'/></a>
              <a href="https://www.instagram.com/onkar_sabale_1911/" target='blank'><Insta color='white' size='3rem'/></a>
              <a href="https://github.com/onkarsabale15" target='blank'><Gith color='white' size='3rem'/></a>
            </div>
        </div>
    </div>
  )
}
export default Footer