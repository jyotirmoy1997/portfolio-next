import classes from "./footer.module.css"
import linkedinlogo from "@/public/linkedin_1.png"
import twitterlogo from "@/public/twitter.png"
import githublogo from "@/public/github-white.png"
import Image from "next/image"

const Footer = () => {
    const d = new Date()
    return(
        <div className={classes.footer_wrapper}>
           <div className={classes.footer_inner}> 
                <div className={classes.footer_social_links}>
                    <a className={classes.footer_social_links_icons} href="https://www.linkedin.com/in/jyotirmoy-das" target="_blank">
                        <Image src={linkedinlogo} alt="" />
                    </a>
                    <a className={classes.footer_social_links_icons} href="https://twitter.com/DosJoehan" target="_blank">
                        <Image src={twitterlogo} alt="" />
                    </a>
                    <a className={classes.footer_social_links_icons} href="https://github.com/jyotirmoy1997" target="_blank">
                        <Image src={githublogo} alt="" />
                    </a>
                </div>
                <p>&#169; {d.getFullYear()} Jyotirmoy Das, All Rights Reserved</p> 
           </div>
        </div>
    )
}

export default Footer