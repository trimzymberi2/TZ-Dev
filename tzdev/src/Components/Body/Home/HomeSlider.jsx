import React, { useState } from 'react';
import './HomeSlider.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactLogo from '../../images/React.webp';
import Html from '../../images/Html.webp';
import Css from '../../images/Css.png';
import JavaScript from '../../images/Js.webp';
import Figma from '../../images/Figma.webp';
import Sass from '../../images/Sass.webp';
import CssGradeint from '../../images/CssGradient.webp';



export default function HomeSlider(props) {

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
            name: 'Figma',
            url: Figma
        },
        {
            name: 'Sass',
            url: Sass
        },
        {
            name: 'Css Gradients',
            url: CssGradeint
        },
    ])
   
    const responsive = {
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
        }
    };

  return (
    <div className='homeSlider-cont tittle'>
        <h1 className='flex tittle'>Technologies and tools used for this website</h1>
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2500}
            keyBoardControl={false}
            customTransition="transform 1s ease-in-out"
            transitionDuration={100}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            {SliderData.map((slide) => (
                <div className='card flex'>
                    <img src={slide.url} alt=""/>
                    <h1>{slide.name}</h1>
                </div>
            ))}
        </Carousel>
           
    </div>
  );
}
