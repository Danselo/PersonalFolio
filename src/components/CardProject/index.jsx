import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const CardProject = ({title, img, description, url,styleContainer,urlCode}) => {
    return (
        <>
            <div className={styleContainer}>
                <figure className="container-card-image">
                <img src={img} alt="" />
                </figure>
                <div className="container-card-description">
                    <h3 className="container-card-description-title">
                        {title}
                    </h3>
                    <p className="container-card-description-description">
                        {description}
                    </p>
                    <div className="buttons-card-projects">
                        <a href={url} target="_blank" rel="noopener noreferrer" className="container-card-description-url">View Page</a>
                        <a href={urlCode} className="container-card-description-url container-card-description-url-code">
                            Code
                            <FontAwesomeIcon icon={faGithub} size="1x"className="buttons-card-projects-code" />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}
export default CardProject