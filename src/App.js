import catImage from "./game-pictures/cat.jpg";
import cowImage from "./game-pictures/cow.jpg";
import deerImage from "./game-pictures/deer.jpg";
import dogImage from "./game-pictures/dog.jpg";
import giraffeImage from "./game-pictures/giraffe.jpg";
import gorillaImage from "./game-pictures/gorilla.jpg";
import lionImage from "./game-pictures/lion.jpg";
import meerkatImage from "./game-pictures/meerkat.jpg";
import puffinImage from "./game-pictures/puffin.jpg";
import rabbitImage from "./game-pictures/rabbit.jpg";
import turkeyImage from "./game-pictures/turkey.jpg";
import wallabyImage from "./game-pictures/wallaby.jpg";
import "./App.css";
import Picture from "./components/Picture";
import Header from "./components/Header";
import React, { useState, useEffect } from "react";

function App() {
  const [imageArray, setImageArray] = useState([
    { key: 0, image: catImage },
    { key: 1, image: cowImage },
    { key: 2, image: deerImage },
    { key: 3, image: dogImage },
    { key: 4, image: giraffeImage },
    { key: 5, image: gorillaImage },
    { key: 6, image: lionImage },
    { key: 7, image: meerkatImage },
    { key: 8, image: puffinImage },
    { key: 9, image: rabbitImage },
    { key: 10, image: turkeyImage },
    { key: 11, image: wallabyImage },
  ]);

  function shuffleImagArray() {
    let shuffleArray = [...imageArray];
    var currentIndex = shuffleArray.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = shuffleArray[currentIndex];
      shuffleArray[currentIndex] = shuffleArray[randomIndex];
      shuffleArray[randomIndex] = temporaryValue;
    }

    setImageArray(shuffleArray);
  }

  const [clickedImageKeys, setClickedImageKeys] = useState([]);

  function addToClickedImages(clickedImageKey) {
    setClickedImageKeys([...clickedImageKeys.concat(clickedImageKey)]);
  }

  function clearClickedImages() {
    setClickedImageKeys([]);
    
  }

  function imageHasBeenClicked(clickedImageKey) {
    return clickedImageKeys.find((image) => {
      
      if (image === clickedImageKey) {
        return true;
      }
      return false;
    });
  }

  const [currentScore, setCurrentScore] = useState(0);

  function updateCurrentScore() {
    setCurrentScore(currentScore + 1);
  }

  const [topScore, setTopScore] = useState(0);

  function updateTopScore() {    
    if (currentScore > topScore) {
      setTopScore(currentScore);        
    }
  }
  useEffect(()=>{    
    updateTopScore();
  });



  return (
    <div>
      <Header currentScore={currentScore} topScore={topScore} />
      <div id="gameContainer">
        <Picture
          imageArray={imageArray}
          shuffleImagArray={shuffleImagArray}
          addToClickedImages={addToClickedImages}
          clearClickedImages={clearClickedImages}
          imageHasBeenClicked={imageHasBeenClicked}
          updateCurrentScore={updateCurrentScore}
          updateTopScore={updateTopScore}
          setCurrentScore={setCurrentScore}
          
        />
      </div>
    </div>
  );
}

export default App;
