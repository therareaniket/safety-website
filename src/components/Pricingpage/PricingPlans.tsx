'use client';
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function PricingPlans() {
    const standardRef = useRef(null);
    const enterpriseRef = useRef(null);

    const standardInView = useInView(standardRef, {
        once: true,
        margin: "-100px 0px -100px 0px",
        amount: 0.5
    });

    const enterpriseInView = useInView(enterpriseRef, {
        once: true,
        margin: "-100px 0px -100px 0px",
        amount: 0.5
    });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.8
            }
        }
    };

    const itemVariants: Variants = {
        hidden: {
            y: -50,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="plans-wrapper pricing section" >
            <div className="container">
                <div className="main-title center text-center">
                    <h2 className="text-md text-black">Plans Designed for Smarter Safety Management</h2>
                </div>
                <div className="plans-row flex">
                    <motion.div
                        ref={standardRef}
                        className="plan-item bg-dark-grey"
                        variants={containerVariants}
                        initial="hidden"
                        animate={standardInView ? "visible" : "hidden"}
                    >
                        <div className="plan-title flex">
                            <h3 className="h4 text-sb text-white">Standard</h3>
                            <div className="p-price flex"><h4 className="text-bd text-white">$49</h4><span className="text-18 text-white">per user/month</span></div>
                        </div>
                        <p className="h6 text-white">A streamlined plan with all the essential tools for efficient case trials and management.</p>
                        <div className="plan-list">
                            <h5 className="text-md text-white">Includes</h5>
                            <ul>
                                <motion.li className="plan-list-text flex" variants={itemVariants}><svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.2454 11.066L0 5.82055L1.31135 4.5092L5.2454 8.44325L13.6887 0L15 1.31135L5.2454 11.066Z" fill="white" /></svg><p className="text-18 text-white">ICSR Case Management</p></motion.li>
                                <motion.li className="plan-list-text flex" variants={itemVariants}><svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.2454 11.066L0 5.82055L1.31135 4.5092L5.2454 8.44325L13.6887 0L15 1.31135L5.2454 11.066Z" fill="white" /></svg><p className="text-18 text-white">Safety Data Intake from Multiple Sources</p></motion.li>
                                <motion.li className="plan-list-text flex" variants={itemVariants}><svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.2454 11.066L0 5.82055L1.31135 4.5092L5.2454 8.44325L13.6887 0L15 1.31135L5.2454 11.066Z" fill="white" /></svg><p className="text-18 text-white">Basic Signal Detection & Tracking</p></motion.li>
                                <motion.li className="plan-list-text flex" variants={itemVariants}><svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.2454 11.066L0 5.82055L1.31135 4.5092L5.2454 8.44325L13.6887 0L15 1.31135L5.2454 11.066Z" fill="white" /></svg><p className="text-18 text-white">Compliance Tracking & Audit Trails</p></motion.li>
                            </ul>
                        </div>
                        <div className="plan-btn">
                            <button className='main-btn flex'><span className='btn-icon bg-white centered-block'><svg className="b-arrw" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.209996 10.1677C-0.0420067 10.3829 -0.0718591 10.7616 0.143319 11.0136C0.358496 11.2656 0.73722 11.2955 0.989223 11.0803L0.599609 10.624L0.209996 10.1677ZM12.4407 1.07116C12.4667 0.740812 12.22 0.451905 11.8897 0.425866L6.50638 0.00153416C6.17604 -0.0245046 5.88713 0.222185 5.86109 0.552531C5.83505 0.882877 6.08174 1.17178 6.41209 1.19782L11.1972 1.57501L10.8201 6.36017C10.794 6.69051 11.0407 6.97942 11.3711 7.00546C11.7014 7.0315 11.9903 6.78481 12.0164 6.45446L12.4407 1.07116ZM0.599609 10.624L0.989223 11.0803L12.2322 1.4803L11.8425 1.02401L11.4529 0.56772L0.209996 10.1677L0.599609 10.624Z" fill="black" />
                            </svg></span><span className='text-md text-white text-16'>Start Now</span></button>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={enterpriseRef}
                        className="plan-item bg-light-grey"
                        variants={containerVariants}
                        initial="hidden"
                        animate={enterpriseInView ? "visible" : "hidden"}
                    >
                        <div className="plan-title flex">
                            <h3 className="h4 text-sb text-black">Enterprise</h3>
                            <div className="p-price flex"><h4 className="text-bd text-black">$299</h4><span className="text-18 text-black"> per user/month</span></div>
                        </div>
                        <p className="h6 text-black">A streamlined plan with all the essential tools for efficient case trials and management.</p>
                        <div className="plan-list">
                            <h5 className="text-md text-black">Includes</h5>
                            <ul>
                                <motion.li className="plan-list-text flex" variants={itemVariants}><svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.2454 11.066L0 5.82055L1.31135 4.5092L5.2454 8.44325L13.6887 0L15 1.31135L5.2454 11.066Z" fill="black" /></svg><p className="text-18 text-black">Everything in Standard</p></motion.li>
                                <motion.li className="plan-list-text flex" variants={itemVariants}><svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.2454 11.066L0 5.82055L1.31135 4.5092L5.2454 8.44325L13.6887 0L15 1.31135L5.2454 11.066Z" fill="black" /></svg><p className="text-18 text-black">Advanced Signal Analytics & Risk Scoring</p></motion.li>
                                <motion.li className="plan-list-text flex" variants={itemVariants}><svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.2454 11.066L0 5.82055L1.31135 4.5092L5.2454 8.44325L13.6887 0L15 1.31135L5.2454 11.066Z" fill="black" /></svg><p className="text-18 text-black">Automated Aggregate Reporting</p></motion.li>
                                <motion.li className="plan-list-text flex" variants={itemVariants}><svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.2454 11.066L0 5.82055L1.31135 4.5092L5.2454 8.44325L13.6887 0L15 1.31135L5.2454 11.066Z" fill="black" /></svg><p className="text-18 text-black">Enterprise‑Grade Quality Management</p></motion.li>
                            </ul>
                        </div>
                        <div className="plan-btn">
                            <button className='main-btn flex'><span className='btn-icon bg-black centered-block'><svg className="b-arrw" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.209996 10.1677C-0.0420067 10.3829 -0.0718591 10.7616 0.143319 11.0136C0.358496 11.2656 0.73722 11.2955 0.989223 11.0803L0.599609 10.624L0.209996 10.1677ZM12.4407 1.07116C12.4667 0.740812 12.22 0.451905 11.8897 0.425866L6.50638 0.00153416C6.17604 -0.0245046 5.88713 0.222185 5.86109 0.552531C5.83505 0.882877 6.08174 1.17178 6.41209 1.19782L11.1972 1.57501L10.8201 6.36017C10.794 6.69051 11.0407 6.97942 11.3711 7.00546C11.7014 7.0315 11.9903 6.78481 12.0164 6.45446L12.4407 1.07116ZM0.599609 10.624L0.989223 11.0803L12.2322 1.4803L11.8425 1.02401L11.4529 0.56772L0.209996 10.1677L0.599609 10.624Z" fill="white" />
                            </svg></span><span className='text-md text-black text-16'>Start Now</span></button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}