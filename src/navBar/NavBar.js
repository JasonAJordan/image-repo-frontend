import '../css/NavBar.css';
import { Link } from 'react-router-dom'; 

function NavBar({user, setUser}) {

    function handleLogOut(){
        localStorage.removeItem("token")
        setUser(null)
    }

    if (user === null) {
        return (
            <div className="navBar">
                <Link to={'/'}><span className="Nav-Bar-Options">Home</span></Link>
                <Link to={'/brosweUploads'}><span className="Nav-Bar-Options"> See Images</span></Link>
                <Link to={'/login'}><span className="Nav-Bar-Options">Login</span></Link>
                <Link to={'/signup'}><span className="Nav-Bar-Options">SignUp</span></Link>
            </div>
        )
    } else {
        return (
            <div className="navBar">
                <Link to={'/'}><span className="Nav-Bar-Options">Home</span></Link>
                <Link to={'/brosweUploads'}><span className="Nav-Bar-Options">See Public Images</span></Link>
                <Link to={`/users/${user.id}`}><span className="Nav-Bar-Options">Your Page</span></Link>
                <Link to={'/'}><button onClick={handleLogOut}><span >LogOut</span></button></Link>

            </div>
        );
    }
}

export default NavBar;