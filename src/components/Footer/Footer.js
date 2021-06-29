import React from "react";

import Button from "../Button/Button";
import { footerItems, footerIcons } from '../../assets/data'

import LogoSvg from "../LogoSvg/LogoSvg";

import "./Footer.scss";
const Footer = () => {
    const color = "hsl(0, 0%, 98%)"
    const buttonText = "Go";

 

  return (
    <div className="footer">
      <div className="footer__container">
        <LogoSvg color={color} />
        <div className="footer__icons">
          {footerIcons.map((footerIcon) => (
            <img
              src={footerIcon}
              alt={footerIcon}
              className="footer__icon"
            ></img>
          ))}
        </div>
      </div>

      <div className="footer__content">
        {footerItems.map((footerItem) => (
          <ul className="footer__items">
            {footerItem.items.map((item) => (
              <>
                <li className="footer__item">
                  <a href="#" className="footer__links">
                    {item}
                  </a>
                </li>
              </>
            ))}
          </ul>
        ))}
      </div>

      <div className="footer__disclaimer">
        <div className="footer__form">
          <input type="text" placeholder="Updates in your inbox..." className="footer__input">
            
          </input>
          <Button buttonText={buttonText} />
        </div>

        <small className="footer__copyright--1">
          Copyright 2020. All Rights Reserved
        </small>
      </div>

      <small className="footer__copyright--2">
          Copyright 2020. All Rights Reserved
        </small>
    </div>
  );
};

export default Footer;
