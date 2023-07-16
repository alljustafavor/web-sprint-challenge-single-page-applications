import "../index.css";

const Navbar = props => {
    return (
        <nav>
            <h1>Bloom Eats</h1>
            <div className="nav-links-container">
                <a href="/">Home</a>
                <a href="/help">Help</a>
            </div>
        </nav>
    );
};

export default Navbar;