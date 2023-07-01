import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <>
    <div className='card_section'>
        <div>
            <img src={props.image} alt="Training Image" />
            <h3 className='card_lower_heading'>{props.heading}</h3>
        </div>
    </div>
    </>
  )
}
