import React from "react";


import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";

import { cardContents } from '../../assets/data';

import "./Card.scss";

const Card = () => {
  const buttonText = "Get Started";
  let hideButton = true;


 

  return (
    <>
    <div className="card">
      <h3 className="card__header">What they've said</h3>

      <div className="card__container">
        <div className="person">
          {cardContents.map((cardContent) => (
            <>
              <div className="person__container">
                <img
                  className="person__avatar"
                  src={cardContent.avatar}
                  alt={cardContent.avatar}
                ></img>
                <span className="person__name">{cardContent.name}</span>
                <p className="person__comment">{cardContent.comment}</p>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="text-align">
        <Button buttonText={buttonText} hideButton={hideButton} />
      </div>

    </div>
      <Carousel />
      </>
  );
};

export default Card;
