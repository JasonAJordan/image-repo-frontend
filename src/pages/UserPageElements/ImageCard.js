import React, { useState } from "react"; 
function ImageCard({image, handleDeleteImage}) {

    function onDeleteClick(event){
        const id = image.id.toString()
        fetch(`http://localhost:3000/images/${id}`, {
            method: "DELETE"
        }); 
        handleDeleteImage(image)
    }

    return (
        <div>
            <span>This is the image card</span><br/>
            <img src={image.imgUrl}  width="250" height="250"/>
            <span>{image.description}</span>

            <button onClick={onDeleteClick}>Delete</button>

        </div>
    )
}
export default ImageCard;