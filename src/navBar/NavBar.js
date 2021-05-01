import '../css/App.css';
import React, { useState } from "react"; 
import {useParams, Link, Redirect} from 'react-router-dom'; 

function NavBar({user, setUser}) {

    function handleLogOut(){
        //localStorage.removeItem("token")
        setUser(null)
    }

    if (user === null) {
        return (
            <div>
                <Link to={'/'}><span>Home</span></Link>
                <Link to={'/brosweUploads'}><span>See Images</span></Link>
                <Link to={'/login'}><span>Login</span></Link>
                <Link to={'/signup'}><span>SignUp</span></Link>
            </div>
        )
    } else {
        return (
            <div >
                <Link to={'/'}><span>Home</span></Link>
                <Link to={'/brosweUploads'}><span>See Public Images</span></Link>
                <Link to={`/users/${user.id}`}><span>Your Page</span></Link>
                <Link to={'/'}><button onClick={handleLogOut}><span>LogOut</span></button></Link>

            </div>
        );
    }
}

export default NavBar;