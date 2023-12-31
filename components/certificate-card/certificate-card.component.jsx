import classes from "./certificate-card.module.css"
import Image from "next/image"

const CertificateCard = ({details}) => {
    const {heading, image, issuer, issueDate, credentialID} = details
    return(
        <div className={classes.certificate_card_wrapper}>
            <div className={classes.certificate_card_img_container}>
                <Image src={image} alt="" sizes="40vw" />
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