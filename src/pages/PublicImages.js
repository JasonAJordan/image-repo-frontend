import React, { useState, useEffect} from "react"; 
import PublicImageCard from "./PublicImagesElements/PublicImageCards"

function PublicImages({}) {
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
            <div>
                <span>These are the publicly uploaded images</span>

                {mappedPublicImages}
                <br/>

            </div>
    )} else {
        return (
            <div> loading... </div>
        )
    }
}
export default PublicImages;