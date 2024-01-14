'use client'

import Link from "next/link"
import classes from "./projects-preview.module.css"
import phimg from "@/public/pc-hunters.png"
import gaimg from "@/public/gamers-adobe.png"
import mseimg from "@/public/mse.png"
import reactLogo from "@/public/react-icon.png"
import expressLogo from "@/public/express.png"
import nodeLogo from "@/public/node-js-icon.png"
import mongodbLogo from "@/public/mongodb.png"
import htmlLogo from "@/public/html.png"
import cssLogo from "@/public/css.png"
import jsLogo from "@/public/js.png"
import pythonLogo from "@/public/python.png"
import flaskLogo from "@/public/flask.png"
import Image from "next/image"
import { Fade } from "react-awesome-reveal";


const ProjectsPreview = () => {
    return(
        <Fade duration={1500}>
            <div className={classes.projects_preview_wrapper}>
                <div className={classes.projects_preview_outer}>
                    <h1>Projects</h1>
                    <div className={classes.projects_preview_inner}>

                        <div className={classes.projects_preview_card}>
                            <a className={classes.projects_preview_card_img_container} 
                            href="https://pc-hunterz.netlify.app/" 
                            target="_blank">
                                <Image src={phimg} alt="" sizes="50vw" />
                            </a>
                            <h3>PC-Hunters :  An E-Commerce Store Prototype</h3>
                            <h5>Tech Stack Used</h5>
                            <div className={classes.project_ts_container}>
                                <Image src={reactLogo} alt="" height={50} width={50} />
                                <Image src={expressLogo} alt="" height={50} width={50} />
                                <Image src={nodeLogo} alt="" height={50} width={50} />
                                <Image src={mongodbLogo} alt="" height={50} width={50} />
                            </div>
                        </div>

                        <div className={classes.projects_preview_card}>
                            <a className={classes.projects_preview_card_img_container}
                            href="https://gamerz-adobe.netlify.app/"
                            target="_blank">
                                <Image src={gaimg} alt="" sizes="50vw" />
                            </a>
                            <h3>Gamerz-Adobe : A Social Media Prototype</h3>
                            <h5>Tech Stack Used</h5>
                            <div className={classes.project_ts_container}>
                                <Image src={reactLogo} alt="" height={50} width={50} />
                                <Image src={expressLogo} alt="" height={50} width={50} />
                                <Image src={nodeLogo} alt="" height={50} width={50} />
                                <Image src={mongodbLogo} alt="" height={50} width={50} />
                            </div>
                        </div>

                        <div className={classes.projects_preview_card}>
                            <a className={classes.projects_preview_card_img_container}
                            href="https://macronutrient-status-esmitamor.onrender.com/"
                            target="_blank"
                            >
                                <Image src={mseimg} alt="" sizes="50vw" />
                            </a>
                            <h3>Macronutrient Status Estimator using Machine Learning</h3>
                            <h5>Tech Stack Used</h5>
                            <div className={classes.project_ts_container}>
                                <Image src={htmlLogo} alt="" height={50} width={50} />
                                <Image src={cssLogo} alt="" height={50} width={50} />
                                <Image src={jsLogo} alt="" height={50} width={50} />
                                <Image src={pythonLogo} alt="" height={50} width={50} />
                                <Image src={flaskLogo} alt="" height={50} width={50} />
                            </div>
                        </div>

                    </div>
                    <Link href="/projects" className={classes.more_projects_wrapper}>
                        <button className={classes.more_projects}>
                            Browse more Projects...
                        </button>
                    </Link>
                </div>
            </div>
        </Fade>
    )
}

export default ProjectsPreview