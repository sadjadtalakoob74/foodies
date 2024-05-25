import React from 'react';
import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";

function MainHeader(props) {
    return (
        <>
            <MainHeaderBackground/>

            <header className={classes.header}>

                <Link className={classes.logo} href={"/"}>
                    <Image src={logoImg} alt="logo" priority/>
                    Next lever food </Link>

                <nav className={classes.nav}>
                    <ul>
                        <li><Link href="/meals">Browse Meals</Link></li>
                        <li><Link href="/community">Foodies Community</Link></li>
                    </ul>
                </nav>
            </header>

        </>
    )
        ;
}

export default MainHeader;