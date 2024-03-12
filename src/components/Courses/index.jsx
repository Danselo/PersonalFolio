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
            icon: "/assets/curso-asincronismo-js-removebg-preview.png",
        },
        {
            title: "Curso de ECMAScript: Historia y Versiones de JavaScript",
            icon: "/assets/curso-ecmascript-removebg-preview.png",
        },
        {
            title: "Curso de Frontend Developer",
            icon: "/assets/curso-frontend-removebg-preview.png",
        },
        {
            title: "Curso de Introducción a la Terminal y Línea de Comandos",
            icon: "/assets/curso-introducción-linea-comandos-removebg-preview.png",
        },
        {
            title: "Curso de JavaScript Engine (V8) y el Navegador",
            icon: "/assets/curso-javascript-engine-removebg-preview.png",
        },
        {
            title: "Curso de React.js con Vite.js y TailwindCSS",
            icon: "/assets/curso-react-vite-tailwin-removebg-preview.png",
        },
        {
            title: "Curso de React.js (Platzi)",
            icon: "/assets/curso-react-removebg-preview.png",
        },
        {
            title: "Curso de Responsive Design: Maquetación Mobile First",
            icon: "/assets/curso-responsive-design-removebg-preview.png",
        },
        {
            title: "Prueba Técnica: E-commerce Profesional con React.js",
            icon: "/assets/prueba-tecnica-ecommerce-react-removebg-preview.png",
        },
        {
            title: "Curso Práctico de JavaScript",
            icon: "/assets/curso-practico-javascript.png",
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