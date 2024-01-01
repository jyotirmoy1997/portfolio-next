'use client'

import classes from "./contact-form.module.css"
import { useState, useRef } from "react"
import emailjs from '@emailjs/browser';
import { validateEmail } from "@/utils/validator";
import toast, { Toaster } from 'react-hot-toast';

const successNotify = () => toast.success("Email Sent Successfully")
const failNotify = () => toast.error("Something Went Wrong")


const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID
const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY

const errMsg = "Please fill this field"

const initialState = {
    name : "",
    email : "",
    subject : "",
    message : ""
}

const ContactForm = () => {
    const [formData, setFormData] = useState(initialState)

    const [error, setError] = useState("")
    const [emailError, setEmailError] = useState("")

    const nameRef = useRef()
    const emailRef = useRef()
    const subjectRef = useRef()
    const messageRef = useRef()
    const form = useRef();

    const updateForm = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if(formData.name === ""){
            setError(errMsg)
            nameRef.current.classList.add(classes.err_class)
        }
        if(!validateEmail(formData.email)){
            setEmailError("Please Enter a valid Email Address")
            emailRef.current.classList.add(classes.err_class)
        }
        if(formData.subject === ""){
            setError(errMsg)
            subjectRef.current.classList.add(classes.err_class)
        }
        if(formData.message === ""){
            setError(errMsg)
            messageRef.current.classList.add(classes.err_class)
        }
        if(formData.name !== "" 
            && formData.email !== "" 
            && formData.subject !== "" 
            && formData.message !== ""){
    
            emailjs.sendForm(serviceID, templateID, form.current, publicKey)
                .then((result) => {
                    setFormData(initialState)
                    successNotify()
                }, (error) => {
                    failNotify()
                })
            }
    }
    return(
        <div className={classes.contact_form_wrapper}>
            <form action="" onSubmit={onSubmitHandler} ref={form}>
                <label className={classes.el1} htmlFor="">
                    <span>Name</span>
                    <span className={classes.err_msg}>{error}</span> 
                </label>
                <input 
                    className={classes.el2} 
                    type="text" 
                    onChange={updateForm} 
                    value={formData.name}
                    name="name"
                    ref={nameRef}
                />
                <label className={classes.el3} htmlFor="" >
                    <span>Email</span>
                    <span className={classes.err_msg}>{emailError}</span> 
                </label>
                <input 
                    className={classes.el4} 
                    type="text" 
                    onChange={updateForm} 
                    value={formData.email}
                    name="email"
                    ref={emailRef}
                />
                <label className={classes.el5} htmlFor="">
                    <span>Subject</span>
                    <span className={classes.err_msg}>{error}</span>
                </label>
                <input 
                    className={classes.el6} 
                    type="text" 
                    onChange={updateForm} 
                    value={formData.subject}
                    name="subject"
                    ref={subjectRef}
                />
                <label className={classes.el7} htmlFor="">
                    <span>Message</span>
                    <span className={classes.err_msg}>{error}</span>
                </label>
                <textarea 
                    className={classes.el8} 
                    type="text" 
                    onChange={updateForm} 
                    value={formData.message}
                    name="message"
                    ref={messageRef}
                />
                <button className={classes.msg_drop} onClick={onSubmitHandler}>Drop a Message</button>
                <Toaster/>
            </form>
        </div>
    )
}

export default ContactForm