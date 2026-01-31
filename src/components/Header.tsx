'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "@/assets/css/shalaka/responsive.css"
import Logo from '../assets/images/logo.svg'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
 
    return (
        <header>
            <div className="container">
                <nav className="nav-wrapper">
                    <div className="navbar-img-wrapper">
                        <Image className="navbar-logo" src={Logo} alt="dhatusafety-logo" width={150}
                            height={25} priority />
                    </div>

                    <ul className="navbar-links flex">
                        <li>
                            <Link href="/" className="nav-link text-18">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="nav-link text-18">
                                About Platform
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="nav-link text-18">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="/insights" className="nav-link text-18">
                                Compliance & quality
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="nav-link text-18">
                                Resourses
                            </Link>
                        </li>
                        <li>
                            <Link href="/find-rep" className="nav-link text-18">
                                Contact
                            </Link>
                        </li>
                    </ul>

                       <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>

                    <ul className={`navbar-links nav-mobile ${menuOpen ? "active" : ""}`}>
                        <li>
                            <Link href="/" className="nav-link text-18">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="nav-link text-18">
                                About Platform
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" className="nav-link text-18">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="/insights" className="nav-link text-18">
                                Compliance & quality
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="nav-link text-18">
                                Resourses
                            </Link>
                        </li>
                        <li>
                            <Link href="/find-rep" className="nav-link text-18">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );

    
}