import React, { useState } from "react"; 


function Upload({user}) {

    const [formData, setFormData] = useState({
        user_id: user.id,
        imgUrl: "https://res.cloudinary.com/jasonjordan/image/upload/v1613589596/ajxzmzfqsamz7a2jj3fm.png",
        description: "",
    })

    function handleFormChange(event){
        setFormData({...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleFormChangeForUpload(e){
        e.persist()
        setFormData({...formData,
            [e.target.name]: e.target.files[0]
        })
    }

    function handleNewImage(newImage){
        console.log("placeholder submit")
    }


    function handleSubmit(event){
        event.preventDefault()

        // const form = new FormData()
        // form.append("user_id", formData.user_id)
        // form.append("imgUrl", formData.imgUrl)
        // form.append("description", formData.description)

        fetch(`http://localhost:3000/images`,{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
        .then(r => r.json())
        //Im only going to care for the backend atm
        .then(newImage => handleNewImage(newImage))
    }

    return (
            <div>
                <span>Upload Form/Drag and drop will go here</span><br/>

                <form onSubmit={handleSubmit}>

                    <h3>Upload a picture</h3>
                    
                    
                    {/* <input type="file" name="imageUrl" 
                    onChange={handleFormChangeForUpload}
                    /> */}

                    <input type="textarea" name="imgUrl" 
                        value={formData.imgUrl}
                        onChange={handleFormChange}
                    />

                    <input type="textarea" name="description" placeholder="Description"
                        value={formData.description}
                        onChange={handleFormChange}
                    />

                    <div className="submit-button">
                        <button type="submit">Add the New Picture! </button>
                    </div>
                </form>
            </div>
    )
}

export default Upload;