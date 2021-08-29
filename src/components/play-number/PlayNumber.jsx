import React from "react";

import "./PlayNumber.css";

import { colors } from "../../constants.js";

const PlayNumber = ({ number, status, onNumberClick }) => {
  const handleOnClick = () => {
    onNumberClick(number, status);
  };

  return (
    <button
      className="number"
      onClick={handleOnClick}
      style={{ backgroundColor: colors[status] }}
    >
      {number}
    </button>
  );
};

export default PlayNumber;
