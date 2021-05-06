import { useState }  from "react";
import { useHistory } from "react-router-dom";

function SignUp ({setUser}){
    
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        name: "",
    })

    const [showPassword, setShowPassWord] = useState("password")
    const history = useHistory();

    function handleFormChange(event){
        setFormData({...formData,
            [event.target.name]: event.target.value
        })

    }

    function handleSubmit(event){
        event.preventDefault()

        fetch(`http://localhost:3000/register`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            })
        .then(r => r.json())
        .then(data => {
            setUser(data.user)
            localStorage.setItem("token", data.token)
            history.push("/");
        })
    }

    function handleShowPassword(){
        if (showPassword === "password"){
            setShowPassWord("text")
        } else {
            setShowPassWord("password")
        } 
    }

    return (
        <div className="SignUp-Container">
            <br/><br/><br/><br/>
            <h2>SignUp!</h2>
            <form onSubmit={handleSubmit}>
                <label>UserName</label>
                <input type="text" name="username" placeholder="Username"
                value={formData.username}
                onChange={handleFormChange}
                />
                <br/>
                <label>Password</label>
                <input type={showPassword} name="password" placeholder="Password"
                value={formData.password}
                onChange={handleFormChange}
                />
                <br/>
                                
                <input type="checkbox" onClick={handleShowPassword}/> <label>Show Password  </label>
                <br/>

                <label>Your Name</label>
                <input type="text" name="name" placeholder="Name"
                value={formData.name}
                onChange={handleFormChange}
                />




                <button type="submit">Make an Account </button>
            </form>
        </div>
        )

}


export default SignUp 
