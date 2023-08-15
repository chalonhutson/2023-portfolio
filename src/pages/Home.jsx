import "../assets/css/Home.css"

import LinkedInIcon from "../assets/images/logos/LI-Logo.png"
import GithubIcon from "../assets/images/logos/GitHub_Logo_White.png"

import PythonIcon from "../assets/images/logos/python-logo.png"
import FlaskIcon from "../assets/images/logos/flask-logo.png"
import PandasIcon from "../assets/images/logos/Pandas_logo.png"
import ReactIcon from "../assets/images/logos/react-logo.png"

export default function Home() {
    return (
        <div className="componentContainer">
            <div className="mainContainer">
                <h1>About Me</h1>
                <p>
                    My name is Chalon Hutson, and I am a software engineer based in Orem, Utah.
                    In 2021, I switched careers and went to Devmountain, a coding bootcamp, to learn
                    Python. Since then, I have worked at Devmountain, as a Tech Lead, helping students
                    through the Python and Data Analytics program. Please check out some of my work in the
                    code section of this site. Please reach out if you are interested in nerding out about
                    code as well.
                </p>
                <p>A couple of my hobbies include game development in Unreal Engine and making 3d art in Blender. Feel free to check out my work in those too!</p>
                <div className="contactContainer">
                    <h4 className="homeContainerHeader">Feel free to reach out to me </h4>
                    <span className="contactInfoContainer">
                        <a href="https://docs.google.com/document/d/1EdWBXa2YsgQGkHIADAM8ACaTSRm4SnSQ8CJjy4HqbPU/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                            <button className="project-button m-3 w-100">Resume</button>
                        </a>
                    </span>
                    <span className="contactInfoContainer">
                        <p>(623) 810-1177</p>
                        <p>chalonhutson@gmail.com</p>
                    </span>
                    <span className="contactInfoContainer">
                        <a href="https://www.linkedin.com/in/chalonhutson/" target="_blank">
                            <img className="contactLogo" src={LinkedInIcon} alt="Linked In Logo" />
                        </a>
                        <a href="https://github.com/chalonhutson" target="_blank">
                            <img className="contactLogo" src={GithubIcon} alt="Github Logo" />
                        </a>
                    </span>
                </div>
                <div className="skillsContainer">
                    <h4 className="homeContainerHeader">Ask me about my knowledge about Python, Flask, Pandas, Javascript and React!</h4>
                    <div className="skillImages">
                        <img className="skillIcon" src={PythonIcon} alt="Python Logo" />
                        <img className="skillIcon" src={FlaskIcon} alt="Flask Logo" />
                        <img className="skillIcon" src={PandasIcon} alt="Pandas Logo" />
                        <img className="skillIcon" src={ReactIcon} alt="React Logo" />
                    </div>

                </div>
            </div>
        </div>
    )
}
