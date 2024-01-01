// import ProjectCard from "../../components/project-card/project-card.component"
import ProjectCard from "@/components/project-card/project-card.component"
import phimg from "@/public/pc-hunters.png"
import gaimg from "@/public/gamers-adobe.png"
import mseimg from "@/public/mse.png"
import converter from "@/public/converter.png"
import reactLogo from "@/public/react-icon.png"
import expressLogo from "@/public/express.png"
import nodeLogo from "@/public/node-js-icon.png"
import mongodbLogo from "@/public/mongodb.png"
import htmlLogo from "@/public/html.png"
import cssLogo from "@/public/css.png"
import jsLogo from "@/public/js.png"
import pythonLogo from "@/public/python.png"
import flaskLogo from "@/public/flask.png"
import classes from "./page.module.css"

export const metadata = {
    title: 'Jyotirmoy Das - Projects',
    description: `Explore a collection of diverse web development projects 
    showcasing my skills and expertise in front-end and back-end development. 
    Discover a range of projects demonstrating proficiency in HTML5, CSS3, 
    JavaScript, React, Node.js, and more !`,
  }


const details = [
    {
        id : 1,
        liveLink : "https://pc-hunters.netlify.app/",
        gitHubLink : "https://github.com/jyotirmoy1997/PC-Hunters",
        image : phimg,
        heading : "PC-Hunters :  An E-Commerce Store Prototype",
        ts : [
            reactLogo, expressLogo, nodeLogo, mongodbLogo
        ]
    },
    {
        id : 2,
        liveLink : "https://gamerz-adobe.netlify.app/",
        gitHubLink : "https://github.com/jyotirmoy1997/Gamerz-AdobeV2",
        image : gaimg,
        heading : "Gamerz-Adobe : A Social Media Prototype",
        ts : [
            reactLogo, expressLogo, nodeLogo, mongodbLogo
        ]
    },
    {
        id : 3,
        liveLink : "https://macronutrient-status-esmitamor.onrender.com/",
        gitHubLink : "https://github.com/jyotirmoy1997/Macro-Nutrient-Classification",
        image : mseimg,
        heading : "Macronutrient Status Estimator using Machine Learning",
        ts : [
            htmlLogo, cssLogo, jsLogo, pythonLogo, flaskLogo
        ]
    },
    {
        id : 4,
        liveLink : "https://currency-converter-global.netlify.app/",
        gitHubLink : "https://github.com/jyotirmoy1997/currency-converter",
        image : converter,
        heading : "Currency Converter using ReactJS",
        ts : [
            reactLogo, cssLogo, htmlLogo, jsLogo
        ]
    }
]

const Projects = () => {
    return(
        <div className={classes.projects_container_wrapper}>
            <div className={classes.projects_container}>
                {
                    details.map((det) => <ProjectCard key={det.id} details={det} />)
                }
            </div>
        </div>
        
    )
}

export default Projects