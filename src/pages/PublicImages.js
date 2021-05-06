import React, { useState, useEffect} from "react"; 
import PublicImageCard from "./PublicImagesElements/PublicImageCards"
import '../css/App.css';

function PublicImages() {
    const [images, setImages] = useState(null)
    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        fetch(`http://localhost:3000/publicImages`)
        .then(resp => resp.json())
        .then(data => {
            setImages(data)
            setLoaded(true)
        })
      }, [])

    if (loaded === true) {
        let key = 0
        const mappedPublicImages = images.map((image) => {
            key++
            return (
             <PublicImageCard image={image} key={key}/>
            )
        })

    return (
            <div className="imagesPage">
                <span>These are the publicly uploaded images</span>
                <div className="images">
                    {mappedPublicImages}
                </div>
                <br/>

            </div>
    )} else {
        return (
            <div> loading... </div>
        )
    }
}
export default PublicImages;