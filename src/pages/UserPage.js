import '../css/App.css';
import React, { useState } from "react"; 

import ImageCard from "./UserPageElements/ImageCard"
import Upload from "./UserPageElements/Upload"


function UserPage({user, setUser}) {

    const[images, setImages] = useState(user.images)

    //Handling CRUD Functions for frontend
    function handleNewImage(newImage){
        //console.log("check")
        setImages([...images, newImage])

        const updatedUser = user
        updatedUser.images = [...images, newImage]
        setUser(updatedUser) 
    }

    function handleNewImages(newImages){
        
        for (let i = 0; i < newImages.length; i++){
            console.log(newImages[i])
            let thing = newImages[i]
            setImages([...images, thing])
        }
        //const updatedUser = user
        //updatedUser.images = [...images, newImage]
        //setUser(updatedUser) 
    }

    

    function handleDeleteImage(removedImage){
        //console.log("check backend first")

        const updatedImages = images.filter((image) => {
            return (image.id !== removedImage.id)
        })
        setImages(updatedImages)
        const updatedUser = user
        updatedUser.images = updatedImages
        setUser(updatedUser)
    }


    const mappedImages = images.map((image) => {
        return <ImageCard image={image} key={image.id} handleDeleteImage={handleDeleteImage}/>
    })

    return (
        <div>
                
            <span>{user.username}</span>
            <br/>
            <Upload user={user} handleNewImage={handleNewImage} handleNewImages={handleNewImages}/>

            {mappedImages}

        </div>
    )
}

export default UserPage;