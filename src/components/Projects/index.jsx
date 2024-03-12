import React from "react";
import CardProject from "../CardProject";
const Projects = () => {
    const projects = [
        {
            title: "Doship",
            imgUrl: "src/assets/doship.png",
            description: "An engaging e-commerce platform showcasing a wide range of products fetched from an API. Users can explore product details, proceed to checkout, and view their order summary, offering a complete online shopping experience.",
            url : "https://do-ship.vercel.app",
            styleContainer : "container-card",
            urlCode : "https://github.com/Danselo/DoShip",
        },
        {
            title: "Tic Tac Toe",
            imgUrl: "src/assets/tictactoe.png",
            description: "A classic Tic Tac Toe game that brings nostalgic fun into the digital age. Players can enjoy this timeless strategy game online, featuring a clean interface and smooth gameplay for endless entertainment.",
            url : "https://tictactoe-sooty-alpha.vercel.app",
            styleContainer : "container-card container-card2",
            urlCode : "https://github.com/Danselo/TaskProyectReact",
        },
        {
            title: "ToDo Project",
            imgUrl: "src/assets/ToDo.png",
            description: "A user-friendly task management app designed to help organize daily tasks and projects. Features include adding, deleting, and marking tasks as complete, making it easier to stay on top of your to-do list.",
            url : "https://task-proyect-react.vercel.app",
            styleContainer : "container-card",
            urlCode : "https://github.com/Danselo/TaskProyectReact",
        },
        {
            title: "Bitcoin Page",
            imgUrl: "src/assets/Bitcoin.png",
            description: "A visually striking informational website about Bitcoin, designed purely for educational purposes. It features an engaging layout and responsive design, providing users with insights into the world of cryptocurrency.",
            url : "https://responsive-page-bitcoin.vercel.app",
            styleContainer : "container-card container-card2",
            urlCode : "https://github.com/Danselo/ResponsivePageBitcoin",
        },
        {
            title: "Async Page",
            imgUrl: "src/assets/Async.png",
            description: "A portfolio website showcasing asynchronous JavaScript techniques through a clean and modern interface. It serves as a hub for demonstrating web development skills and projects, optimized for a seamless user experience.",
            url : "https://async-landing-one.vercel.app",
            styleContainer : "container-card",
            urlCode : "https://github.com/Danselo/AsyncLanding",
        }
    ];
    return (
        <>
            <div className="container-projects" id="projects">
                    <h1 className="container-projects-title">Porfolio</h1>
                    <div className="container-projects-cards">
                        {projects.map((project, index) =>(
                            <CardProject
                            styleContainer={project.styleContainer}
                            key={index}
                            title={project.title}
                            img={project.imgUrl}
                            description={project.description}
                            url={project.url}
                            urlCode={project.urlCode}
                        />
                        ))}
                    </div>
            </div>

        </>
    )
}
export default Projects