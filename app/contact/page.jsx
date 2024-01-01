import OtherContact from "@/components/other-contact/other-contact.component"
import ContactForm from "@/components/contact-form/contact-form.component"
import classes from "./page.module.css"

const ContactPage = () => {
    return(
        <div className={classes.contact_page_wrapper}>
            <h1>Contact Me !</h1>
            <div className={classes.contact_page_inner}>
                <OtherContact />
                <ContactForm />
            </div>
        </div>
    )
}

export default ContactPage