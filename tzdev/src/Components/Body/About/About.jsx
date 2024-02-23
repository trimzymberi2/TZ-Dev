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
            <p className='desc animate'>I'm student of Computer Science and Engineering at UBT.  I'm in the last year of studies, specializing web programming. I have powerfull skills in software engineering and programing such as: Front-end, back-end and data</p>
          </div>
        </div>
    </div>
  )
}
