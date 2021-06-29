import React from "react";

import closeIcon from "../../assets/images/icon-close.svg";

import Button from "../Button/Button";

import './Sidebar.scss';


const Sidebar = ({ sidebarRef, buttonText }) => {
    const ulItems = ["Pricing", "Product", "About Us", "Careers", "Community"];


    const closeSideBarHandler = () => {
      sidebarRef.current.classList.toggle("show-sidebar");
    }

  return (
    <aside className="sidebar" ref={sidebarRef}>
      <div className="sidebar__toggle">
        <img src={closeIcon} alt={closeIcon} onClick={closeSideBarHandler} />
      </div>

      <ul className="navbar__items">
        {ulItems.map((item) => (
          <li className="navbar__item">
            <a href="#" className="navbar__links">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <Button buttonText={buttonText}  />

    </aside>
  );
};

export default Sidebar;
