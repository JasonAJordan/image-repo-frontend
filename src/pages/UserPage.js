import '../css/App.css';
import React, { useState } from "react"; 

import ImageCard from "./UserPageElements/ImageCard"
import Upload from "./UserPageElements/Upload"


function UserPage({user, setUser}) {

    const[images, setImages] = useState(user.images)

    function handleNewImage(newImage){
        //console.log("check")
        setImages([...images, newImage])


        let updatedUser = user
        updatedUser.images = [...images, newImage]
        setUser(updatedUser)
    }
    function handleDeleteImage(image){

        console.log("check backend first")
    }


    const mappedImages = images.map((image) => {
        return <ImageCard image={image} key={image.id} handleDeleteImage={handleDeleteImage}/>
    })

    return (
        <div>
                
            <span>{user.username}</span>
            <br/>
            <Upload user={user} handleNewImage={handleNewImage}/>


            {mappedImages}

        </div>
    )
}

export default UserPage;