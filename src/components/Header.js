import React from "react";
import ScoreBoard from "./ScoreBoard";

function Header(props) {
  return (
    <div id="headerContainer">
      <header>
        <h2>Don't Pick a Pair</h2>
        <p>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </header>
      <div>
      <ScoreBoard currentScore={props.currentScore} topScore={props.topScore} />

      </div>
     
    </div>
  );
}

export default Header;
