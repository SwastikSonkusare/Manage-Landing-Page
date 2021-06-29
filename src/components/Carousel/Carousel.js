import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide, } from "swiper/react";

import SwiperCore, {
    Pagination,
    Navigation
  } from 'swiper/core';
  

import { cardContents } from "../../assets/data";
import "swiper/swiper.scss";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

import './Carousel.scss';

// Import Swiper styles

SwiperCore.use([Pagination, Navigation]);

const Carousel = () => {
    

    const autoplay = {
        delay: 2000
    }

  return (
    <Swiper spaceBetween={20} slidesPerView={1} autoplay={autoplay} navigation pagination={{
        "dynamicBullets": true,
        "clickable": true
      }}>
      {cardContents.map((cardContent) => (
        <SwiperSlide>
          <div className="person__container">
            <img
              className="person__avatar"
              src={cardContent.avatar}
              alt={cardContent.avatar}
            ></img>
            <span className="person__name">{cardContent.name}</span>
            <p className="person__comment">{cardContent.comment}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
