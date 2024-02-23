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

  return (
    <BrowserRouter>
      <header className='nav-cont flex'>
          <div className='logo flex'>
              <h3>TZ</h3><img src={Logo} alt="" />
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
                <input type="checkbox" id='darkmode-toggle'/>
                    <label htmlFor="darkmode-toggle">
                    </label>
              </div>
      </header>
    </BrowserRouter>
  )
}
