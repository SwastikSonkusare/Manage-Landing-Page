import React from "react";

import avatar1 from "../../assets/images/avatar-ali.png";
import avatar2 from "../../assets/images/avatar-anisha.png";
import avatar3 from "../../assets/images/avatar-richard.png";
import avatar4 from "../../assets/images/avatar-shanai.png";

import "./Card.scss";

const Card = () => {
  const cardContents = [
    {
      avatar: avatar1,
      name: "Anisha Li",
      comment:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      avatar: avatar2,
      name: "Ali Bravo",
      comment:
        "“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”",
    },
    {
      avatar: avatar3,
      name: "Richards Watts",
      comment:
        "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    },
    {
      avatar: avatar4,
      name: " Shanai Gough",
      comment:
        "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    },
  ];

  return (
    <div className="card">
      <h3 className="card__header">What they've said</h3>

      <div className="card__container">
        <div className="person">
          {cardContents.map((cardContent) => (
            <>
              <div className="person__container">
                <img
                  className="person__avatar"
                  src={cardContent.avatar}
                  alt={cardContent.avatar}
                ></img>
                <span className="person__name">{cardContent.name}</span>
                <p className="person__comment">{cardContent.comment}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
