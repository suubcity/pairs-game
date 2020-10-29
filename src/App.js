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
import Header from  "./components/Header";

function App() {
  const imageArray = [
    catImage,
    cowImage,
    deerImage,
    dogImage,
    giraffeImage,
    gorillaImage,
    lionImage,
    meerkatImage,
    puffinImage,
    rabbitImage,
    turkeyImage,
    wallabyImage,
  ];
  return (
    <div>
      <Header />
      <div id="gameContainer">
        <Picture imageArray={imageArray} />
      </div>
    </div>
  );
}

export default App;
