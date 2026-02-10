'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import "@/assets/css/shalaka/responsive.css"


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header>
            <div className="container">
                <nav className="nav-wrapper">
                    <Link href="/" className="navbar-img-wrapper">
                        <Image className="navbar-logo" src='/images/homepage/logo.svg' alt="dhatusafety-logo" width={150}
                            height={25} priority />
                    </Link>

                    <ul className="navbar-links flex">
                        <li><Link href="/" className={`nav-link text-16 ${pathname === "/" ? "active-link" : ""}`}>Home</Link></li>

                        <li><Link href="/About" className={`nav-link text-16 ${pathname === "/About" ? "active-link" : ""}`}>About</Link> </li>

                        <li><Link href="/Pricing" className={`nav-link text-16 ${pathname === "/Pricing" ? "active-link" : ""}`}>Pricing</Link> </li>

                        <li><Link href="/Compliance" className={`nav-link text-16 ${pathname === "/Compliance" ? "active-link" : ""}`}>Compliance & Quality</Link> </li>

                        <li><Link href="/Resourse" className={`nav-link text-16 ${pathname === "/Resourse" ? "active-link" : ""}`}>Resourses</Link> </li>

                        <li><Link href="/Contact" className={`nav-link text-16 ${pathname === "/Contact" ? "active-link" : ""}`}>Contact</Link> </li>
                    </ul>

                    <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>

                    <div className={`navbar-links nav-mobile ${menuOpen ? "active" : ""}`}>
                        <ul className="mobile-menu-ul">
                            <li><Link href="/" className={`nav-link text-18 ${pathname === "/" ? "active-link" : ""}`}>Home</Link></li>

                            <li><Link href="/About" className={`nav-link text-18 ${pathname === "/About" ? "active-link" : ""}`}>About</Link> </li>

                            <li><Link href="/Pricing" className={`nav-link text-18 ${pathname === "/Pricing" ? "active-link" : ""}`}>Pricing</Link> </li>

                            <li><Link href="/Compliance" className={`nav-link text-18 ${pathname === "/Compliance" ? "active-link" : ""}`}>Compliance & Quality</Link> </li>

                            <li><Link href="/Resourse" className={`nav-link text-18 ${pathname === "/Resourse" ? "active-link" : ""}`}>Resourses</Link> </li>

                            <li><Link href="/Contact" className={`nav-link text-18 ${pathname === "/Contact" ? "active-link" : ""}`}>Contact</Link> </li>
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