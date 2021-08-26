import React from "react";

import "./PlayNumber.css";

const PlayNumber = ({ number }) => {
  const handleOnClick = () => {
    console.log("Number Clicked:", number);
  };

  return (
    <button className="number" onClick={handleOnClick}>
      {number}
    </button>
  );
};

export default PlayNumber;
