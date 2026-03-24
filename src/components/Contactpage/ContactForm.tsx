'use client';

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import FormSubmission from "./FormSubmission";

type ContactFormProps = {
    contactFormTitle: string;
    contactFormSubtitle: string;
    contactFormDetailWrapper: {
        phoneTitle: string;
        phoneNumber: string;
        addressTitle: string;
        address: string;
        emailTitle: string;
        email: string;
    };
};

export default function ContactForm( { contactFormTitle, contactFormSubtitle, contactFormDetailWrapper }: ContactFormProps ) {
        const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        margin: "-100px 0px -100px 0px",
        amount: 0.5
    });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.5
            }
        }
    };

    const iconVariants: Variants = {
        hidden: {
            scale: 0,
            opacity: 1
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };
    return (
        <>
            <section className="contact-form-wrapper section" ref={ref} id="contact-form">
                <div className="container">
                    <motion.div className="contact-form"  variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}>
                        <div className="contact-form-text-left">
                            <div className="contactform-text-wrapper">
                                <h2 className="text-md text-white">{contactFormTitle}</h2>
                                <p className="h6 text-rg text-white">{contactFormSubtitle}</p>
                            </div>

                            <div className="contact-form-address-card-wrapper" >
                                <div className="contact-form-card contact-form-card-1" >
                                    <motion.span className="icon-contact-call" variants={iconVariants}></motion.span>

                                    <div>
                                        <p className="h6 text-md text-white">{contactFormDetailWrapper.phoneTitle}</p>
                                        <p className="text-18 text-rg text-grey">{contactFormDetailWrapper.phoneNumber}</p>
                                    </div>
                                </div>

                                <div className="contact-form-card contact-form-card-2" >
                                    <motion.span className="icon-contact-location" variants={iconVariants}></motion.span>

                                    <div>
                                        <p className="h6 text-md text-white">{contactFormDetailWrapper.addressTitle}</p>
                                        <p className="text-18 text-rg text-grey">{contactFormDetailWrapper.address}</p>
                                    </div>
                                </div>

                                <div className="contact-form-card contact-form-card-3" >
                                    <motion.span className="icon-contact-mail" variants={iconVariants}></motion.span>

                                    <div>
                                        <p className="h6 text-md text-white">{contactFormDetailWrapper.emailTitle}</p>
                                        <p className="text-18 text-rg text-grey">{contactFormDetailWrapper.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <FormSubmission />

                    </motion.div>
                </div>
            </section>
        </>
    );
}