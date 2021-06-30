import React from "react";

import "./Button.scss";

import "../Simplify/Simplify.scss";

const Button = ({ buttonText, simplifyButton, mainButton, swiperButton }) => {
  return (
    <button
      className={`${simplifyButton ? "simplify__button button" : "button"} ${
        mainButton ? "main__button button" : "button"
      } ${swiperButton ? "swiper__button" : ""}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
