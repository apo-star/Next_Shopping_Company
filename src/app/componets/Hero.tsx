"use client";
import React from 'react'
//import { ImInsertTemplate } from 'react-icons/im';
import Slider from "react-slick"
import Slide from "./Slide";

export const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/1.png",
        },
        {
            id: 1,
            img: "/2.png",
        },
        {
            id: 2,
            img: "/3.png",
        }
    ]
  return (
    <div>
    <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
            {slideData.map((item) =>(
            <Slide 
                    key={item.id}
                    img={item.img} />
            ))}
        </Slider>
        </div>
    </div>
)
};

export default Hero;
