import React from 'react'
import './Footer.scss'
import Logo from '../Components/images/logo.png'

export default function Footer() {
  return (
    <div className='footer-cnt'>
        <div className='footer-frst-banner flex'>
            <div className='footer-logo flex'>
                <h3>TZ</h3>
                <img src={Logo} alt="" />
            </div>
            <div className='footer-data flex'>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Projects</h3>
                <h3>Contact</h3>
            </div>
        </div>
        <div className='footer-scnd-banner'>
            <p>Powered by ReactJS for a seamless and responsive user experience. Elegantly styled with pure CSS. Intelligent functionality with the prowess of JavaScript. The design of this website is self-made all autenthic</p>
        </div>
    </div>
  )
}
