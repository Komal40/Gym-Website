import React from 'react'
import './About.css'

export default function About() {
  return (
    <div id='about'>
      <div className='about__section'>
        <div className='video1'>
          <iframe
            width="360"
            height="500"
            src="https://www.youtube.com/embed/X_9VoqR5ojM"
            title="YouTube video player"
            allowFullScreen={true}
          ></iframe>
        </div>
        <div className='about_section'>
          <h1 className='about_heading'>
            About US
          </h1>
          <p>Through our 7-day programme we offer you some useful life questions to think about. We also offer you some answers on these questions but we encourage you to learn more about it yourself. You can read it all at once but we advise you to read and think about your life for the next 7 days. It may become the most valuable week of your life! It can be very valuable in your life. So take some time and invest one week in your life and future!</p>
          <button className='btn' onClick={() => alert('About Section Clicked')}>Learn More</button>
        </div>
      </div>


      <div className='about__section'>
        <div className='about_section2'>
          <h1 className='about_heading2'>Why Choose Us?</h1>
          <ul>
            <li>
              <strong className='about_list'>Consultations with Experts</strong>
              <p>Plus Fitness franchisee Jacob Awad first started his journey with the brand in 2013 after purchasing Plus Fitness Seven Hills from a previous owner. In 2017 Jacob then went on to purchase his second location, Plus Fitness Northmead.</p>
            </li>
            <li>
              <strong className='about_list'>WorkOut Facilities</strong>
              <p>Plus Fitness franchisee Jacob Awad first started his journey with the brand in 2013 after purchasing Plus Fitness Seven Hills from a previous owner. In 2017 Jacob then went on to purchase his second location, Plus Fitness Northmead.</p>
            </li>
          </ul>
        </div>
        <div className='video2'>
          <iframe
            width="360"
            height="500"
            src="https://www.youtube.com/embed/CfV1G8boJaQ"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
            title="YouTube video player"
          ></iframe>
        </div>
      </div>

    </div>
  )
}
