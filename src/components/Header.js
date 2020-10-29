import React from "react";
import ScoreBoard from "./ScoreBoard";

function Header() {
  return (
    <div id="headerContainer">
      <header>
        <h2>Don't pick a pair.</h2>
        <p>
          Get points by clicking on an image but don't click on any more than
          once!
        </p>
      </header>
      <ScoreBoard />
    </div>
  );
}

export default Header;
