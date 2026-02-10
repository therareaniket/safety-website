'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/assets/css/shalaka/responsive.css"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
 
    return (
        <header>
            <div className="container">
                <nav className="nav-wrapper">
                    <Link href="/" className="navbar-img-wrapper">
                        <Image className="navbar-logo" src='/images/homepage/logo.svg' alt="dhatusafety-logo" width={150}
                            height={25} priority />
                    </Link>

                    <ul className="navbar-links flex">
                        <li> <Link href="/" className="nav-link text-16">Home</Link> </li>
                        <li> <Link href="/About" className="nav-link text-16">About</Link> </li>
                        <li> <Link href="/Pricing" className="nav-link text-16">Pricing</Link> </li>
                        <li> <Link href="/Compliance" className="nav-link text-16">Compliance & Quality</Link> </li>
                        <li> <Link href="/Resource" className="nav-link text-16">Resourses</Link> </li>
                        <li> <Link href="/Contact" className="nav-link text-16">Contact</Link> </li>
                    </ul>

                    <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>

                    <div className={`navbar-links nav-mobile ${menuOpen ? "active" : ""}`}>
                        <ul className="mobile-menu-ul">
                            <li><Link href="/" className="nav-link text-18">Home</Link> </li>

                            <li><Link href="/About" className="nav-link text-18">About</Link> </li>
                            
                            <li><Link href="/Pricing" className="nav-link text-18">Pricing</Link> </li>
                            
                            <li><Link href="/Compliance" className="nav-link text-18">Compliance & Quality</Link> </li>
                            
                            <li><Link href="/Resource" className="nav-link text-18">Resourses</Link> </li>
                            
                            <li><Link href="/Contact" className="nav-link text-18">Contact</Link> </li>
                        </ul>

                        <span className="menu-hl"></span>

                        <div className="nav-contact-block">
                            <Link href="tel:+1 512 843 2002"><i className="icon-footerCall"></i>+1 512 843 2002</Link>
                            <Link href="mailto:enquiry@dhatusafety.com"><i className="icon-footerMail"></i>enquiry@dhatusafety.com</Link>

                            <ul className="nav-connect-socials">
                                <li><Link href="#"><i className="icon-linkedin"></i></Link></li>
                                <li><Link href="#"><i className="icon-twitter"></i></Link></li>
                                <li><Link href="#"><i className="icon-instagram"></i></Link></li>
                                <li><Link href="#"><i className="icon-facebook"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );

    
}