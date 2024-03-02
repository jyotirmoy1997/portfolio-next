'use client'

import classes from "./tech-stack.module.css"
import reactLogo from "@/public/react-icon.png"
import expressLogo from "@/public/express.png"
import nodeLogo from "@/public/node-js-icon.png"
import mongodbLogo from "@/public/mongodb.png"
import htmlLogo from "@/public/html.png"
import cssLogo from "@/public/css.png"
import jsLogo from "@/public/js.png"
import pythonLogo from "@/public/python.png"
import javaLogo from "@/public/java.png"
import cppLogo from "@/public/c++.png"
import flaskLogo from "@/public/flask.png"
import reduxLogo from "@/public/redux.png"
import tsLogo from "@/public/typescript.png"
import nextLogo from "@/public/nextjs.png"
import gitogo from "@/public/git.png"
import postgreslogo from "@/public/postgresql.png"
import laravelLogo from "@/public/laravel.png"
import phpLogo from "@/public/php.png"
import mysqlLogo from "@/public/MySQL.png"
import drupalLogo from "@/public/drupal.png"

import Image from "next/image"

import { Tooltip } from "react-tooltip"
import 'react-tooltip/dist/react-tooltip.css'


const TechStack = () => {
    return(
        <div className={classes.tech_stack_outer}>
            <h1>Tech Stack</h1>
            <div className={classes.tech_stack_inner}>
                    <div className={classes.ts_img_container}
                        data-tooltip-id="react-tooltip" 
                        data-tooltip-content="ReactJS" 
                        data-tooltip-float={true} >
                        <Tooltip id="react-tooltip" />
                        <Image src={reactLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw" />
                    </div>
                    <div className={classes.ts_img_container}
                        data-tooltip-id="next-tooltip" 
                        data-tooltip-content="NextJS" 
                        data-tooltip-float={true} >
                        <Tooltip id="next-tooltip" />
                        <Image src={nextLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw" />
                    </div>
                    <div className={classes.ts_img_container}
                    data-tooltip-id="express-tooltip" 
                    data-tooltip-content="ExpressJS" 
                    data-tooltip-float={true} >
                        <Tooltip id="express-tooltip" />
                        <Image src={expressLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw" />
                    </div>
                    <div className={classes.ts_img_container}
                    data-tooltip-id="node-tooltip" 
                    data-tooltip-content="NodeJS" 
                    data-tooltip-float={true} >
                        <Tooltip id="node-tooltip" />
                        <Image src={nodeLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw" />
                    </div>
                    <div className={classes.ts_img_container}
                    data-tooltip-id="mongo-tooltip" 
                    data-tooltip-content="MongoDB" 
                    data-tooltip-float={true}>
                        <Tooltip id="mongo-tooltip" />
                        <Image src={mongodbLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw" />
                    </div>
                    <div className={classes.ts_img_container}
                    data-tooltip-id="redux-tooltip" 
                    data-tooltip-content="React Redux" 
                    data-tooltip-float={true} >
                        <Tooltip id="redux-tooltip" />
                        <Image src={reduxLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw" />
                    </div>
                    <div className={classes.ts_img_container}
                    data-tooltip-id="js-tooltip" 
                    data-tooltip-content="JavaScript" 
                    data-tooltip-float={true}>
                    <Tooltip id="js-tooltip" />
                        <Image src={jsLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw"/>
                    </div>

                    <div className={classes.ts_img_container}
                    data-tooltip-id="python-tooltip" 
                    data-tooltip-content="TypeScript" 
                    data-tooltip-float={true} >
                    <Tooltip id="typescript-tooltip" />
                        <Image src={tsLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw"/>
                    </div>
                    <div className={classes.ts_img_container}
                    data-tooltip-id="html-tooltip" 
                    data-tooltip-content="HTML" 
                    data-tooltip-float={true}>
                    <Tooltip id="html-tooltip" />
                        <Image src={htmlLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw"/>
                    </div>
                    <div className={classes.ts_img_container}
                    data-tooltip-id="css-tooltip" 
                    data-tooltip-content="CSS" 
                    data-tooltip-float={true} >
                    <Tooltip id="css-tooltip" />
                        <Image src={cssLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw"/>
                    </div>
                    
                    <div className={classes.ts_img_container}
                     data-tooltip-id="postgres-tooltip" 
                     data-tooltip-content="PostgreSQL" 
                     data-tooltip-float={true} >
                    <Tooltip id="postgres-tooltip" />
                        <Image src={postgreslogo.src} alt="" height={70} width={70} quality={100} sizes="50vw"/>
                    </div>
                    
                    <div className={classes.ts_img_container}
                    data-tooltip-id="python-tooltip" 
                    data-tooltip-content="Python" 
                    data-tooltip-float={true} >
                    <Tooltip id="python-tooltip" />
                        <Image src={pythonLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw"/>
                    </div>
                    <div className={classes.ts_img_container}
                     data-tooltip-id="flask-tooltip" 
                     data-tooltip-content="Python Flask" 
                     data-tooltip-float={true} >
                    <Tooltip id="flask-tooltip" />
                        <Image src={flaskLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw"/>
                    </div>

                    <div className={classes.ts_img_container}
                     data-tooltip-id="php-tooltip" 
                     data-tooltip-content="PHP" 
                     data-tooltip-float={true} >
                    <Tooltip id="php-tooltip" />
                        <Image src={phpLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw"/>
                    </div>

                    <div className={classes.ts_img_container}
                     data-tooltip-id="laravel-tooltip" 
                     data-tooltip-content="Laravel" 
                     data-tooltip-float={true} >
                    <Tooltip id="laravel-tooltip" />
                        <Image src={laravelLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw"/>
                    </div>

                    <div className={classes.ts_img_container}
                     data-tooltip-id="mysql-tooltip" 
                     data-tooltip-content="MySQL" 
                     data-tooltip-float={true} >
                    <Tooltip id="mysql-tooltip" />
                        <Image src={mysqlLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw"/>
                    </div>

                    <div className={classes.ts_img_container}
                     data-tooltip-id="java-tooltip" 
                     data-tooltip-content="Java" 
                     data-tooltip-float={true} >
                    <Tooltip id="java-tooltip" />
                        <Image src={javaLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw"/>
                    </div>
                    <div className={classes.ts_img_container}
                     data-tooltip-id="cpp-tooltip" 
                     data-tooltip-content="C++" 
                     data-tooltip-float={true} >
                    <Tooltip id="cpp-tooltip" />
                        <Image src={cppLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw"/>
                    </div>

                    <div className={classes.ts_img_container}
                     data-tooltip-id="drupal-tooltip" 
                     data-tooltip-content="Drupal" 
                     data-tooltip-float={true} >
                    <Tooltip id="drupal-tooltip" />
                        <Image src={drupalLogo.src} alt="" height={70} width={70} quality={100} sizes="50vw"/>
                    </div>
                    <div className={classes.ts_img_container}
                     data-tooltip-id="git-tooltip" 
                     data-tooltip-content="Git" 
                     data-tooltip-float={true} >
                    <Tooltip id="git-tooltip" />
                        <Image src={gitogo.src} alt="" height={70} width={70} quality={100} sizes="50vw" />
                    </div>
            </div>
        </div>
    )
}

export default TechStack