import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <h1>Chalon Hutson</h1>
            <h2>Software Developer</h2>
            <div>
                <Link to="/"><button>Home</button></Link>
                <Link to="/code"><button>Code</button></Link>
                <Link to="/3d-art"><button>3d Art</button></Link>
                <Link to="/game-development"><button>Game Development</button></Link>
                <Link to="/contact"><button>Contact</button></Link>
            </div>
        </>
    )
}
