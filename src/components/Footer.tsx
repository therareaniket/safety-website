'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import FooterCTA from '../components/FooterCTA/FooterCTA'


export default function Footer() {
    const pathname = usePathname();
    return (
        <footer className={pathname === "/Contact" ? "foot-margin" : ""}>
            <div className="container">
                {/* <div className="footer-inner relative"> */}
                <div className={`footer-inner relative ${ pathname === "/Contact" ? "foot-padding": "" }`}>

                    {pathname === "/Contact" ? "" : <FooterCTA />}

                    <div className="footer-inner-main flex">
                        <div className="f-col-one flex flex-col">
                            <div className='f-logo'>
                                <Link href="/" className="navbar-img-wrapper">
                                    <Image className="navbar-logo" src='/images/homepage/logo.svg' alt="dhatusafety-logo" width={150}
                                        height={25} priority />
                                </Link>
                                <p className='f-desc text-16'>
                                    Empowering organizations with smart, reliable, and compliant pharmacovigilance workflows
                                </p>
                            </div>
                            <div className="f-contact flex">
                                <ul className='flex social-links'>
                                    <Link href="#"><li className="text-grey footer-social-icons"><span className="icon-facebook"></span></li></Link>
                                    <Link href="#"><li className="text-grey footer-social-icons"><span className="icon-twitter"></span></li></Link>
                                    <Link href="#"><li className="text-grey footer-social-icons"><span className="icon-linkedin"></span></li></Link>
                                    <Link href="#"><li className="text-grey footer-social-icons"><span className="icon-instagram"></span></li></Link>
                                </ul>
                            </div>
                        </div>

                        <div className="f-right-cols flex">
                            <div className="f-col-two">
                                <h2 className='text-18 text-sb text-grey'>Quick Links</h2>
                                <ul className="footer-links">
                                <li>
                                    <Link href="/" className={`f-link text-16 text-grey ${pathname === "/" ? "active-link" : ""}`}>
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/About" className={`f-link text-16 text-grey ${pathname === "/About" ? "active-link" : ""}`}>
                                        About
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/Pricing" className={`f-link text-16 text-grey ${pathname === "/Pricing" ? "active-link" : ""}`}>
                                        Pricing
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/Compliance" className={`f-link text-16 text-grey ${pathname === "/Compliance" ? "active-link" : ""}`}>
                                        Compliance & quality
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/Resource" className={`f-link text-16 text-grey ${pathname === "/Resource" ? "active-link" : ""}`}>
                                        Resources
                                    </Link>
                                </li>

                                <li>
                                    <Link href="/Contact" className={`f-link text-16 text-grey ${pathname === "/Contact" ? "active-link" : ""}`}>
                                        Contact
                                    </Link>
                                </li>
                                </ul>
                            </div>

                            <div className="f-col-three">
                                <h2 className='text-18 text-sb text-grey'>Further Information</h2>
                                <ul className="">
                                    <li>
                                        <Link href="/" className="further-link-wrapper f-link flex text-16 text-grey ">
                                            <span className="icon-footerCall"></span>
                                            <p className='text-16 text-grey'>+1 512 843 2002</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="further-link-wrapper f-link flex text-16 text-grey">
                                            <span className="icon-footerMail"></span>
                                            <p className='text-16 text-grey'>enquiry@dhatusafety.com</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="f-col-four">
                                <h2 className='text-18 text-sb text-grey'>Newsletter</h2>
                                <p className='f-desc text-16 mt-0 text-grey'>
                                    Join for latest updates.
                                </p>
                                <form action="" className='newletter-form'>
                                    <input type="text" className='form-control' placeholder='Enter your mail' />
                                    <button className='main-btn flex'><span className='btn-icon bg-black centered-block'><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.209996 10.1677C-0.0420067 10.3829 -0.0718591 10.7616 0.143319 11.0136C0.358496 11.2656 0.73722 11.2955 0.989223 11.0803L0.599609 10.624L0.209996 10.1677ZM12.4407 1.07116C12.4667 0.740812 12.22 0.451905 11.8897 0.425866L6.50638 0.00153416C6.17604 -0.0245046 5.88713 0.222185 5.86109 0.552531C5.83505 0.882877 6.08174 1.17178 6.41209 1.19782L11.1972 1.57501L10.8201 6.36017C10.794 6.69051 11.0407 6.97942 11.3711 7.00546C11.7014 7.0315 11.9903 6.78481 12.0164 6.45446L12.4407 1.07116ZM0.599609 10.624L0.989223 11.0803L12.2322 1.4803L11.8425 1.02401L11.4529 0.56772L0.209996 10.1677L0.599609 10.624Z" fill="white" />
                                    </svg></span><span className='text-md text-grey text-16'>Join Now</span></button>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="copyright flex items-center">

                        <div className="copyright-links flex">
                            <p className='text-16 text-grey'>Powered by DFOLDS</p>
                            <p className='text-16 text-grey'>DhatuSafety 2026.1.1</p>
                            <p className='text-16 text-grey'>Copyright ©2026, all rights reserved.</p>
                        </div>

                        <div className="terms-condition-links flex">
                            <ul className="flex">
                                <li><Link href="/Terms&Condition" className="text-16 text-grey">Terms of Use</Link></li>
                                <li><Link href="/PrivacyPolicy" className="text-16 text-grey">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}