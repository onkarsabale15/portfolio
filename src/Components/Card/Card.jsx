import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div className="card">
        <img src={props.emoji} alt="Cant Load"/>
        <span>{props.heading}</span>
        <span>{props.details}</span>
        <a href={props.link} target="_blank"><button className="c-button">LEARN MORE</button></a>
    </div>
  )
}

export default Card