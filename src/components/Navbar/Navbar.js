import React, { useRef } from "react";

import Button from "../Button/Button";
import Sidebar from "../Sidebar/Sidebar";
import { ulItems } from '../../assets/data.js';

import LogoSvg from "../LogoSvg/LogoSvg";
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";

import "./Navbar.scss";

const Navbar = () => {
  const color = "#242D52";
  const buttonText = "Get Started";

 

  const sidebarRef = useRef();

  const sidebarHandler = () => {
    sidebarRef.current.classList.toggle("show-sidebar");
  };

  return (
    <>
      <Sidebar sidebarRef={sidebarRef} buttonText={buttonText} />

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

        <div className="navbar__button">
          <Button buttonText={buttonText} />
        </div>

        <div className="navbar__hamburger" onClick={sidebarHandler}>
          <img src={hamburgerIcon} alt={hamburgerIcon} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
