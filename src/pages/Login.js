import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";


function Login ({ setUser}){

    const [users, setUsers] = useState(null)
    const [isLogin, setIsLogin] = useState(false)
    const [formData, setFormData] = useState({ 
        username: "",
        password: "",
    })

    
    const [showPassword, setShowPassWord] = useState("password")

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function handleFormChange(event){
        //console.log(formData)
        setFormData({...formData,
            [event.target.name]: event.target.value
        })

    }

    useEffect(() => { 
        fetch(`http://localhost:3000/users/`)
        .then(resp => resp.json())
        .then(data => {
        setUsers(data)
        
        })
    }, [])

    function handleLogin(event){
        event.preventDefault()
        //console.log(formData)
        let success = false

        for(let i = 0; i < users.length; i++){
            let cond1 = (users[i].username === formData.username)
            let cond2 = (users[i].password === formData.password)
            //console.log(users[i].username)
            if (cond1 && cond2){
                setUser(users[i])
                success = true
                setIsLogin(true)
            }
        }
        if (success){
            loginSucess()
        } else {
            loginFail()
        }
    }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     fetch("http://localhost:3000/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ username, password }),
    //     })
    //       .then((r) => r.json())
    //       .then((data) => {
    //           if (data.failure) {
    //               alert("Incorrect Username or Password")
    //           } else {
    //         // data is an object with a user and token: { user, token }
    //         // setCurrentUser is a callback function from the App component
    //         setUser(data.user);
    //         // use localStorage to save the token
    //         localStorage.setItem("token", data.token)
    //         //redirect 
    //         history.push("/");
    //         }
    //     });
    // }


    function loginSucess(){
        alert("Successful Login")
    }

    function loginFail() {
        alert("Wrong Username or password");
    }

    function handleShowPassword(){
        if (showPassword === "password"){
            setShowPassWord("text")
        } else {
            setShowPassWord("password")
        } 
    }

    function handleWelcomeBack(){
        console.log("asdf")
    }
    

    if (!users) {
        return <h1> Loading </h1>
    } else 
    if (!isLogin){
        return (
            <div >
                <br/><br/>
                <h1> Login to your Account</h1>
                <form onSubmit={handleLogin}>

                    <label >Username</label>
                    <input type="text" placeholder="Enter Username" name="username" value={formData.username}
                     onChange={handleFormChange}/>  
                    <br/>
                    <label >Password</label>
                    <input type={showPassword} placeholder="Enter Password" name="password" value={formData.password}
                     onChange={handleFormChange} id="myPasswordInput"/>  
                     <input type="checkbox" onClick={handleShowPassword}/> <label>Show Password</label>
                    <br/>
                    <button type="submit">Login</button>
                </form>

            </div>
     
        )}  else {
                return (
                    <button onClick={handleWelcomeBack}><Link to={"/"}> Welcome back! </Link></button> 
                )
        }

}

export default Login