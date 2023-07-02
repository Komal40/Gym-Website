import React from 'react'
import './Footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'

export default function Footer() {
    return (
        <>
            <div id="footer">
                <div className='social_links'>
                    <h1 style={{ color: 'red' }}>GYM</h1>
                    <p className='footer_para'>Welcome to our gym! We are dedicated to helping you achieve your
                        fitness.</p>
                    <div className='footer_links'>
                        <a href='https://www.facebook.com'><BsFacebook className='footer_links' /></a>
                        <a href='https://www.instagram.com'><BsInstagram className='footer_links' /></a>
                        <a href='https://www.twitter.com'><AiFillTwitterCircle className='footer_links' /></a>
                    </div>
                </div>

                <div className='footer_content'>
                    <h2>Healthy Living</h2>
                    <ul>
                        <li>Regular exercise</li>
                        <li>Proper nutrition</li>
                        <li>Professional guidance</li>
                        <li>Clean and safe environment</li>
                    </ul>
                </div>

                <div className='footer_content'>
                    <h2>Services</h2>
                    <ul>
                        <li>Exercise equipment </li>
                        <li>Personal training</li>
                        <li>Childcare services</li>
                        <li>Group fitness classes</li>
                    </ul>

                </div>

                <div className='footer_content'>
                    <h2>Programs</h2>
                    <ul>
                        <li>Wellness Programs</li>
                        <li>Specialty Programs</li>
                        <li>Functional Fitness</li>
                        <li>Cardiovascular Training</li>
                    </ul>

                </div>
            </div>
            <hr />
            <p style={{ textAlign: 'center' }}>&copy;2023 All rights copy reserved</p>
        </>
    )
}
