import { Link } from 'react-router-dom'
import imageDaniel from "./assets/images/danieljong.png"
import iconGithub from "./assets/images/iconGithub.svg"
import iconLinkedIn from "./assets/images/iconLinkedIn.svg"
import imagePlantProjectCover from "./assets/images/imagePlantProjectCover.png"
import imageSpotifyProjectCover from "./assets/images/imageSpotifyProjectCover2.png";
import imageNintendoProjectCover from "./assets/images/imageNintendoProjectCover.png";
import './HomePage.css'

function HomePage() {
    return (
        <div>
            <div className="mainContainer">

                {/*Navigation Bar*/}
                <div className="navigationBar">
                    <Link className="navigationBarText" to="/">Daniel Jong</Link>
                    <div className="navigationBarRightItems">
                        <Link className="navigationBarText underlined" to="/">Work</Link>
                        <Link className="navigationBarAbout" to="/about">About</Link>
                        <a className="navigationBarText resume"
                           href="https://drive.google.com/file/d/14IRxglcZqY8M6Pa2-1-_tVNFMtTbrYKR/view?usp=sharing"
                           target="_blank" rel="noopener noreferrer">Resume</a>
                        <a className="navigationBarText" href="mailto:danielj1415@gmail.com">Contact</a>
                    </div>
                </div>

                {/*Hero Section*/}
                <div className="heroSection">
                    <div>
                        <p className="heroSectionHeadingText">Hello, I'm Daniel!</p>
                        <div className="heroSectionSubheadingContainer">
                            <p className="heroSectionSubheadingText">Software engineer passionate about turning ideas
                                into
                                designs and designs into code.</p>
                        </div>
                    </div>
                    <img className="heroSectionImage" src={imageDaniel} alt=""/>
                </div>

                {/*Projects Section*/}
                <div className="projectsSection">
                    {/*Project: Plant Hydroponics App*/}
                    <div className="projectContainer">
                        <div className="projectText">
                            <Link to="/plant">
                                <p className="projectName">Plant Hydroponics App</p>
                            </Link>
                            <div className="projectTagContainer">
                                <div className="projectTagPlant">
                                    <p className="projectTagText">UI Design</p>
                                </div>
                                <div className="projectTagPlant">
                                    <p className="projectTagText">Mobile Development</p>
                                </div>
                            </div>
                            <div className="projectDescriptionContainer">
                                <p className="projectDescriptionText">Application that enables users to change the pH of
                                    water for their hydroponics system.</p>
                            </div>
                        </div>
                        <Link to="/plant">
                            <img src={imagePlantProjectCover} className="projectImagePlant"/>
                        </Link>
                    </div>

                    {/*Project: Nintendo Switch Home Screen Redesign*/}
                    <div className="projectContainer">
                        <div className="projectText">
                            <Link to="/plant">
                                <p className="projectName">Nintendo Switch Home Screen Redesign</p>
                            </Link>
                            <div className="projectTagContainer">
                                <div className="projectTagNintendo">
                                    <p className="projectTagText">Web Development</p>
                                </div>
                                <div className="projectTagNintendo">
                                    <p className="projectTagText">UI Design</p>
                                </div>
                            </div>
                            <div className="projectDescriptionContainer">
                                <p className="projectDescriptionText">Website that features a new home screen with functionality to change the wallpaper.  </p>
                            </div>
                        </div>
                        <Link to="/nintendo">
                            <img src={imageNintendoProjectCover} className="projectImageSpotify"/>
                        </Link>
                    </div>

                    {/*Project: Spotify Clone Website*/}
                    <div className="projectContainer">
                        <div className="projectText">
                            <Link to="/plant">
                                <p className="projectName">Spotify Clone Website</p>
                            </Link>
                            <div className="projectTagContainer">
                                <div className="projectTagSpotify">
                                    <p className="projectTagText">Web Development</p>
                                </div>
                            </div>
                            <div className="projectDescriptionContainer">
                                <p className="projectDescriptionText">Website that aims to replicate the functionality
                                    and interface of the Spotify Web Player. </p>
                            </div>
                        </div>
                        <Link to="/spotify">
                            <img src={imageSpotifyProjectCover} className="projectImageSpotify"/>
                        </Link>
                    </div>
                </div>

                {/*Footer Section*/}
                <div className="footerSection">
                    <div className="footerLargeContainer">
                        <div className="footerTextContainer">
                            <p className="footerText">Turning ideas into designs and designs into code.</p>
                        </div>
                        <p className="footerEmail">email: danielj1415@gmail.com</p>
                        <p className="footerPhone">phone: (626) 518-2422</p>
                        <div className="iconContainer">
                            <a href="https://www.linkedin.com/in/daniel-jong-swe-ux/" target="_blank">
                                <img src={iconLinkedIn} className="imageIcon" alt="LinkedIn Profile"/>
                            </a>
                            <a href="https://github.com/danielj1415" target="_blank">
                                <img src={iconGithub} className="imageIcon" alt="GitHub Profile"/>
                            </a>
                        </div>
                    </div>
                    <p className="footerText2">Made with 🧋☕️✨ </p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;