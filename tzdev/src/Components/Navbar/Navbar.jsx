import {React, useRef} from 'react'
import './Navbar.scss'
import Logo from '../images/DarkLogo.png'
import profile from '../images/unnamed.png'
import sun from '../images/sun.png'
import moon from '../images/moon.png'
import { Squash as Hamburger } from 'hamburger-react'
import { BrowserRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link'

export default function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav')
  }
    const setDarkMode = () => {
      document.querySelector("body").setAttribute('data-theme', 'dark')
      localStorage.setItem("selectedTheme", "dark")
    }
    
    const setLightMode = () => {
      document.querySelector("body").setAttribute('data-theme', 'light')
      localStorage.setItem("selectedTheme", "light")
    }


    const toggletTheme = e => {
      if(e.target.checked) setDarkMode();
      else setLightMode();
    }
  
    const selectedTheme = localStorage.getItem("selectedTheme");

    if(selectedTheme === "dark"){
      setDarkMode()
    }

  return (
    <BrowserRouter>
      <header className='nav-cont flex'>
          <div className='logo flex'>
              <h3>TZ</h3>
              {selectedTheme === 'light' ? (
              <img src={LogoLight} alt="" />
            ) : (
              <img src={LogoDark} alt="" />
            )}
          </div>
          <nav className='flex' ref={navRef}>
            <div className='nav-data flex'>
              <Link  onClick={showNavbar} className='link' to='#Home' smooth>
                <h3>Home</h3>
              </Link>
              <Link onClick={showNavbar} className='link' to='#About' smooth>
                <h3>About</h3>
              </Link>
              <Link onClick={showNavbar} className='link' to='#Projects' smooth>
                <h3>Projects</h3>
              </Link>
              <Link onClick={showNavbar} className='link' to='#Contact' smooth>
                <h3>Contact</h3>
              </Link>
            </div>
          </nav>
              <div className='nav-right flex'>
              <div className='hamburger'>
                <Hamburger color='#374151' onToggle={showNavbar}/>
              </div>
                <input 
                type="checkbox" 
                id='darkmode-toggle' 
                onChange={toggletTheme} 
                defaultChecked={selectedTheme === "dark"}/>
                    <label htmlFor="darkmode-toggle">
                    </label>
              </div>
      </header>
    </BrowserRouter>
  )
}
