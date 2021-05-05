import './css/App.css';

import React, { useState, useEffect } from "react"; 
import {Route, Switch} from 'react-router-dom'; 

import NavBar from "./navBar/NavBar"
import Home from "./pages/Home"
import UserPage from "./pages/UserPage"
import PublicImages from "./pages/PublicImages"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import UnitTests from "./pages/UnitTests"


function App() {
  const [user, setUser] = useState(null)

  useEffect(() => { 
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, 
        }
        })
      .then((r) => r.json())
      .then((user) => {setUser(user)
      })
    }
  }, [])

  if(user === null) {
    return (
      <div>
      <NavBar user={user} setUser={setUser}/>

      <Switch>
        <Route path="/brosweUploads">
          <PublicImages/>
        </Route>

        <Route path="/login">
          <Login setUser={setUser}/>
        </Route>

        <Route path="/signup">
          <SignUp setUser={setUser}/>
        </Route>

        <Route path="/UnitTests">
          <UnitTests />
        </Route>

        <Route path="/">
          <Home user={user}/>
        </Route>
      </Switch>


      </div>
    ) 
  }

  return (
  
    <div>

      <NavBar user={user} setUser={setUser}/>

      <Switch>
        <Route path="/users/:id">
          <UserPage user={user} setUser={setUser}/>
        </Route>

        <Route path="/brosweUploads">
          <PublicImages/>
        </Route>

        <Route path="/UnitTests">
          <UnitTests />
        </Route>

        <Route path="/">
          <Home user={user}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
