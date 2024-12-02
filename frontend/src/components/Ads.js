import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Ads = ({ adsData }) => {
    const settings = {
        dots: true, // Remove dots if you don't need them
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, //Optional Autoplay
        autoplaySpeed: 3000, //Optional Autoplay Speed
        swipeToSlide: true,
        arrows: false //remove arrows if you dont need them.
    };

    return (
        <div className="ads-component">
            <Slider {...settings}>
                {adsData.map((ad) => (
                    <div key={ad.img}>
                        <a href={ad.redirectUrl} target="_blank" rel="noopener noreferrer">
                            <img src={ad.img} alt={`Ad ${ad.img}`} />
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Ads;