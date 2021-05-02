import './css/App.css';

import React, { useState, useEffect } from "react"; 
import {Route, Switch} from 'react-router-dom'; 

import NavBar from "./navBar/NavBar"
import Home from "./pages/Home"
import UserPage from "./pages/UserPage"


function App() {
  const [user, setUser] = useState(null)
  const [loaded, setLoaded] = useState(false)

  //Temporary AutoLogin 
  useEffect(() => {
    fetch(`http://localhost:3000/users/1`)
    .then(resp => resp.json())
    .then(data => {
      setUser(data)
      setLoaded(true)
    })
  }, [])


  if(user === null) {
    return (
      <div>
        <h2>Hi you are logged out! This part is a work in progress </h2>
      </div>
    ) 
  }

  return (

    <div>

      <NavBar user={user} setUser={setUser}/>

      <Switch>
        <Route path="/users/:id">
          <UserPage user={user}/>
        </Route>

        <Route path="/">
          <Home user={user}/>
        </Route>

        <Route path="/">
          <Home user={user}/>
        </Route>
      </Switch>

    </div>
  );
}

export default App;
