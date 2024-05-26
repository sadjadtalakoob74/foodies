import React from 'react';
import Link from "next/link";
import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"
import Image from "next/image";
import MainHeaderBackground from "@/components/main-header/main-header-background";
import NavLink from "@/components/main-header/nav-link";

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
                        <li><NavLink href="/meals">Browse
                            Meals</NavLink>
                        </li>
                        <li>


                            <NavLink href="/community">Foodies
                                Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    )
        ;
}

export default MainHeader;