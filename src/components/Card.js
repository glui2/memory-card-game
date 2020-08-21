import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  return (
    <svg width="200" height="300">
      <defs>
        <linearGradient id="card-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="1" />
          <stop offset="100%" stopColor="rgb(200,200,200)" stopOpacity="1" />
        </linearGradient>
        <filter id="shadow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
        </filter>
      </defs>
      <rect
        x="10"
        y="10"
        width="100"
        height="150"
        stroke="grey"
        strokeWidth="2"
        rx="10"
        ry="10"
        fill="grey"
        filter="url(#shadow)"
      />
      <rect
        className="card"
        stroke="grey"
        strokeWidth="2"
        rx="10"
        ry="10"
        fill="url(#card-gradient)"
      />
    </svg>
  );
};

export { Card };
