const Header = () => {
    return (
        <header>
            <nav>
                <h1>Logo</h1>
                <div className="nav-links">
                    <a href="/">Home</a>
                    <a href="#members">Community</a>
                </div>
                <div className="authentication-buttons">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </nav>
            <h1>Find Your Perfect Match on the Field!</h1>
            <p>
                Tired of playing solo? We get it. <br /> Finding people to play sports
                with can be a challenge. <br /> That's where we come in!
            </p>
            <form>
                <input type="text" placeholder="Search Likeminded people" />
                <CiSearch />
            </form>
        </header>
    )
}

export default Header;