import "./AboutMePage.css";
import { Link } from "react-router-dom";

function AboutMePage() {
    return(
        <div>
            <div className="mainContainer">
                <div className="navigationBar">
                    <Link className="navigationBarText" to="/">Daniel Jong</Link>
                    <div className="navigationBarRightItems">
                        <Link className="navigationBarText" to="/">Work</Link>
                        <Link className="navigationBarAbout underlined" to="/about">About</Link>
                        <a className="navigationBarText resume"
                           href="https://docs.google.com/document/d/12nxaGq7QP7QM-EPaiysvYYUrQqJ_O-GYS3DdN2PZnwk/edit?usp=sharing"
                           target="_blank" rel="noopener noreferrer">Resume</a>
                        <a className="navigationBarText" href="mailto:danielj1415@gmail.com">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMePage;