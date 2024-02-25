import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../../Asets/Animation - 1708548113142.json'
import './Home.scss'
import img from '../../images/Saly-13.png'
import HomeSlider from './HomeSlider'

export default function Home() {
  return (
    <div className='home-wrapper' id='Home'>
        <div className='home-cont flex animate'>
            <div className='left-home-bnr flex'>
                <h1>Hello! I'm <span className='Grdtext'>Trim Zymberi</span>, Web Developer</h1>
                <p>Welcome at my portfolio. I hope that you are going to find it very user friendly and have a great experience.  I tried to do my best creativity and fucntionality, have a great journey.</p>
            </div>
            <div className='right-home-bnr flex'>
                 <div className='animation-banner'>
                  <Lottie animationData={animationData} />
                 </div>
            </div>
        </div>
    </div>
  )
}
