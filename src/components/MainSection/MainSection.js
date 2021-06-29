import React from "react";

import Button from "../Button/Button";

import { mainContents } from '../../assets/data'

import './MainSection.scss';

const MainSection = () => {


  const mainButton = true;

 

  return (
    <main className="main">
      <div className="main__left-section">
        <h3 className="main__header">What’s different about Manage?</h3>
        <p className="main__paragraph">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="main__right-section">
        {mainContents.map((mainContent) => (
            <div className="main__container">
                <Button buttonText={mainContent.id} mainButton={mainButton} />
                <h4 className="main__container-header">{mainContent.title}</h4>
                <p className="main__container-paragraph">{mainContent.paragraph}</p>
            </div>
        ))}
      </div>
    </main>
  );
};

export default MainSection;
