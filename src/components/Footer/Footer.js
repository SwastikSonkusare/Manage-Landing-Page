import React from "react";

import facebookIcon from "../../assets/images/icon-facebook.svg";
import youtubeIcon from "../../assets/images/icon-youtube.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import pinterestIcon from "../../assets/images/icon-pinterest.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";

import Button from "../Button/Button";
import LogoSvg from "../LogoSvg/LogoSvg";

import "./Footer.scss";
const Footer = () => {
    const color = "hsl(0, 0%, 98%)"
  const buttonText = "Go";

  const footerIcons = [
    facebookIcon,
    youtubeIcon,
    twitterIcon,
    pinterestIcon,
    instagramIcon,
  ];

  const footerItems = [
    {
      id: 1,
      items: ["Home", "Pricing", "Products", "About Us"],
    },
    {
      id: 2,
      items: ["Careers", "Community", "Private Policy"],
    },
  ];

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

        <small className="footer__copyright">
          Copyright 2020. All Rights Reserved
        </small>
      </div>
    </div>
  );
};

export default Footer;
