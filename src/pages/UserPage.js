import '../css/App.css';
import React, { useState } from "react"; 

import ImageCard from "./UserPageElements/ImageCard"
import Upload from "./UserPageElements/Upload"

function UserPage({user}) {


    const mappedImages = user.images.map((image) => {
        return <ImageCard image={image} key={image.id}/>
    })

    return (
            <div>
                
                <span>{user.username}</span>
                <br/>
                <Upload user={user}/>


                {mappedImages}

            </div>
    )
}

export default UserPage;