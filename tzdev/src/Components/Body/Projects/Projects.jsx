import React, { useState } from 'react'
import './Projects.scss'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {useSpring, animated} from 'react-spring';
import img1 from '../../images/Gfc1.png'
import img2 from '../../images/Gfc2.png'


export default function Projects(props) { 

  function Number({n}) {
    const {number} = useSpring({
      from: {number: 0},
      number: n ,
      delay: 200,
      config: {mass: 1, tension: 20, friction: 10}
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }
   
  return (
    <div className='projects-cont' id='Projects'>
      <div className='projects-slider '>

      </div>
       <div className='projects-statistics flex Grdtext2'>
          <div className='statistics-frst flex '>
              <h1><Number n={10} /></h1>
              <p>Finished projects</p>
          </div>
          <div className='statistics-frst flex'>
              <h1><Number n={15} /></h1>
              <p>Technologies</p>
          </div>
          <div className='statistics-frst flex'>
              <h1><Number n={4} /></h1>
              <p>On going projects</p>
          </div>
       </div>
    </div>
  )
}
