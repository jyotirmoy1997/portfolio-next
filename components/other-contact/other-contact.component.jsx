import phonelogo from "@/public/phone.png"
import wapplogo from "@/public/whatsapp.png"
import emaillogo from "@/public/email.png"
import classes from "./other-contact.module.css"
import Image from "next/image"

const OtherContact = () => {
    return(
        <div className={classes.other_contact_wrapper}>

            <div className={classes.other_contact_inner}>
                <div className={classes.other_contact_inner_img_container}>
                    <Image src={phonelogo} alt="" />
                </div>
                <div className={classes.oth_card}>
                    <span>Contact on Phone</span>
                    <span>+918637515971</span>
                </div>
            </div>

            <div className={classes.other_contact_inner}>
                <div className={classes.other_contact_inner_img_container}>
                    <Image src={emaillogo} alt="" />
                </div>
                <div className={classes.oth_card}>
                    <span>Contact on Email</span>
                    <span>jyotirmoy.031997@gmail.com</span>
                </div>
            </div>

            <div className={classes.other_contact_inner}>
                <div className={classes.other_contact_inner_img_container}>
                    <Image src={wapplogo} alt="" />
                </div>
                <div className={classes.oth_card}>
                    <span>Contact on Whatsapp</span>
                    <span>+918637515971</span>
                </div>
            </div>
        </div>
    )
}

export default OtherContact