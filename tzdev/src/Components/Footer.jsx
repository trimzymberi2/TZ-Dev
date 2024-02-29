import React from 'react'
import './Footer.scss'
import LogoLight from './images/DarkLogo.png'
import LogoDark from './images/logo.png'
import { useTheme } from './Navbar/ThemeContext';

export default function Footer() {

  const { selectedTheme, setDarkMode, setLightMode, toggletTheme } = useTheme();

  return (
    <div className='footer-cnt'>
        <div className='footer-frst-banner flex'>
            <div className='footer-logo flex'>
                <h3>TZ</h3>
                {selectedTheme === 'dark' ? (
                <img src={LogoDark} alt="" />
                ) : (
                    <img src={LogoLight} alt="" />
                )}
            </div>
            <div className='footer-data flex'>
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Projects</h3>
                <h3>Contact</h3>
            </div>
        </div>
        <div className='footer-scnd-banner'>
            <p>This website is powered by react JS the design and code is all self-made by @Trim Zymberi</p>
        </div>
    </div>
  )
}
