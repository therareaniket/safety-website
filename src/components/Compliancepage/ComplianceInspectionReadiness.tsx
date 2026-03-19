'use client';

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type ComplianceInspectionReadinessProps = {
    complianceRegulatoryTitle: string
    complianceRegulatorySubtitle: string
    complianceRegulatoryCard1: {
        title: string
        subtitle: string
    }
    complianceRegulatoryCard2: {
        title: string
        subtitle: string
    }
    complianceRegulatoryCard3: {
        title: string
        subtitle: string
    }
    complianceRegulatoryCard4: {
        title: string
        subtitle: string
    }
    complianceRegulatoryCard5: {
        title: string
        subtitle: string
    }
    complianceRegulatoryCard6: {
        title: string
        subtitle: string
    }
}

export default function ComplianceInspectionReadiness( { complianceRegulatoryCard1, complianceRegulatoryCard2, complianceRegulatoryCard3, complianceRegulatoryCard4, complianceRegulatoryCard5, complianceRegulatoryCard6, complianceRegulatorySubtitle, complianceRegulatoryTitle }: ComplianceInspectionReadinessProps ) {
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
            <section className="section" ref={ref}>
                <div className="container">
                    <div className="compliance-head-text-wrapper">
                        <h2 className="text-md">{complianceRegulatoryTitle}</h2>

                        <p className="h6 text-rg">{complianceRegulatorySubtitle}</p>
                    </div>

                    <motion.div
                        className="compliance-pointers-wrapper"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <div className="compliance-pointers-card compliance-pointers-car-1">
                            <motion.span
                                className="compliance-pointers-svg site-all-svg global-standard-alignment"
                                variants={iconVariants}
                                style={{ originX: 0.5, originY: 0.5 }}
                            >
                                <Image src="/images/compliancepage/global-standard-alignment.svg" alt="compliance-icon-1" width={32} height={32}></Image>
                            </motion.span>
                            <div className="compliance-pointers-text">
                                <h3 className="h5 text-md">{complianceRegulatoryCard1.title}</h3>

                                <p className="h6 text-rg text-grey">{complianceRegulatoryCard1.subtitle}</p>
                            </div>
                        </div>

                        <div className="compliance-pointers-card compliance-pointers-card-2">
                            <motion.span
                                className="compliance-pointers-svg site-all-svg gvp-part-11-compliance"
                                variants={iconVariants}
                                style={{ originX: 0.5, originY: 0.5 }}
                            >
                                <Image src="/images/compliancepage/gvp-compliance.svg" alt="compliance-icon-2" width={32} height={32}></Image>
                            </motion.span>
                            <div className="compliance-pointers-text">

                                <h3 className="h5 text-md">{complianceRegulatoryCard2.title}</h3>

                                <p className="h6 text-rg text-grey">{complianceRegulatoryCard2.subtitle}</p>
                            </div>
                        </div>

                        <div className="compliance-pointers-card compliance-pointers-card-3">
                            <motion.span
                                className="compliance-pointers-svg site-all-svg regional-regulatory-support"
                                variants={iconVariants}
                                style={{ originX: 0.5, originY: 0.5 }}
                            >
                                <Image src="/images/compliancepage/regulatory-support.svg" alt="compliance-icon-3" width={32} height={32}></Image>
                            </motion.span>

                            <div className="compliance-pointers-text">
                                <h3 className="h5 text-md">{complianceRegulatoryCard3.title}</h3>

                                <p className="h6 text-rg text-grey">{complianceRegulatoryCard3.subtitle}</p>
                            </div>
                        </div>

                        <div className="compliance-pointers-card compliance-pointers-card-4">
                            <motion.span
                                className="compliance-pointers-svg site-all-svg inspection-ready-outputs"
                                variants={iconVariants}
                                style={{ originX: 0.5, originY: 0.5 }}
                            >
                                <Image src="/images/compliancepage/inspection-ready.svg" alt="compliance-icon-4" width={32} height={32}></Image>
                            </motion.span>
                            <div className="compliance-pointers-text">

                                <h3 className="h5 text-md">{complianceRegulatoryCard4.title}</h3>

                                <p className="h6 text-rg text-grey">{complianceRegulatoryCard4.subtitle}</p>
                            </div>
                        </div>

                        <div className="compliance-pointers-card compliance-pointers-card-5">
                            <motion.span
                                className="compliance-pointers-svg site-all-svg end-to-end-traceability"
                                variants={iconVariants}
                                style={{ originX: 0.5, originY: 0.5 }}
                            >
                                <Image src="/images/compliancepage/end-to-end.svg" alt="compliance-icon-5" width={32} height={32}></Image>
                            </motion.span>
                            <div className="compliance-pointers-text">
                                <h3 className="h5 text-md">{complianceRegulatoryCard5.title}</h3>

                                <p className="h6 text-rg text-grey">{complianceRegulatoryCard5.subtitle}</p>
                            </div>
                        </div>

                        <div className="compliance-pointers-card compliance-pointers-card-6">
                            <motion.span
                                className="compliance-pointers-svg site-all-svg inspection-audit-support"
                                variants={iconVariants}
                                style={{ originX: 0.5, originY: 0.5 }}
                            >
                                <Image src="/images/compliancepage/audit-support.svg" alt="compliance-icon-6" width={32} height={32}></Image>
                            </motion.span>
                            <div className="compliance-pointers-text">
                                <h3 className="h5 text-md">{complianceRegulatoryCard6.title}</h3>

                                <p className="h6 text-rg text-grey">{complianceRegulatoryCard6.subtitle}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}