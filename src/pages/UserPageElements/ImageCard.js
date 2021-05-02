import React, { useState } from "react"; 
function ImageCard({image}) {

    return (
            <div>

                    <span>This is the image card</span><br/>
                    <img src={image.imgUrl}  width="250" height="250"/>
                    <span>{image.description}</span>

            </div>
    )
}
export default ImageCard;