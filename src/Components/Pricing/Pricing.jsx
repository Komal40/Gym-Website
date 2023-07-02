import React from 'react'
import './Pricing.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {BsArrowRight} from 'react-icons/bs'

export default function Pricing() {
  return (
    <div id='pricing'>
      <div className='pricing_card1'>
      <div className='pricing_heading'>
      <h2>Day Pass</h2>
      <h1>$20</h1>
      <h2>/pass</h2>
      </div>
      <ul >
        <li>
          <span><AiOutlineCheckCircle className='pricing_check'/>1 Day pass</span>          
        </li>
        <li>
          <span><AiOutlineCheckCircle className='pricing_check'/>Free Gym Access</span>
        </li>
        <li>
          <span><AiOutlineCheckCircle className='pricing_check'/>24 Hour Access</span>
        </li>
      </ul>
      <button className='pricing_btn'>Get Started</button>
      </div>

{/* card2 */}
      <div>
      <div className='pricing_card2'>
      <div className='pricing_heading'>
      <h2>Month to Month</h2>
      <h1>$90</h1>
      <h2>/month</h2>
      </div>
      <ul >
        <li>
          <span><AiOutlineCheckCircle className='pricing_check2'/>$ 99 Joining Free</span>          
        </li>
        <li>
          <span><AiOutlineCheckCircle className='pricing_check2'/>No Contract</span>
        </li>
        <li>
          <span><AiOutlineCheckCircle className='pricing_check2'/>Free Gym Access</span>
        </li>
        <li>
          <span><AiOutlineCheckCircle className='pricing_check2'/>1 Group Class included</span>
        </li>
        <li>
          <span><AiOutlineCheckCircle className='pricing_check2'/>24 Hour Access</span>
        </li>
      </ul>
      <button className='pricing_btn2'>Get Started</button>
      </div>
      </div>

{/* card 3 */}
<div>
      <div className='pricing_card3'>
      <div className='pricing_heading3'>
      <h2><u style={{color:'green'}}>Membership</u></h2>
      <h4 style={{fontSize:'1.5rem'}}>From Punch Pass To Monthly or Annual</h4>
      <p>
                At gym base ,we offer a wide range of membership with options to
                suit every budget. Everything from One Day Pass, Punch Pass to
                Monthly Pass or Annual prepaid memberships. What's more, we
                won't tie you in a long term Conatract, giving you a greater
                flexibilty.
      </p>
      </div>
      <br/>
      <div className='pricing_card3_plan'>
      <h3>Each Plan Included</h3>
      <ul >
        <li>
          <span><BsArrowRight className='pricing_check3'/>The best Equipments Global Brands</span>          
        </li>
        <li>
          <span><BsArrowRight className='pricing_check3'/>The gym is open 24hours a day a week</span>
        </li>
        <li>
          <span><BsArrowRight className='pricing_check3'/>Two safe payment method</span>
        </li>
        <li>
          <span><BsArrowRight className='pricing_check3'/> Group fitness classes in the price of subscription</span>
        </li>
        <li>
          <span><BsArrowRight className='pricing_check3'/>No long-term contract,period</span>
        </li>
        <li>
          <span><BsArrowRight className='pricing_check3'/>Two safe payment method</span>
        </li>
      </ul>
      </div>
      </div>
      </div>
    </div>
  )
}
