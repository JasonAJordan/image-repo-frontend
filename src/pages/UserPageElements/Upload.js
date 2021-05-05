import React, { useState } from "react"; 


function Upload({user, handleNewImage}) {

    const [formData, setFormData] = useState({
        user_id: user.id,
        imgUrl: {},
        description: "",
        public: false
    })

    function handleFormChange(event){
        setFormData({...formData,
            [event.target.name]: event.target.value
        })
    }

    function handleFormChangeForUpload(e){
        e.persist()
        setFormData({...formData,
            [e.target.name]: e.target.files
        })
    }

    function handleToggle(e){
        setFormData({...formData, 
            public: !formData.public})
        //console.log(formData);
    }

    function handleSubmit(event){
        event.preventDefault()

        const form = new FormData()
        form.append("user_id", formData.user_id)
        form.append("description", formData.description)
        form.append("public", formData.public)
        //form.append("imgUrl", formData.imgUrl)
        //let images = new Array(formData.imgUrl.length).fill(null) 

        for (let i = 0; i< formData.imgUrl.length; i++){
            const uploadForm = form
            uploadForm.append("imgUrl", formData.imgUrl[i])

            fetch(`http://localhost:3000/images`,{
                method: 'POST',
                // headers:{
                //     'Content-Type': 'application/json',
                // },           
                body: (uploadForm)
                })
            .then(r => r.json())
            .then(newImage => handleNewImage(newImage))
            //.then(newImage => images[i] = newImage)
            
        }
        
    }

    return (
        <div>
            <span>Upload Form/Drag and drop will go here</span><br/>

            <form onSubmit={handleSubmit}>

                <h3>Upload a picture</h3>  
                    
                <input type="file" name="imgUrl" multiple
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