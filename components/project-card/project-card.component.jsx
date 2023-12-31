import classes from "./project-card.module.css"
import { nanoid } from 'nanoid'
import githubLogo from "@/public/github-white.png"
import Image from "next/image"

const ProjectCard = ({details}) => {
    const {liveLink, gitHubLink, image, heading, ts} = details
    return(
            <div className={classes.projects_card}>
                <a className={classes.projects_card_img_container} 
                    href={liveLink} 
                    target="_blank">
                    <Image src={image} alt="" sizes="45vw" />
                </a>
                <h3>
                    <span>{heading}</span>
                    <a href={gitHubLink} target="_blank">
                        <Image src={githubLogo} alt="" height={30} width={30} />
                    </a>
                    
                </h3>
                <h5>Tech Stack Used</h5>
                <div className={classes.projects_ts_container}>
                    {
                        ts.map(it => <Image key={nanoid()} src={it} alt="" />)
                    }
                </div>
            </div>
    )
}

export default ProjectCard