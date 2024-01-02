'use client'

import { Fragment } from "react"
import classes from "./navigation.module.css"
import logo from "@/public/logo.png"
import { useRef } from 'react';
import Link from "next/link"
import hamburgericon from "@/public/ham.png"
import closeicon from "@/public/close.png"
import Image from "next/image"

const Navigation = () => {
    const navRef = useRef()
    const showNavBar = () => {
        navRef.current.classList.toggle(classes.responsive_nav)
    }
    return(
        <Fragment>
            <div className={classes.nav_wrapper}>
                <Link href="/">
                    <Image src={logo.src} alt="Main-Logo" height={100} width={164} />
                </Link>
                <div  ref={navRef} className={classes.nav_links_container}>
                    <div className={classes.nav_links}>
                        <Link href="/" onClick={showNavBar}>Home</Link>
                        <Link href="/projects" onClick={showNavBar} >Projects</Link>
                        <Link href="/certifications" onClick={showNavBar} >Certifications</Link>
                    </div>
                    <div>
                        <Link href="/contact" onClick={showNavBar}>
                            <button className={classes.hire_me_btn}>Hire Me</button>
                        </Link>
                    </div>
                    <button className={`${classes.nav_btn} ${classes.nav_close_btn}`} onClick={showNavBar} >
                    <Image src={closeicon.src} alt="" width={20} height={20}  />
                    </button>
                </div>
                <button className={classes.nav_btn} onClick={showNavBar}>
                    <Image src={hamburgericon.src} alt="" width={30} height={30}  />
                </button>
            </div>
        </Fragment>
    )
}

export default Navigation