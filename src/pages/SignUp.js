import { useState }  from "react";
import { Link, useHistory } from "react-router-dom";

function SignUp ({setUser}){
    
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const [passwordCheck, setpasswordCheck] = useState("")

    const [accountMade, setAccoutMade] = useState(false)
    const [showPassword, setShowPassWord] = useState("password")
    const history = useHistory();

    function handleFormChange(event){
        // console.log()
        setFormData({...formData,
            [event.target.name]: event.target.value
        })

    }

    function handleSubmit(event){
        event.preventDefault()
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
            setUser(data.user)
            localStorage.setItem("token", data.token)
            history.push("/");
        })
    }

    function handleLogin() {
        //e.preventDefault();
        const username = formData.username
        const password = formData.password
        //console.log("adssadf")

        fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        })
          .then((r) => r.json())
          .then((data) => {
            // data is an object with a user and token: { user, token }
            // setCurrentUser is a callback function from the App component
            setUser(data.user);
            // use localStorage to save the token
            localStorage.setItem("token", data.token)
            //redirect 
            history.push("/");
        });
    }

    function handleShowPassword(){
        if (showPassword === "password"){
            setShowPassWord("text")
        } else {
            setShowPassWord("password")
        } 
    }

    if(accountMade){
        return (
            <div>
                <Link to={"/login"}>
                 Account Made Succesful, Please Login By Clicking Here
                 </Link>
            </div>
        )
    } else {
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
                
                <input type="checkbox" onClick={handleShowPassword}/> <label>Show Password  </label>
                <br/>

                <button type="submit">Make an Account </button>
            </form>
        </div>
        )
    }
}


export default SignUp 
