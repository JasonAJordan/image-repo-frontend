import '../css/App.css';

function Home({user}) {


    if (user === null) {
        return (
            <div>
                <h3>Work in Progress</h3>
            </div>
        )
    } else {
        return (
            <div >
                <h3>Welcome Back {user.username}</h3>
            </div>
        );
    }
}

export default Home;