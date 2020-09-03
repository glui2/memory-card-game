import React, { useState } from "react";
import "./Card.css";

const Card = (props) => {
  const [isCardOpenedState, setIsCardOpenedState] = useState(false);
  const cardValue = props.value;

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
      <g className="card-group">
        <rect
          className={isCardOpenedState ? "card show-white" : "card show-black"}
          stroke="yellow"
          strokeWidth="3"
          rx="10"
          ry="10"
          onClick={flipCard}
        />
        <text
          visibility={isCardOpenedState ? "visible" : "hidden"}
          className="card-text"
        >
          {cardValue}
        </text>
      </g>
    </svg>
  );
};

export { Card };
