import { useState }  from "react";
import '../css/App.css';

function UnitTests() {

    const [testData, setTestData] = useState({
        Test1: null,
        Test2: null,
        Test3: null,
        Test4: null,
    })

    const [formData, setFormData] = useState({
        username: "",
        password: "1234",
        name: "devdev",
    })

    const [uploadData, setUploadData] = useState({
        user_id: 3,
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
        setUploadData({...uploadData,
            [e.target.name]: e.target.files
        })
    }


    function getPublicImages(){
        let expected = {
            "description": "This is a seeded image",
            "imgUrl": "https://res.cloudinary.com/jasonjordan/image/upload/v1613589596/ajxzmzfqsamz7a2jj3fm.png"
        }

        fetch(`http://localhost:3000/publicImages`)
        .then(resp => resp.json())
        .then(data => {
            if (data[0].imgUrl === expected.imgUrl){
                setTestData({...testData, Test1: "Passed, got the right data"})
                console.log("Passed, we got the right data", data[0],)
            } else {
                setTestData({...testData, Test1: "Something went wrong"})
                console.log(data[0], "failed, wrong data was sent")
            } 
        })
        
    }

    function checkLogin() {
        const username = "DevLogin"
        const password = "1234"

        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
          .then((r) => r.json())
          .then((data) => {
              if (data.failure) {
                  alert("Incorrect Username or Password")
                  setTestData({...testData, Test2: "Something went wrong"})
              } else {
                setTestData({...testData, Test2: "Passed, user info and token are correct"})
                console.log("Passed with user info and token", data)
            }
        });
    }

    function checkRegister(e){
        e.preventDefault()
        //console.log(formData)

        fetch(`http://localhost:3000/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
        .then(r => r.json())
        .then(data => {
            if (data.token){
                setTestData({...testData, Test3: "Passed, user has been created and a token as been sent back"})
                console.log("Passed, user has been created and a token as been sent back" , data)
            } else {
                setTestData({...testData, Test3: "Something went wrong"})
                console.log("Something weet wrong" , data)
            }
        })
    }

    function checkUpload(event){
        event.preventDefault()
        
        const form = new FormData()
        form.append("user_id", uploadData.user_id)
        form.append("description", uploadData.description)
        form.append("public", uploadData.public)
        //form.append("imgUrl", formData.imgUrl)
        //let images = new Array(formData.imgUrl.length).fill(null) 

        for (let i = 0; i< uploadData.imgUrl.length; i++){
            const uploadForm = form
            uploadForm.append("imgUrl", uploadData.imgUrl[i])

            fetch(`http://localhost:3000/createdev`,{
                method: 'POST',       
                body: (uploadForm)
                })
            .then(r => r.json())
            .then(newImage => {
                if(newImage.imgUrl){
                setTestData({...testData, Test4: "Passed, image was uploaded"})
                console.log("Passed, image was uploaded" , newImage)
                } else {
                    setTestData({...testData, Test4: "Failed, image wasn't uploaded"})
                    console.log("Passed, image wasn't uploaded" , newImage)
                }
            })
        }   
    }

    return (
        <div className="imagePage">
            <h3>Hello This page will can show you the Unit tests I done, Check the console!</h3>

            <button onClick={getPublicImages}>Check PublicImages Get request</button> 
            {testData.Test1 !== null ? <h3>{testData.Test1}</h3> : null}
            <br/>
            <button onClick={checkLogin} >Check Login Post request</button>
            {testData.Test2 !== null ? <h3>{testData.Test2}</h3> : null}
            <br/>
            <form onSubmit={checkRegister}>
                <label>UserName</label>
                <input type="text" name="username" placeholder="Username"
                value={formData.username}
                onChange={handleFormChange}
                />
                <button type="submit">Check Register Post request</button>
            </form>
            {testData.Test3 !== null ? <h3>{testData.Test3}</h3> : null}

            <form onSubmit={checkUpload}>     
                <input type="file" name="imgUrl" multiple
                    onChange={handleFormChangeForUpload}
                />  
                <button type="submit">Check image uploads </button>
            </form>
            {testData.Test4 !== null ? <h3>{testData.Test4}</h3> : null}


        </div>
    )

}

export default UnitTests;