import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <h1>Chalon Hutson</h1>
            <h2>Software Developer</h2>
            <div>
                <Link to="/"><button className="navBtn">Home</button></Link>
                <Link to="/code"><button className="navBtn">Code</button></Link>
                <Link to="/3d-art"><button className="navBtn">3d Art</button></Link>
                <Link to="/game-development"><button className="navBtn">Game Development</button></Link>
                <Link to="/contact"><button className="navBtn">Contact</button></Link>
            </div>
        </>
    )
}
