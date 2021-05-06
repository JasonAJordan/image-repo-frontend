import '../css/App.css';

function Home({user}) {

        return (
            <div className="home">
                <h1>Welcome to Shophotos</h1>
                {user === null ? null :<h2>Welcome Back {user.name}</h2>} 
            </div>
        )

}

export default Home;