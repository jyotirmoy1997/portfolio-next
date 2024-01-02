'use client'

import eduLogo from "@/public/graduation.png"
import mlearning from "@/public/mlearning.png"
import blockchain from "@/public/blockchain.png"
import dsa from "@/public/dsa.png"
import devops from "@/public/logo-devops.png"
import eduIcon from "@/public/edu-icon.png"
import interestsIcon from "@/public/interests.png"
import Image from "next/image"
import { Fade } from "react-awesome-reveal";
import classes from "./education.module.css"

const Education = () => {
    return(
    <Fade duration={1500}>
        <div className={classes.education_wrapper}>
                <div className={classes.education_outer}>
                    <h1> <span>
                            <Image src={eduIcon} alt="" height={40} width={40} />
                        </span> <span>Educational Qualification</span> </h1>

                    <div className={classes.education_inner}>
                        <Image src={eduLogo} alt="" height={40} width={40} />
                        <div className={classes.education_cat}>
                            <h2>Master&apos;s in Computer Science</h2>
                            <div className={classes.edu_year}>2021 - 2023</div>
                            <a href="https://www.nbu.ac.in/" target="_blank">
                                <h4>University of North Bengal</h4>
                            </a>
                        </div>
                    </div>

                    <div className={classes.education_inner}>
                        <Image src={eduLogo} alt="" height={40} width={40} />
                        <div className={classes.education_cat}>
                            <h2>Bachelor&apos;s in Computer Science</h2>
                            <div className={classes.edu_year}>2018 - 2021</div>
                            <a href="https://www.nbu.ac.in/" target="_blank">
                                <h4>University of North Bengal</h4>
                            </a>
                        </div>
                    </div>
                </div>
                <div className={classes.interests_wrapper}>
                    <h1><span>
                            <Image src={interestsIcon} alt="" height={45} width={45} />
                        </span> <span>Other Interests</span> 
                    </h1>
                    <div className={classes.interests_inner}>
                        <Image src={mlearning} alt="" height={70} width={70} />
                        <h3>Machine Learning & Deep Learning</h3>
                    </div>
                    <div className={classes.interests_inner}>
                        <Image src={blockchain} alt="" height={70} width={70} />
                        <h3>Cryptography & Blockchain</h3>
                    </div>
                    <div className={classes.interests_inner}>
                        <Image src={dsa} alt="" height={70} width={70} />
                        <h3>Data Structures and Algorithms</h3>
                    </div>
                    <div className={classes.interests_inner}>
                        <Image src={devops} alt="" height={70} width={70}/>
                        <h3>Devops</h3>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Education