import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  const [isCardOpenedState, setIsCardOpenedState] = useState(false);

  const flipCard = () => {
    if (isCardOpenedState) {
      setIsCardOpenedState(false);
    } else {
      setIsCardOpenedState(true);
    }
  };

  return (
    <svg width="200" height="200" display="block" className="card-svg">
      <defs>
        <linearGradient id="white-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="1" />
          <stop offset="100%" stopColor="rgb(200,200,200)" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="black-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(125,125,125)" stopOpacity="1" />
          <stop offset="100%" stopColor="rgb(0,0,0)" stopOpacity="1" />
        </linearGradient>

        <filter id="shadow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>
      <rect
        className="card-shadow"
        stroke="grey"
        strokeWidth="2"
        rx="10"
        ry="10"
        fill="grey"
        filter="url(#shadow)"
      />
      <rect
        className={isCardOpenedState ? "card showWhite" : "card showBlack"}
        stroke="yellow"
        strokeWidth="3"
        rx="10"
        ry="10"
        onClick={flipCard}
      />
    </svg>
  );
};

export { Card };
