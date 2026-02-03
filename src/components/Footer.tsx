import Logo from '../assets/images/logo.svg'
import Phone from '../assets/images/call.svg'
import Email from '../assets/images/mail.svg'
import Facebook from '../assets/images/facebook.svg'
import Insta from '../assets/images/insta.svg'
import X from '../assets/images/x.svg'
import Linkedin from '../assets/images/linkedin.svg'
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>          
            <div className="container">
                <div className="footer-inner-main flex">
                    <div className="f-col-one flex flex-col">
                        <div className='f-logo'>
                            <Image className="navbar-img" src={Logo} alt="dhatusafety-logo" width={150}
                                height={25} priority />
                            <p className='f-desc text-16'>
                                Empowering organizations with smart, reliable, and compliant pharmacovigilance workflows
                            </p>
                        </div>
                        <div className="f-contact">
                            <div className="f-c-list flex">
                                <Image className="f-icon" src={Phone} alt="call" />
                                <p className='text-16'>+1 512 843 2002</p>
                            </div>
                            <div className="f-c-list flex">
                                <Image className="f-icon" src={Email} alt="email" />
                                <p className='text-16'>enquiry@dhatusafety.com</p>
                            </div>
                        </div>

                    </div>
                    <div className="f-right-cols flex">
                        <div className="f-col-two">
                            <h2 className='text-18 text-sb text-grey'>Quick Links</h2>
                            <ul>
                                <li>
                                    <Link href="/" className="f-link text-16 text-grey">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="f-link text-16 text-grey">
                                        About Platform
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pricing" className="f-link text-16 text-grey">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/insights" className="f-link text-16 text-grey">
                                        Compliance & quality
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="f-link text-16 text-grey">
                                        Resourses
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/find-rep" className="f-link text-16 text-grey">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="f-col-three">
                            <h2 className='text-18 text-sb text-grey'>Further Information</h2>
                            <ul>
                                <li>
                                    <Link href="/" className="f-link text-16 text-grey">
                                        Terms of Use
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="f-link text-16 text-grey">
                                        Privacy Policy
                                    </Link>
                                </li>                                
                            </ul>
                        </div>
                        <div className="f-col-four">
                            <h2 className='text-18 text-sb text-grey'>Newsletter</h2>
                             <p className='f-desc text-16 mt-0'>
                               Join Our Newsletter and get notified with latest updates.
                            </p>
                            <form action="" className='newletter-form'>
                                <input type="text" className='form-control' placeholder='Enter your mail' />
                                <button className='main-btn flex'><span className='btn-icon bg-black centered-block'><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.209996 10.1677C-0.0420067 10.3829 -0.0718591 10.7616 0.143319 11.0136C0.358496 11.2656 0.73722 11.2955 0.989223 11.0803L0.599609 10.624L0.209996 10.1677ZM12.4407 1.07116C12.4667 0.740812 12.22 0.451905 11.8897 0.425866L6.50638 0.00153416C6.17604 -0.0245046 5.88713 0.222185 5.86109 0.552531C5.83505 0.882877 6.08174 1.17178 6.41209 1.19782L11.1972 1.57501L10.8201 6.36017C10.794 6.69051 11.0407 6.97942 11.3711 7.00546C11.7014 7.0315 11.9903 6.78481 12.0164 6.45446L12.4407 1.07116ZM0.599609 10.624L0.989223 11.0803L12.2322 1.4803L11.8425 1.02401L11.4529 0.56772L0.209996 10.1677L0.599609 10.624Z" fill="white"/>
</svg></span><span className='text-md text-grey text-16'>Join Now</span></button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="copyright flex items-center">
                    <ul className='flex social-links'>
                        <li><Image className="social-img" src={Facebook} alt="facebook" width={30}
                                height={30} priority /></li>
                                 <li><Image className="social-img" src={Insta} alt="instagram" width={30}
                                height={30} priority /></li>
                                 <li><Image className="social-img" src={X} alt="x" width={30}
                                height={30} priority /></li>
                                 <li><Image className="social-img" src={Linkedin} alt="linkedin" width={30}
                                height={30} priority /></li>
                    </ul>
                    <div className="copyright-links flex">                       
                        <p className='text-16'>Copyright ©2025, all rights reserved.</p>
                        <p className='text-16'>Powered by DFOLDS</p>
                            <p className='text-16'>DhatuSafety 2025.1.1</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}