import React, { useState } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SlideImg() {
    const [display, setDisplay] = useState(true);
    const [width, setWidth] = useState(100);
    const dataImg = [
        {
            id:1,
            img:'/image/05.png',
        },
        {
            id:2,
            img:'/image/04.png',
        },
        {
            id:3,
            img:'/image/02.png',
        },
        {
            id:4,
            img:'/image/01.png',
        },
        {
            id:5,
            img:'/image/03.png',
        },
        {
            id:6,
            img:'/image/brand-opacity-1.png',
        }
    ]
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 600, 
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
};
    return (
        <div className="slider-container">
        <div
            style={{
            width: width + '%',
            display: display ? "block" : "none"
            }}
        >   
            <div className="container">
                <div className="row">
                    <Slider {...settings}>
                    {dataImg.map((item)=>{
                        return(
                            <div key={item.id}>
                                <img src={item.img} alt={`pranch-${item.id}-food`} className="img-fluid"/>
                            </div>
                        )
                    })}
                    </Slider>
                </div>
            </div>
        </div>
        </div>
    );
}

export default SlideImg;

