// components/Card.jsx
import React from "react";

const Card = ({
  Icon,
  title,
  info,
  description,
  iconColor,
  animationClass,
  cardClass,
}) => {
  return (
    <div
      className={
        cardClass
          ? `${cardClass} ${animationClass}`
          : `bg-white shadow-lg rounded-lg flex flex-col items-center justify-end p-6 w-1/2 aspect-square ${animationClass}`
      }
    >
      <div className={`text-4xl mb-4 ${iconColor}`}>
        <Icon />
      </div>
      <p className="text-gray-700 text-center text-sm font-bold">{title}</p>
      <p className="text-gray-600 text-center text-xs">{description}</p>
      <p className="text-gray-800 text-center text-xs">{info}</p>
    </div>
  );
};

export default Card;
