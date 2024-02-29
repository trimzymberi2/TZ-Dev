import React from 'react'
import Home from './Home/Home'
import './Body.scss'
import HomeSlider from './Home/HomeSlider'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import AboutTab from './About/AboutTab'
import ProjectSlider from './Projects/ProjectSlider'

export default function Body() {
  return (
    <div className='body'>
      <div className='Home'>
        <Home/>
        <About/>
        <AboutTab/>
        <ProjectSlider/>
        <Projects/>
        <Contact/>
        <HomeSlider/>
      </div>
    </div>
  )
}
