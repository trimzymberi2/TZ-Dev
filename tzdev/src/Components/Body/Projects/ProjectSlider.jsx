import React from 'react'
import './ProjectSlider.scss'
import prese from '../../images/Gfc1.png'
import gfc from '../../images/Gfc2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Git from '../../images/github.png'
import live from '../../images/DarkLive.png'
import deltarg from '../../images/deltarg.png'



export default function ProjectSlider() {
        const ArrowLeft = (props) => (
            <button
                {...props}
                className={'prev-arrow'}/>
        );

        const ArrowRight = (props) => (
            <button
                {...props}
                className={'next-arrow'}/>
        );    
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <ArrowLeft />,
            nextArrow: <ArrowRight />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='pslider-wrapper'>
        <div className='pslider-cont'>
            <Slider {...settings}>
            {data.map((d) => 
               <div className='pslider-card'>
                    <div className='pslider-img'>
                        <img src={d.img} alt="" />
                    </div>

                    <div className='pslider-info flex'>
                        <h3>{d.name}</h3>
                        <p>Section: {d.departament}</p>
                        <p>Technology: {d.technology}</p>
                        <p>About: {d.info}</p>
                        <div className='pslider-btns flex'>
                        <button className='flex'><img src={Git}/></button>
                        <button><img src={live} alt="" /></button>
                        </div>
                    </div>
               </div>
            )}
            </Slider>
        </div>
    </div>
  )
}

const data = [
    {
        name: 'Prese Eatery',
        img: prese,
        departament: 'Full-Stack',
        technology: 'React, Tailwind, Laravel',
        info: 'Fast food ordering and managing orders, sales, customers, employees',
    },
    {
        name: 'DeltaRg',
        img: deltarg,
        departament: 'Front-End',
        technology: 'React, HTML, CSS',
        info: 'Advertising website about an Engineering Company',
    },
    {
        name: 'Prese3',
        img: gfc,
        info: 'Prese fast food managment',
    },
    {
        name: 'Prese4',
        img: gfc,
        info: 'Prese fast food managment',
    },
    {
        name: 'Prese5',
        img: gfc,
        info: 'Prese fast food managment',
    },
]