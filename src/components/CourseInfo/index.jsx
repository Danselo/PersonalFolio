import React from "react";
const CourseInfo = ({title, icon }) => {
    return (
        <>
            <div className="container-course-info">
                <figure className="container-course-image">
                <img src={icon} alt={title} />
                </figure>
                <h3 className="container-course-title">{title}</h3>
            </div>

        </>
    )
}
export default CourseInfo