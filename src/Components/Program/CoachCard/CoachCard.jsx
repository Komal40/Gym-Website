import React from 'react'
import './CoachCard.css'

export default function CoachCard(props) {
  return (
    <>
      <div className='coachCard_section'>
        <img className='caochCard_section_image' src={props.image} />
        <div className='coachCard_lower_heading'>
          <h3>{props.name} ({props.profession})</h3>
        </div>
      </div>
    </>
  )
}
