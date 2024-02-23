import React, { useState } from 'react'
import './AboutTab.scss'
import ReactLogo from '../../images/React.webp'
import Html from '../../images/Html.webp'
import Css from '../../images/Css.png'
import JavaScript from '../../images/Js.webp'
import BootStrap from '../../images/bootstrap.webp'
import Tailwind from '../../images/tailwind.webp'
import Vite from '../../images/vite.webp'
import Sass from '../../images/Sass.webp'
import java from '../../images/java.webp'
import php from '../../images/php.webp'
import Laravel from '../../images/laravel.webp'
import net from '../../images/net.webp'
import mysql from '../../images/mysql.webp'
import mssql from '../../images/MsSQL.webp'





export default function AboutTab() {
    const [SliderData, setSliderData] = useState([
        {
            name: 'React',
            url: ReactLogo
        },
        {
            name: 'Html',
            url: Html
        },
        {
            name: 'Css',
            url: Css
        },
        {
            name: 'JavaScript',
            url: JavaScript
        },
        {
            name: 'BootStrap',
            url: BootStrap
        },
        {
            name: 'Tailwind',
            url: Tailwind
        },
        {
            name: 'Vite',
            url: Vite
        },
        {
            name: 'Sass',
            url: Sass
        },
    ])
    const [BackEndData, setBackEndData] = useState([
        {
            name: 'Java',
            url: java
        },
        {
            name: 'PHP',
            url: php
        },
        {
            name: 'Laravel',
            url: Laravel
        },
        {
            name: '.Net',
            url: net
        },
    ])
    const [Data, setData] = useState([
        {
            name: 'MySQL',
            url: mysql
        },
        {
            name: 'MsSQL',
            url: mssql
        },
    ])

    const [toggle, setToggle] = useState(1)

    function updateToggle(id){
        setToggle(id)
    }
  return (
    <div className='AboutTab-cont animate flex'>
        <ul className='flex'>
            <li className={toggle === 1 ? 'li-active' : ''} onClick={()=>updateToggle(1)}>Front End</li>
            <li className={toggle === 2 ? 'li-active' : ''} onClick={()=>updateToggle(2)}>Back End</li>
            <li className={toggle === 3 ? 'li-active' : ''} onClick={()=>updateToggle(3)}>Data</li>
        </ul>

        <div className={toggle === 1 ? 'show-content flex' : 'content flex'}>
        {SliderData.map((slide) => (
                <div className='about-cont flex'>
                    <img src={slide.url} alt=""/>
                    <h1>{slide.name}</h1>
                </div>
            ))}
        </div>

        <div  className={toggle === 2 ? 'show-content flex' : 'content flex'}>
        {BackEndData.map((slide) => (
                <div className='about-cont flex'>
                    <img src={slide.url} alt=""/>
                    <h1>{slide.name}</h1>
                </div>
            ))}
        </div>

        <div  className={toggle === 3 ? 'show-content flex' : 'content flex'}>
        {Data.map((slide) => (
                <div className='about-cont flex'>
                    <img src={slide.url} alt=""/>
                    <h1>{slide.name}</h1>
                </div>
            ))}
        </div>


    </div>
  )
}
