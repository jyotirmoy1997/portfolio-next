'use client'

import dp from "@/public/IMG_3311.jpg"
import linkedinlogo from "@/public/linkedin_1.png"
import twitterlogo from "@/public/twitter.png"
import githublogo from "@/public/github-white.png"
import { Typewriter } from 'react-simple-typewriter'
import Image from "next/image"
import classes from "./landing-page.module.css"

const words = ['Jyotirmoy Das', 'a Full-Stack Developer', 'a MERN Stack Developer']

const LandingPage = () => {
    return(
        <div className={classes.landing_page_outer}>
            <div className={classes.landing_page_inner}>
                <div id={classes.dp_container}>
                    <Image 
                        className={classes.dp_container_img} 
                        src={dp.src} 
                        alt="" 
                        height={219} 
                        width={200} 
                        quality={100}
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 17vw"
                    />
                </div>
                <div className={classes.about_heading}>
                    <h1>
                        <span className={classes.about_heading_beg}>
                            Hi, I am 
                        </span>
                        <span className={classes.type_writer_text}>
                            <Typewriter 
                            words={words} 
                            loop={false}
                            cursor={true} />
                        </span>
                    </h1>
                </div>
                <div className={classes.about}>
                    <p>Hi There ! I am Jyotirmoy Das, A Full-Stack developer primarily focued on 
                        The MERN Stack & NextJS. I create dynamic web applications that deliver exceptional 
                        user experiences. With a focus on performance and functionality, 
                        I turn ideas into reality. Let&apos;s build something great! 
                    </p>
                </div>
                <div className={classes.social_links}>
                    <a className={classes.social_links_icons} href="https://www.linkedin.com/in/jyotirmoy-das" target="_blank">
                        <Image src={linkedinlogo.src} alt="" width={35} height={35} />
                    </a>
                    <a className={classes.social_links_icons} href="https://twitter.com/DosJoehan" target="_blank">
                        <Image src={twitterlogo.src} alt="" width={35} height={35} />
                    </a>
                    <a className={classes.social_links_icons} href="https://github.com/jyotirmoy1997" target="_blank">
                        <Image src={githublogo.src} alt="" width={35} height={35} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LandingPage