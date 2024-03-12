import React from "react";

const Nav = () => {

    return (
        <>
            <nav className="container-nav">
                <figure>
                    <img src="https://i.ibb.co/QMgkgYZ/logoD.png" alt="" className="logo-Danilo"/>
                </figure>
                <ul className="container-nav-list">
                    <li id="About_me"> <a href="#about-me">About Me</a></li>
                    <li id="Stacks"><a href="#skills">Stacks</a></li>
                    <li id="Projects"><a href="#projects">Projects</a></li>
                    <li id="Certifications"><a href="#certifications">Certifications</a></li>
                </ul>
            </nav>
            
        </>
    )
}
export default Nav