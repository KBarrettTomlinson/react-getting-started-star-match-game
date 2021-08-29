import React from "react";

import "./PlayAgain.css";

const PlayAgain = ({ resetGame, gameStatus }) => {
  return (
    <div className="game-done">
      <div
        className="message"
        style={{ color: gameStatus === "lost" ? "red" : "green" }}
      >
        {gameStatus === "lost" ? "Game Over" : "Nice"}
      </div>
      <button onClick={resetGame}>Play Again</button>
    </div>
  );
};

export default PlayAgain;
