import React from 'react'
import './About.scss'
import img from '../../images/unnamed.png'
import AboutTab from './AboutTab'

export default function About() {
  return (
    <div className='About-cont flex' id='About'>
        <div className='about-frst-content flex'>
          <div className='about-frst-banner animate flex'>
            <img src={img} alt="" />
          </div>
          <div className='about-scnd-banner flex'>
            <h1 className='animate'>Hi! my name is <span className='Grdtext'>Trim Zymberi</span> </h1>
            <p className='desc animate'>I am a final-year Computer Science and Engineering student at UBT, specializing in web programming. . My focus is on web programming and software development. I know my way around both front-end and back-end development, as well as handling data.</p>
          </div>
        </div>
    </div>
  )
}
