import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Header = () => {

    return (
        <>
            <div className="container-header">
                    <div className="container-header-card">
                        <figure>
                            <img src="src/assets/perfil.jpg" alt="profile.jpg" className="container-header_image" />
                        </figure>
                        <div className="container-header_social-media">
                            <a href="https://github.com/Danselo"><FontAwesomeIcon icon={faGithub} size="1x" className="container-header_social-media-github" /></a>
                            <a href="https://i.ibb.co/F8jxNtv/perfil.jpg"><FontAwesomeIcon icon={faLinkedinIn} size="1x"className="container-header_social-media-linkedin" /></a>
                        </div>
             
                    </div>
                    <div className="container-header-description-content">
                        <h2>Front-End React Developer 👋🏻</h2>
                        <p>
                            Hi, I am Danilo Lora. A passionate Front-end React Developer Based in Medellin,Colombia📍 
                        </p>
                    </div>
 
                </div>
            
        </>
    )
}
export default Header