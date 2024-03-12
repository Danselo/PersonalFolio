import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faJava, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
    const experienceLevels = {
        react: 100, // 100%
        nodeJs: 70, 
        css: 100, // 100%
        javascript: 80, 
        html: 100, // 100%
    };
    return (
        <>
            <div className="container-skills" id="skills">
                <h1 className="container-skills-title">Tech Stack </h1>
                <div title="React" style={{ width: `${experienceLevels.react}%` }} className="experience-bar experience-bar-react">
                    <FontAwesomeIcon icon={faReact} size="1x" />
                    <span className="">React</span>
                </div>
                <div title="Node.js" style={{ width: `${experienceLevels.nodeJs}%` }} className="experience-bar experience-bar-nodejs">
                    <FontAwesomeIcon icon={faNodeJs} size="1x" />
                    <span className="">Node.js</span>
                </div>
                <div title="CSS3" style={{ width: `${experienceLevels.css}%` }} className="experience-bar experience-bar-css">
                    <FontAwesomeIcon icon={faCss3} size="1x" />
                    <span className="">CSS3</span>
                </div>
                <div title="JavaScript" style={{ width: `${experienceLevels.javascript}%` }} className="experience-bar experience-bar-javascript">
                    <FontAwesomeIcon icon={faJs} size="1x" />
                    <span className="">JavaScript</span>
                </div>
                <div title="HTML5" style={{ width: `${experienceLevels.html}%` }} className="experience-bar experience-bar-html">
                    <FontAwesomeIcon icon={faHtml5} size="1x" />
                    <span className="">HTML5</span>
                </div>
            </div>

        </>
    )
}
export default Skills