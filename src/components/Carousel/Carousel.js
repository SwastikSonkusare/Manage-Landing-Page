import React from "react";

import { Swiper, SwiperSlide, } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";

import Button from "../Button/Button";

import { cardContents } from "../../assets/data";

import "swiper/swiper.scss";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle";
import "swiper/components/pagination/pagination.min.css";
import "./Carousel.scss";

SwiperCore.use([Pagination, Navigation]);

const Carousel = () => {
  let swiperButton = true;
  const buttonText = "Get Started";

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{
          dynamicBullets: true,
          clickable: true,
          dynamicMainBullets: 4,
          watchSlidesProgress: true,
          watchSlidesVisibility: true,
        }}
      >
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
      <Button
        className="text-align"
        swiperButton={swiperButton}
        buttonText={buttonText}
      />
    </>
  );
};

export default Carousel;
