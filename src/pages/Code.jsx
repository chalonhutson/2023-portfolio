import "../assets/css/Code.css"

export default function Code() {

    const projectArr = [
        {
            title: "My Volunteers",
            tech: "React front-end, Flask/Flask-SQLAlchemy back-end, Postgresql database",
            buttons: [
                {
                    text: "Visit (email for login criteria)",
                    link: "https://my-volunteers.com/"
                },
                {
                    text: "Github",
                    link: "https://github.com/chalonhutson/my-volunteers"
                }
            ]
        },
        {
            title: "Whip It (concept)",
            tech: "React front-end, Flask/Flask-SQLAlchemy back-end, Postgresql database",
            buttons: [
                {
                    text: "Visit Whip It",
                    link: "https://www.whip-it.us"
                },
                {
                    text: "Github",
                    link: "https://github.com/chalonhutson/whip-it"
                }
            ]
        },
        {
            title: "Heather's K9 Community",
            tech: "React",
            buttons: [
                {
                    text: "Visit Heather's K9 Community",
                    link: "https://heathersk9community.com/"
                }
            ]
        },
        {
            title: "Easy CRM",
            tech: "Flask/Flask-SQLAlchemy, Postgresql",
            buttons: [
                {
                    text: "Visit Easy CRM",
                    link: "https://easy-crm.us"
                },
                {
                    text: "Github",
                    link: "https://github.com/chalonhutson/easy_crm"
                },
                {
                    text: "Watch Demo",
                    link: "https://youtu.be/b7jIAu68G-A"
                }
            ]
        }
    ]

    const renderProject = (project) => (
        <div key={project.title} className="project">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-tech">Tech: {project.tech}</p>
            <div className="project-buttons">
                {project.buttons.map((button, index) => (
                    <a key={index} href={button.link} target="_blank" rel="noopener noreferrer">
                        <button className="project-button">{button.text}</button>
                    </a>
                ))}
            </div>
        </div>
    );

    return (
        <div className="componentContainer">
            <div className="mainContainer">
                <h1>Code</h1>
                {projectArr.map(renderProject)}
            </div>
        </div>
    )
}