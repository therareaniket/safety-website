'use client';

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function ComplianceInspectionReadiness() {
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
                        <h2 className="text-md">Regulatory Compliance & Inspection Readiness</h2>

                        <p className="h6 text-rg">Proven Compliance. Complete Transparency. Always Inspection-Ready</p>
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
                                <h3 className="h5 text-md">Global Standards Alignment</h3>

                                <p className="h6 text-rg text-grey">Built-in compliance with ICH E2A, E2B (R3), E2C, and E2D standards, ensuring standardized case processing reporting.</p>
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

                                <h3 className="h5 text-md">GVP & Part 11 Compliance</h3>

                                <p className="h6 text-rg text-grey">Supports EMA Good Pharmacovigilance Practices (GVP) and FDA 21 CFR Part 11 requirements.</p>
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
                                <h3 className="h5 text-md">Regional Regulatory Support</h3>

                                <p className="h6 text-rg text-grey">Flexible configuration to meet country-specific and authority-specific regulations (EMA, FDA, MHRA,etc).</p>
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

                                <h3 className="h5 text-md">Inspection-Ready Outputs</h3>

                                <p className="h6 text-rg text-grey">One-click generation of inspection ready reports, line listings, case histories, narratives, minimizing manual effort.</p>
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
                                <h3 className="h5 text-md">End-to-End Traceability</h3>

                                <p className="h6 text-rg text-grey">Complete traceability linking cases, signals, assessments, aggregate reports, enabling inspectors to follow the full safety decision.</p>
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
                                <h3 className="h5 text-md">Inspection & Audit Support</h3>

                                <p className="h6 text-rg text-grey">Dedicated support for regulatory inspections and audits, including document retrieval, question tracking, and historical inspection.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}