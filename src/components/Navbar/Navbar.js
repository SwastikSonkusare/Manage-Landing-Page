import React from "react";

import Button from "../Button/Button";


import './Navbar.scss';
import LogoSvg from "../LogoSvg/LogoSvg";


const Navbar = () => {
  const color = "#242D52";
    const buttonText = "Get Started";

    const ulItems = ["Pricing", "Product", "About Us", "Careers", "Community"];

  return (
    <div className="navbar">
        <LogoSvg color={color} />

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
