import bdata from "@/public/certificates/bdata.jpg"
import mlearning from "@/public/certificates/mlearning.jpg"
import bchain from "@/public/certificates/bchain.jpg"
import classes from "./page.module.css"
import CertificateCard from "@/components/certificate-card/certificate-card.component"

const details = [
    {
        id : 1,
        heading : "Blockchain and it's Applications",
        image : bchain,
        issuer : "NPTEL through IIT Kharagpur",
        issueDate : "May 2023",
        credentialID : "NPTEL23CS47S44640152"
    },
    {
        id : 2,
        heading : "Big Data Computing",
        image : bdata,
        issuer : "NPTEL through IIT Patna",
        issueDate : "November 2022",
        credentialID : "NPTEL22CS65S43280127"
    },
    {
        id : 3,
        heading : "Introduction to Machine Learning",
        image : mlearning,
        issuer : "NPTEL through IIT Kharagpur",
        issueDate : "October 2022",
        credentialID : "NPTEL22CS97S13380043"
    }
]

const Certifications = () => {
    return(
        <div className={classes.certifications_wrapper}>
            <div className={classes.certifications_inner}>
                {
                    details.map(ct => <CertificateCard key={ct.id} details={ct} />) 
                }
            </div>
        </div>
    )
}

export default Certifications