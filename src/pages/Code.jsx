import { Link } from "react-router-dom";

export default function Code() {
    return (
        <div>
            <h1>Code</h1>
            <div>
                <h2>Whip It (concept)</h2>
                <p>Tech: React front-end, Flask/Flask-SQLAlchemy back-end, Postgresql database</p>
                <Link to="https://www.whip-it.us" target="_blank" rel="noopener noreferrer">
                    <button>Visit Whip It</button>
                </Link>
            </div>
            <div>
                <h2>Heather's K9 Community</h2>
                <p>Tech: React</p>
                <Link to="https://heathersk9community.com/" target="_blank" rel="noopener noreferrer">
                    <button>Visit Heather's K9 Community</button>
                </Link>
            </div>
            <div>
                <h2>Easy CRM</h2>
                <p>Tech: Flask/Flask-SQLAlchemy, Postgresql</p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/b7jIAu68G-A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <Link to="https://easy-crm.us" target="_blank" rel="noopener noreferrer">
                    <button>Visit Easy CRM</button>
                </Link>
            </div>
        </div>
    )
}