import React from "react";

import Button from "../Button/Button";

import Logo from "../../assets/images/logo.svg";

import './Navbar.scss';


const Navbar = () => {
    const buttonText = "Get Started";
    const ulItems = ["Pricing", "Product", "About Us", "Careers", "Community"];

  return (
    <div className="navbar">
      <img className="navbar__logo" src={Logo} alt={Logo}>
      </img>

      <ul className="navbar__items">
        {ulItems.map((item) => (
          <li className="navbar__item">
            <a href="#" className="navbar__links">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <Button buttonText={buttonText} />
    </div>
  );
};

export default Navbar;
