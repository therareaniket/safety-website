'use client';

import Image from "next/image";

export default function ContactForm() {
    return (
        <>
            <section className="contact-form-wrapper section">
                <div className="container">
                    <div className="contact-form">
                        <div className="contact-form-text-left">
                            <div className="contactform-text-wrapper">
                                <h2 className="text-md text-white">Your Queries Matter</h2>
                                <p className="h6 text-rg text-white">Submit your request and our experts will connect with you shortly to provide solutions.</p>
                            </div>

                            <div className="contact-form-address-card-wrapper">
                                <div className="contact-form-card contact-form-card-1">
                                    <span className="icon-contact-call"></span>

                                    <div>
                                        <p className="h6 text-md text-white">Phone Number</p>
                                        <p className="text-18 text-rg text-grey">+1 512 843 2002</p>
                                    </div>
                                </div>
                                <div className="contact-form-card contact-form-card-2">
                                    <span className="icon-contact-location"></span>

                                    <div>
                                        <p className="h6 text-md text-white">Location</p>
                                        <p className="text-18 text-rg text-grey">240, Newark, DE 19702, USA</p>
                                    </div>
                                </div>
                                <div className="contact-form-card contact-form-card-3">
                                    <span className="icon-contact-mail"></span>

                                    <div>
                                        <p className="h6 text-md text-white">Email</p>
                                        <p className="text-18 text-rg text-grey">enquiry@dhatusafety.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-text-right">
                            <div className="cnct-form-row cnct-form-row-1">
                                <input type="text" placeholder="Full Name" className="h6 text-rg"></input>
                                <input type="text" placeholder="Email Address" className="h6 text-rg"></input>
                            </div>

                            <div className="cnct-form-row cnct-form-row-2">
                                <input type="text" placeholder="Organization Name" className="h6 text-rg"></input>
                            </div>

                            <div className="cnct-form-row cnct-form-row-3">
                                <textarea name="" id="" placeholder="Your Message" className="h6 text-rg"></textarea>
                            </div>

                            <div className="cnct-button-wrapper">
                                <button className='main-btn flex'><span className='btn-icon bg-white centered-block'>
                                    <svg className="cnct-svg-arrow b-arrw" width="24" height="24" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.209996 10.1677C-0.0420067 10.3829 -0.0718591 10.7616 0.143319 11.0136C0.358496 11.2656 0.73722 11.2955 0.989223 11.0803L0.599609 10.624L0.209996 10.1677ZM12.4407 1.07116C12.4667 0.740812 12.22 0.451905 11.8897 0.425866L6.50638 0.00153416C6.17604 -0.0245046 5.88713 0.222185 5.86109 0.552531C5.83505 0.882877 6.08174 1.17178 6.41209 1.19782L11.1972 1.57501L10.8201 6.36017C10.794 6.69051 11.0407 6.97942 11.3711 7.00546C11.7014 7.0315 11.9903 6.78481 12.0164 6.45446L12.4407 1.07116ZM0.599609 10.624L0.989223 11.0803L12.2322 1.4803L11.8425 1.02401L11.4529 0.56772L0.209996 10.1677L0.599609 10.624Z" fill="black" />
                                </svg></span><span className='text-md text-white text-18'>Send Message</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}