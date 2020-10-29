import React from "react";

function Picture(props) {
   return props.imageArray.map(image => {
        return(
            <div class="gameImageContainer">
                <img src={image} alt="" class="gameImage" ></img>
            </div>
        )
    })
    
   
}

export default Picture;
