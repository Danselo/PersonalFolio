import React from "react";
import CourseInfo from "../CourseInfo";
const Courses = () => {
    const courses = [
        {
            title: "Tecnológo en análisis y desarrollo de sistemas de información",
            icon: "https://i.ibb.co/Chd6Tyr/sena.png",
        },
        {
            title: "Curso Básico de JavaScript",
            icon: "https://i.ibb.co/KGvJmqz/curso-basico-js-removebg-preview.png",
        },
        {
            title: "Curso de Asincronismo con JavaScript",
            icon: "https://i.ibb.co/FD0wMWz/curso-asincronismo-js-removebg-preview.png",
        },
        {
            title: "Curso de ECMAScript: Historia y Versiones de JavaScript",
            icon: "https://i.ibb.co/2vyqWLC/curso-ecmascript-removebg-preview.png",
        },
        {
            title: "Curso de Frontend Developer",
            icon: "https://i.ibb.co/6nJNZkR/curso-frontend-removebg-preview.png",
        },
        {
            title: "Curso de Introducción a la Terminal y Línea de Comandos",
            icon: "https://i.ibb.co/M8snKx2/curso-introducci-n-linea-comandos-removebg-preview.png",
        },
        {
            title: "Curso de JavaScript Engine (V8) y el Navegador",
            icon: "https://i.ibb.co/xhTqnYf/curso-javascript-engine-removebg-preview.png",
        },
        {
            title: "Curso de React.js con Vite.js y TailwindCSS",
            icon: "https://i.ibb.co/mNnVnmx/curso-react-vite-tailwin-removebg-preview.png",
        },
        {
            title: "Curso de React.js (Platzi)",
            icon: "https://i.ibb.co/RNNY5qD/curso-react-removebg-preview.png",
        },
        {
            title: "Curso de Responsive Design: Maquetación Mobile First",
            icon: "https://i.ibb.co/X8cxXM6/curso-responsive-design-removebg-preview.png",
        },
        {
            title: "Prueba Técnica: E-commerce Profesional con React.js",
            icon: "https://i.ibb.co/5sHg441/prueba-tecnica-ecommerce-react-removebg-preview.png",
        },
        {
            title: "Curso Práctico de JavaScript",
            icon: "https://i.ibb.co/b2q4wD2/curso-practico-javascript.png",
        },

    ];
    return (
        <>
            <div className="container-courses" id="certifications">
                    <h1 className="container-courses-title">Certifications</h1>
                    <div className="container-courses-cards">
                        {courses.map((project, index) =>(
                            <CourseInfo
                            key={index}
                            title={project.title}
                            icon={project.icon}
                        />
                        ))}
                    </div>
            </div>

        </>
    )
}
export default Courses