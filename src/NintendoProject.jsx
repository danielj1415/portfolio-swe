import iconGithub from "./assets/images/iconGithub.svg";
import iconLinkedIn from "./assets/images/iconLinkedIn.svg";
import spotifyProjectImage from "./assets/images/imageSpotifyProjectCover2.png";
import nintendoProjectImage from "./assets/images/imageNintendoProjectCover.png";
import imageComponentHomeSearch from "./assets/images/imageComponentHomeSearch.png";
import imageComponentLibraryPlaylist from "./assets/images/imageComponentLibraryPlaylist.png";
import imageComponentMusicMenu from "./assets/images/imageComponentMusicMenu.png";
import imageComponentMainPage from "./assets/images/imageComponentMainPage.png";
import imageComponentInteractionDiagram from "./assets/images/imageComponentInteractionDiagram.png";
import videoSpotifyProjectDemo from "./assets/images/videoSpotifyProjectDemo.mp4";

import { Link } from "react-router-dom";
import "./NintendoProject.css";

function PlantProject() {
    return(
        <div>
            <div className = "mainContainer">
                <div className = "navigationBar">
                    <Link className = "navigationBarText" to ="/">Daniel Jong</Link>
                    <div className = "navigationBarRightItems">
                        <Link className = "navigationBarText underlined" to ="/">Work</Link>
                        <Link className = "navigationBarAbout" to="/about">About</Link>
                        <a className="navigationBarText resume" href="https://drive.google.com/file/d/14IRxglcZqY8M6Pa2-1-_tVNFMtTbrYKR/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                        <a className ="navigationBarText" href = "mailto:danielj1415@gmail.com">Contact</a>
                    </div>
                </div>
                <div className="projectContentContainer">
                    <div className="projectContentContainerTitleInfo">
                        <div className="projectContentTitleHeading">
                            <p className="bold px44 marginBottom4px">Nintendo Switch Home Screen Redesign</p>
                            <p className="px16 test">A redesign of the Nintendo Switch home screen, incorporating
                                customizable wallpapers and improved navigation to enhance the user experience.</p>
                        </div>
                        <div>
                            <div className="projectContentTimeline">
                                <p className="bold marginBottom4px">Timeline</p>
                                <p className="px16">Design: August 2022</p>
                                <p className="px16">Development: September 2024</p>
                            </div>
                            <div className="projectContentTools">
                                <p className="bold marginBottom4px">Design & Development Tools</p>
                                <p className="px16">ReactJS</p>
                                <p className="px16">CSS</p>
                                <p className="px16">Figma</p>
                            </div>
                        </div>
                    </div>
                    <img className="imagePlantProject" src={nintendoProjectImage}/>
                    <div className="horizontalCenter marginTop72px">
                        <p className="bold px40 marginBottom8px">Overview</p>
                        <div className="dividerOverview"></div>
                    </div>
                    <p className="semibold px30">Project Background</p>
                    <p className="bigParagraph">This project began as a personal challenge to improve my UX design
                        skills and learn Figma. As a frequent Nintendo Switch user, I’ve developed a deep appreciation
                        for the device, but I always felt its home screen lacked customization, particularly the ability
                        to set personalized wallpapers. While the light and dark theme options are available, they don’t
                        allow for a truly personalized experience. To address this, I designed a redesigned home screen
                        that incorporates customizable wallpapers, rethinking the user experience and accessibility. Two
                        years later, I brought the design to life by developing the concept into a functional
                        application.</p>

                    <div className="horizontalCenter marginTop72px">
                        <p className="bold px40 marginBottom8px">Design Process</p>
                        <div className="dividerDevelopment"></div>
                    </div>

                    <p className="semibold px30">Research and Recreation</p>
                    <p className="mediumParagraph">I started by taking screenshots of the Nintendo Switch’s home screen
                        to
                        understand its existing design and layout. Using these references, I recreated the interface
                        from scratch in Figma, which gave me a better sense of the components' proportions and
                        spacing.</p>
                    <p className="semibold px30 marginTop16px">Accessibility and Inspiration</p>
                    <p className="mediumParagraph">To ensure accessibility and usability, I researched other user
                        interfaces that included wallpapers, both in the Figma community and online. This helped me
                        design a layout where individual app icons and text remained visible, even with a background
                        image.</p>
                    <p className="semibold px30 marginTop16px">Redesign the Home Screen</p>
                    <p className="mediumParagraph">Taking inspiration from various UI designs, I created a new home
                        screen layout optimized for 1512px and 1920px resolutions. The final step in the design phase
                        was prototyping the user flow and interactions in Figma.</p>
                    <img className="imageNintendoProject marginTop20px" src={nintendoProjectImage}/>
                    <div className="horizontalCenter marginTop72px">
                        <p className="bold px40 marginBottom8px">Conclusion</p>
                        <div className="dividerConclusion"></div>
                    </div>
                    <p className="bigParagraph">This project was a fulfilling endeavor, combining my passion for the
                        Nintendo Switch with a challenge to design and develop a better user experience. It strengthened
                        my front-end development skills, especially in crafting intuitive navigation and interactions.
                        In the future, I plan to expand the project by adding functionality for users to purchase
                        wallpapers from the Nintendo eShop. I’m excited to design and develop this feature, imagining
                        how it could further enhance the user experience.</p>
                    <p className="semibold px30 marginTop48px">Future Plans</p>
                    <p className="bigParagraph">I plan to further enhance and expand this project by adding user account
                        functionality to allow users to save playlists and customize their experience. Incorporating
                        search and recommendation features to make the website more feature-rich. Integration with
                        Spotify API: Potentially integrating the Spotify API to access real user data, playlists, and
                        music content, if feasible and permitted. </p>
                    <p className="semibold px30 marginTop48px marginBottom8px ">Links:</p>
                    <a href="https://github.com/danielj1415/spotify-clone">Github</a>
                </div>

                <div className="footerSection">
                <div className = "footerLargeContainer">
                        <div className = "footerTextContainer">
                            <p className = "footerText">Turning ideas into designs and designs into code.</p>
                        </div>
                        <p className = "footerEmail">email: danielj1415@gmail.com</p>
                        <p className = "footerPhone">phone: (626) 518-2422</p>
                        <div className = "iconContainer">
                            <a href="https://www.linkedin.com/in/daniel-jong-002891209/" target="_blank">
                                <img src={iconLinkedIn} class="imageIcon" alt="LinkedIn Profile"/>
                            </a>
                            <a href="https://github.com/danielj1415" target="_blank">
                                <img src={iconGithub} class="imageIcon" alt="GitHub Profile"/>
                            </a>
                        </div>
                    </div>
                    <p className = "footerText2">Made with 🧋☕️✨ </p>
                </div>
            </div>
        </div>
    )
}

export default PlantProject