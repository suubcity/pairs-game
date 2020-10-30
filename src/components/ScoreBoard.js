import React from "react";

function ScoreBoard(props) {
  return <div id="scoreBoardContainer">
      <p>Current Score {props.currentScore}</p>
      <p>Top Score {props.topScore}</p>
  </div>;
}

export default ScoreBoard;
