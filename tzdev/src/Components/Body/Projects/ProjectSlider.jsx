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
import kartell from '../../images/kartell.png'
import calzone from '../../images/Calzone.png'
import tzdev from '../../images/tzdev.png'




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
        dots: true,
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
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
    <div className='pslider-wrapper' id='Projects'>
        <div className='pslider-cont'>
            <h1 className='flex'>Projects</h1>
            <Slider {...settings}>
            {data.map((d) => 
               <div className='pslider-card'>
                    <div className='pslider-img'>
                        <img src={d.img} alt="" />
                    </div>

                    <div className='pslider-info flex'>
                        <h3>{d.name}</h3>
                        <p><label>Section:</label> {d.departament}</p>
                        <p><label>Technology:</label> {d.technology}</p>
                        <p><label>About:</label> {d.info}</p>
                        <div className='pslider-btns flex'>
                        <a className='flex' href={d.git}  target="_blank"><img src={Git}/></a>
                        <a href={d.host}  target="_blank"><img src={live} alt="" /></a>
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
        name: 'DeltaRg',
        img: deltarg,
        departament: 'Front-End',
        technology: 'React, HTML, SCSS',
        info: 'Advertising website about an Engineering Company.',
        git: 'https://github.com/trimzymberi2/DeltaRg',
        host: 'https://deltarg.netlify.app'
    },
    {
        name: 'Prese Eatery',
        img: prese,
        departament: 'Full-Stack',
        technology: 'React, Tailwind, Laravel',
        info: 'Fast food ordering web application managing orders, sales, customers, employees.',
        git: 'https://github.com/TrimZymberi/AT-Ecommercee',
        host: ''
    },
    {
        name: 'Kartell',
        img: kartell,
        departament: 'Full-Stack',
        technology: 'PHP, HTML, CSS, JavaScript',
        info: 'E-Commerce selling furnitures managing orders, customers and employes.',
        git: 'https://github.com/TrimZymberi/Web',
        host: ''
    },
    {
        name: 'Calzone Restaurant',
        img: calzone,
        departament: 'Data',
        technology: 'SQL',
        info: 'Restaurant menagment system, projected, designed, implementet in MSSQL.',
        git: 'https://github.com/trimzymberi2/Calzone',
        host: '/'
    },
    {
        name: 'TZ-Dev',
        img: tzdev,
        departament: 'Front-End',
        technology: 'React, HTML, SCSS',
        info: 'Personal Portfolio',
        git: 'https://github.com/trimzymberi2/TZ-Dev',
        host: 'https://tz-dev.netlify.app'
    },
]