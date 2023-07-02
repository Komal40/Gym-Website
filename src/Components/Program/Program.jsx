import React from 'react'
import './Program.css'
import CoachCard from './CoachCard/CoachCard'
import { useNavigate } from 'react-router-dom'

export default function Program() {

  const navigate = useNavigate()

  const coach = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1369509413/photo/shot-of-a-handsome-young-man-taking-a-break-during-his-workout.jpg?b=1&s=170667a&w=0&k=20&c=MC2um7AEeVfi6Omt4i4ygVzO42upQt4jvI32tHgt0OE=",
      name: "Jordan Musk",
      profession: "Fitness Coach",
    },
    {
      id: 2,
      image:
        "https://www.arhantayoga.org/wp-content/uploads/2023/04/50-hour-Yin-Yoga-Teacher-Training.jpg",
      name: "Evia Freg",
      profession: "Yoga Coach",
    },
    {
      id: 3,
      image:
        "https://images.squarespace-cdn.com/content/v1/56e029a8a3360cb7acc01a85/1559597683736-X5P01AERY92IBMVIRFEA/OwnerCoachBenTyler.jpg?format=1000w",
      name: "Mark Anthony",
      profession: "Crossfit Coach",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/premium-photo/fitness-sport-dance-lifestyle-concept-group-smiling-people-with-coach-dancing-zumba-gym-studio_380164-95204.jpg?w=1060",
      name: "Rini Dichard",
      profession: "Zumba Coach",
    },
  ]


  return (
    <div id='program'>
      <h1 className='training_heading'>Meet Our Team</h1>
      <div className='program_section'>
        {
          coach.map((card) => (
            <CoachCard key={card.id} image={card.image} name={card.name} profession={card.profession} />
          ))
        }
      </div>
      <button className='team_btn' onClick={() => navigate('/team')}>See Whole Team</button>
    </div>

  )
}
