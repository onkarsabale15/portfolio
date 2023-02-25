import React from 'react'
import './FloatingDiv.css'
function FloatingDiv(props) {
  return (
    <div className="floatingdiv">
        <img src={props.image} alt="Cant Load"/>
        <span>
            {props.text1}
            <br />
            {props.text2}
        </span>
    </div>
  )
}
export default FloatingDiv