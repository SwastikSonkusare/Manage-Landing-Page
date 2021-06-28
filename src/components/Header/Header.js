import React from "react";

import illustrationImage from "../../assets/images/illustration-intro.svg";

import Button from "../Button/Button";

import './Header.scss';

const Header = () => {
    const buttonText = "Get Started";
    

  return (
    <header className="header">
      <div className="header__left-section">
        <h1 className="header__heading">
          Bring everyone together to build better products.
        </h1>

        <p className="header__paragraph">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>

        <Button buttonText={buttonText} />
      </div>
      <div className="header__right-section">
          <img className="header__image" src={illustrationImage} alt={illustrationImage}></img>
      </div>
    </header>
  );
};

export default Header;
