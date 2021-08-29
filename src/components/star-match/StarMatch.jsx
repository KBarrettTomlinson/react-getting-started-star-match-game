import React, { useState } from "react";
import Game from "../game/Game.jsx";

import "./StarMatch.css";

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default StarMatch;
