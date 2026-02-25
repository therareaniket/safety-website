'use client';

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function AboutDataMeetsMedical() {
    const ref = useRef(null);

    const isDesktop =
        typeof window !== "undefined" ? window.innerWidth > 1023 : true;

    const isInView = useInView(ref, {
        once: true,
        margin: "-100px 0px -100px 0px",
        amount: 0.1
    });


    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: isDesktop ? 0.5 : 0.3
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
            <section className="about-data-meets-medical-wrapper section" ref={ref}>
                <div className="container">
                    <motion.div
                        className="about-data-meets-medical-inner"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-md text-white">
                            Where Data Meets Medical Expertise
                        </h2>
                        <p className="data-meets-medical-desc text-rg h6 text-white">
                            Transform safety data into clinically sound, regulator-ready decisions through structured review and coding.
                        </p>

                        <div className="about-data-meets-medical-cards-wrapper about-data-meets-medical-cards-wrapper-desktop">
                            <div className="about-medical-card-row about-medical-card-row-1">
                                <div className="about-data-card about-data-card-1">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-1"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/seriousness-assessment-card-1.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>
                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">Seriousness & causality assessment</h3>

                                        <p className="text-rg text-18 text-grey">Safety data is collected from emails, portals, call centers.</p>
                                    </div>
                                </div>

                                <div className="about-data-card about-data-card-2">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-2"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/structurednarrative-card-2.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>

                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">Structured narrative templates</h3>

                                        <p className="text-rg text-18 text-grey">Create clear, regulator ready narratives using standardized, version.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-medical-card-row about-medical-card-row-2">
                                <div className=" about-data-card-5">
                                    <Image src="/images/aboutpage/where-data-meets-medical-image.webp" alt="image" width={613} height={366}></Image>
                                </div>
                            </div>

                            <div className="about-medical-card-row about-medical-card-row-3">
                                <div className="about-data-card about-data-card-3">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-3"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/reference-safety-card-3.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>


                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">Reference safety information linkage</h3>

                                        <p className="text-rg text-18 text-grey">Map assessments to RSI, guided by the Investigator’s Brochure.</p>
                                    </div>
                                </div>

                                <div className="about-data-card about-data-card-4">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-4"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/controlled-medical-approval-card-4.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>
                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">Controlled medical approvals</h3>

                                        <p className="text-rg text-18 text-grey">Ensure medical sign-off through defined review and approval workflows.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-data-meets-medical-cards-wrapper about-data-meets-medical-cards-wrapper-responsive">
                            <div className=" about-medical-card-row-2">
                                <div className=" about-data-card-5">
                                    <Image src="/images/aboutpage/where-data-meets-medical-image.webp" alt="image" width={613} height={366}></Image>
                                </div>
                            </div>

                            <div className="about-medical-card-row">
                                <div className="about-data-card about-data-card-1">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-1"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/seriousness-assessment-card-1.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>

                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">Seriousness & causality assessment</h3>

                                        <p className="text-rg text-18 text-grey">Safety data is collected from emails, portals, call centers.</p>
                                    </div>
                                </div>

                                <div className="about-data-card about-data-card-2">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-2"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/structurednarrative-card-2.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>

                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">Structured narrative templates</h3>

                                        <p className="text-rg text-18 text-grey">Create clear, regulator ready narratives using standardized, version.</p>
                                    </div>
                                </div>

                                <div className="about-data-card about-data-card-3">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-3"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/reference-safety-card-3.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>

                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">Reference safety information linkage</h3>

                                        <p className="text-rg text-18 text-grey">Map assessments to RSI, guided by the Investigator’s Brochure.</p>
                                    </div>
                                </div>

                                <div className="about-data-card about-data-card-4">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-4"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/controlled-medical-approval-card-4.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>

                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">Controlled medical approvals</h3>

                                        <p className="text-rg text-18 text-grey">Ensure medical sign-off through defined review and approval workflows.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="medical-detail-cards-wrapper">
                            <div className="medical-detail-cards">
                                <h4 className="h5 text-md text-white">MedDRA Integration</h4>

                                <p className="text-rg text-18 text-grey">
                                    Use to streamline safety data capture, case processing, and literature surveillance during trials.
                                </p>
                            </div>

                            <div className="medical-detail-cards">
                                <h4 className="h5 text-md text-white">Coding & review</h4>

                                <p className="text-rg text-18 text-grey">
                                    Accelerate coding with intelligent suggestions while preserving medical oversight.
                                </p>
                            </div>

                            <div className="medical-detail-cards">
                                <h4 className="h5 text-md text-white">Audit traceability</h4>

                                <p className="text-rg text-18 text-grey">
                                    Track every coding decision, change, and approval with a complete, end‑to‑end audit trail.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}