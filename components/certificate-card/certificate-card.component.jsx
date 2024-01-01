import classes from "./certificate-card.module.css"
import Image from "next/image"

const CertificateCard = ({details}) => {
    const {heading, image, issuer, issueDate, credentialID} = details
    return(
        <div className={classes.certificate_card_wrapper}>
            <div className={classes.certificate_card_img_container}>
                <Image src={image} alt="" sizes="(max-width: 768px) 70vw, (max-width: 1200px) 50vw, 40vw" priority />
            </div>
            <div className={classes.certificate_card_det}>
                <h2>{heading}</h2>
                <h4>Issued By : {issuer}</h4>
                <h4>Issue Date : {issueDate}</h4>
                <h4>Credential ID : {credentialID}</h4>
            </div>
        </div>
    )
}

export default CertificateCard