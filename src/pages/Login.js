import React, { useState } from "react";
import { useHistory } from "react-router-dom";


function Login ({ setUser}){

    const [showPassword, setShowPassWord] = useState("password")

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
          .then((r) => r.json())
          .then((data) => {
              if (data.error) {
                  alert("Incorrect Username or Password")
              } else {
            // data is an object with a user and token: { user, token }
            // setCurrentUser is a callback function from the App component
            setUser(data.user);
            // use localStorage to save the token
            localStorage.setItem("token", data.token)
            //redirect 
            history.push("/");
            }
        });
    }

    function handleShowPassword(){
        if (showPassword === "password"){
            setShowPassWord("text")
        } else {
            setShowPassWord("password")
        } 
    }


        return (
            <div >
                <br/><br/>
                <h1> Login to your Account</h1>
                <form onSubmit={handleSubmit}>

                    <label >Username</label>
                    <input type="text" placeholder="Enter Username" name="username" value={username}
                     onChange={(e) => setUsername(e.target.value)}/>  
                    <br/>
                    <label >Password</label>
                    <input type={showPassword} placeholder="Enter Password" name="password" value={password}
                     onChange={(e) => setPassword(e.target.value)} id="myPasswordInput"/>  
                     <input type="checkbox" onClick={handleShowPassword}/> <label>Show Password</label>
                    <br/>
                    <button type="submit">Login</button>
                </form>

            </div>
     
        )

}

export default Login