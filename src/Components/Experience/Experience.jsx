import React from 'react'
import './Experience.css'
import GDSC from '../../img/GDSC.png'
import LnB from '../../img/LnB.png'
import MyCaptain from '../../img/MyCaptain.png'


function Experience() {
  return (
    <div className="experience" id='Experience'>
      <div className="achievement">
        <div className="circle">
          <img src={LnB}/>
        </div>
        <span>LnB</span>
        <span>Cyber Security <br />Intern</span>
      </div>
      <div className="achievement">
        <div className="circle">
          <img src={GDSC} style={{height:'151px'}}/>
        </div>
        <span>GDSC DYPIU</span>
        <span>Core<br/>Team</span>
      </div>
      <div className="achievement">
        <div className="circle">
          <img src={MyCaptain}  style={{height:'151px'}}/>
        </div>
        <span>MyCaptain</span>
        <span>Campus<br/>Ambassador</span>
      </div>
    </div>
  )
}

export default Experience