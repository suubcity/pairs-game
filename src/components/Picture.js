import React from "react";

function Picture(props) {
  function handleClick(e) {
    if (props.imageHasBeenClicked(e.target.dataset.key)) {
      alert("you loose");
      props.clearClickedImages();
      props.setCurrentScore(0);
    } else {
      props.addToClickedImages(e.target.dataset.key);
      props.shuffleImagArray();
      props.updateCurrentScore();     
    }
  }

  return props.imageArray.map((item) => {
    return (
      <div className="gameImageContainer">
        <img
          onClick={handleClick}
          src={item.image}
          alt=""
          className="gameImage"
          key={item.key}
          data-key={item.key}
        ></img>
      </div>
    );
  });
}

export default Picture;
