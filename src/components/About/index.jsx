import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faHtml5, faJava, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

const About = () => {
    return (
        <>
            <div className="container-about" id="about-me">
                <div className="container-about-image">
                    <figure>
                        <img src="https://i.ibb.co/CHgJkBN/computer.jpg" alt="" />
                    </figure>
                </div>
                <div className="container-about-info">
                    <h4 className="container-about-info-title">About me</h4>
                    <h3 className="container-about-info-subtitle">A dedicated Front-End Developer based in Medellin, Colombia📍</h3>
                    <p className="container-about-info-paragraph">
                    Hello! I'm a motivated Junior Front-End Developer passionate about creating captivating and user-friendly web applications. Currently based in Medellin, Colombia, I bring a solid foundation in React, along with proficiency in HTML, CSS, and JavaScript.
                    <br />
                    <br />

                    As a detail-oriented individual, I am committed to refining my skills and contributing to projects that not only challenge me but also make a positive impact. My journey into the world of web development has been characterized by a strong desire to learn, adapt, and grow.
                    </p>
                </div>
            </div>

        </>
    )
}
export default About