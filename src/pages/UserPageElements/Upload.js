import React, { useState } from "react"; 


function Upload({user, handleNewImage}) {

    const [formData, setFormData] = useState({
        user_id: user.id,
        imgUrl: {},
        description: "",
        public: false
    })

    //imgUrl: "https://res.cloudinary.com/jasonjordan/image/upload/v1613589596/ajxzmzfqsamz7a2jj3fm.png",

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

    function handleToggle(e){
        setFormData({...formData, 
            ["public"]: !formData.public})
        console.log(formData);
    }

    function handleSubmit(event){
        event.preventDefault()
        

        const form = new FormData()
        form.append("user_id", formData.user_id)
        form.append("imgUrl", formData.imgUrl)
        form.append("description", formData.description)
        form.append("public", formData.public)

        fetch(`http://localhost:3000/images`,{
            method: 'POST',
            // headers:{
            //     'Content-Type': 'application/json',
            // },           
            body: (form)
            })
        .then(r => r.json())
        
        .then(newImage => handleNewImage(newImage))
    }

    return (
        <div>
            <span>Upload Form/Drag and drop will go here</span><br/>

            <form onSubmit={handleSubmit}>

                <h3>Upload a picture</h3>  
                    
                <input type="file" name="imgUrl" 
                onChange={handleFormChangeForUpload}
                />
                <br/>
                <input type="textarea" name="description" placeholder="Description"
                    value={formData.description}
                    onChange={handleFormChange}
                />

                <br/>
                <span>Public Upload</span>
                <input type="checkbox" onChange={handleToggle}/>

                <div className="submit-button">
                        <button type="submit">Add the New Picture! </button>
                </div>
                </form>
            </div>
    )
}

export default Upload;