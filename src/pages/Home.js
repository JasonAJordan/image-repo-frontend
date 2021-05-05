import '../css/App.css';

function Home({user}) {

        return (
            <div>
                <h3>Welcome to Shophotos</h3>
                {user === null ? null :<h3>Welcome Back {user.name}</h3>} 
            </div>
        )

}

export default Home;