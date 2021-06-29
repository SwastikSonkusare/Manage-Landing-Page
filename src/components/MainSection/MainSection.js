import React from "react";

import Button from "../Button/Button";

import './MainSection.scss';

const MainSection = () => {


  const mainButton = true;

  const mainContents = [
    {
      id: "01",
      title: "Track company-wide progress",
      paragraph:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      id: "02",
      title: "Advanced built-in reports",
      paragraph:
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      id: "03",
      title: "Everything you need in one place",
      paragraph:
        " Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];

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
