import { Link } from "react-router-dom";
import './assets/css/Navbar.css'

export default function Navbar() {
    return (
        <div className="navbar-div">
            <div className="banner-div">
                <h1 className="c-name glow">Chalon Hutson</h1>
                <h2 className="title glow-blue">Software Developer</h2>
            </div>
            <div className="nav-btn-container">
                <Link className="link-css home-link" to="/"><button className="card home-btn">Home</button></Link>
                <Link className="link-css" to="/code"><button className="card code-btn">Code</button></Link>
                <Link className="link-css" to="/3d-art"><button className="card d-art-btn">3d Art</button></Link>
                <Link className="link-css" to="/game-development"><button className="card game-dev-btn">Game Development</button></Link>
                {/* <Link className="link-css" to="/contact"><button className="card">Contact</button></Link> */}
            </div>
        </div>
    )
}
