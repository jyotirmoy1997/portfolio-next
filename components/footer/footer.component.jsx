import "./footer.styles.css"
import linkedinlogo from "../../assets/linkedin_1.png"
import twitterlogo from "../../assets/twitter.png"
import githublogo from "../../assets/github-white.png"

const Footer = () => {
    const d = new Date()
    return(
        <div className="footer-wrapper">
           <div className="footer-inner"> 
                <div className="footer-social-links">
                    <a className="footer-social-links-icons" href="https://www.linkedin.com/in/jyotirmoy-das" target="_blank">
                        <img src={linkedinlogo} alt="" />
                    </a>
                    <a className="footer-social-links-icons" href="https://twitter.com/DosJoehan" target="_blank">
                        <img src={twitterlogo} alt="" />
                    </a>
                    <a className="footer-social-links-icons" href="https://github.com/jyotirmoy1997" target="_blank">
                        <img src={githublogo} alt="" />
                    </a>
                </div>
                <p>&#169; {d.getFullYear()} Jyotirmoy Das, All Rights Reserved</p> 
           </div>
        </div>
    )
}

export default Footer