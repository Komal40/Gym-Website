import React from 'react'
import './TeamCard.css'

export default function TeamCard(props) {
  return (
    <div className='teamCard_section'>
      <img src={props.image} />
      <div className='teamCard_heading'>
        <h3>{props.title}</h3>
        <strong>({props.desc})</strong>
      </div>
    </div>
  )
}
