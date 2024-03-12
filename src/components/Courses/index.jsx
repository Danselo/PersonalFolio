import React from "react";
import CourseInfo from "../CourseInfo";
const Courses = () => {
    const courses = [
        {
            title: "Tecnológo en análisis y desarrollo de sistemas de información",
            icon: "src/assets/sena.png",
        },
        {
            title: "Curso Básico de JavaScript",
            icon: "src/assets/curso-basico-js-removebg-preview.png",
        },
        {
            title: "Curso de Asincronismo con JavaScript",
            icon: "src/assets/curso-asincronismo-js-removebg-preview.png",
        },
        {
            title: "Curso de ECMAScript: Historia y Versiones de JavaScript",
            icon: "src/assets/curso-ecmascript-removebg-preview.png",
        },
        {
            title: "Curso de Frontend Developer",
            icon: "src/assets/curso-frontend-removebg-preview.png",
        },
        {
            title: "Curso de Introducción a la Terminal y Línea de Comandos",
            icon: "src/assets/curso-introducción-linea-comandos-removebg-preview.png",
        },
        {
            title: "Curso de JavaScript Engine (V8) y el Navegador",
            icon: "src/assets/curso-javascript-engine-removebg-preview.png",
        },
        {
            title: "Curso de React.js con Vite.js y TailwindCSS",
            icon: "./src/assets/curso-responsive-design-removebg-preview.png",
        },
        {
            title: "Curso de React.js (Platzi)",
            icon: "./src/assets/curso-responsive-design-removebg-preview.png",
        },
        {
            title: "Curso de Responsive Design: Maquetación Mobile First",
            icon: "./src/assets/curso-responsive-design-removebg-preview.png",
        },
        {
            title: "Prueba Técnica: E-commerce Profesional con React.js",
            icon: "./src/assets/prueba-tecnica-ecommerce-react-removebg-preview.png",
        },
        {
            title: "Curso Práctico de JavaScript",
            icon: "src/assets/curso-practico-javascript.png",
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