'use client';

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function ComplianceValidationSupport() {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        margin: "-100px 0px -100px 0px",
        amount: 0.2
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
                    <div className=" compliance-validation-head-text-wrapper">
                        <h2 className="text-md ">Implementation, Validation & Ongoing Support</h2>

                        <p className="h6 text-rg">Ensures compliance is embedded from implementation through validation, ongoing operations, and continuous regulatory change.</p>
                    </div>


                    <motion.div
                        className="compliance-validation-support-cards-wrapper"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <div className="compliance-validation-row compliance-validation-row-1">
                            <div className="compliance-validation-support-card compliance-validation-support-card-1">
                                <motion.span
                                    className="compliance-validation-support-svg site-all-svg compliance-validation-support-svg-1"
                                    variants={iconVariants}
                                    style={{ originX: 0.5, originY: 0.5 }}
                                >
                                    <Image src="/images/compliancepage/requirement-soln-design.svg" alt="compliance-icon-3" width={32} height={32}>
                                    </Image>
                                </motion.span>

                                <div className="ongoing-support-text-card">
                                    <h3 className="h5 text-md">Requirements & Solution Design</h3>

                                    <p className="h6 text-rg text-grey">Structured requirement assessment and solution design aligned with regulatory expectations and SOPs.</p>
                                </div>

                            </div>

                            <div className="compliance-validation-support-card compliance-validation-support-card-2">
                                <motion.span
                                    className="compliance-validation-support-svg site-all-svg compliance-validation-support-svg-2"
                                    variants={iconVariants}
                                    style={{ originX: 0.5, originY: 0.5 }}
                                >
                                    <Image src="/images/compliancepage/sop-aligned-config.svg" alt="compliance-icon-3" width={32} height={32}>
                                    </Image>
                                </motion.span>


                                <div className="ongoing-support-text-card">
                                    <h3 className="h5 text-md">SOP-Aligned Configuration</h3>

                                    <p className="h6 text-rg text-grey">System configuration mapped directly to approved SOPs, ensuring operational fit without compromising compliance.</p>
                                </div>
                            </div>
                        </div>

                        <div className="compliance-validation-row compliance-validation-row-2">
                            <div className="compliance-validation-support-card compliance-validation-support-card-3">
                                <motion.span
                                    className="compliance-validation-support-svg site-all-svg compliance-validation-support-svg-3"
                                    variants={iconVariants}
                                    style={{ originX: 0.5, originY: 0.5 }}
                                >
                                    <Image src="/images/compliancepage/validate-migration.svg" alt="compliance-icon-3" width={32} height={32}>
                                    </Image>
                                </motion.span>

                                <div className="ongoing-support-text-card">
                                    <h3 className="h5 text-md">Validated Data Migration</h3>

                                    <p className="h6 text-rg text-grey">Secure data migration with reconciliation, validation, and documented evidence to ensure data integrity and continuity.</p>
                                </div>
                            </div>

                            <div className="compliance-validation-support-card compliance-validation-support-card-4">
                                <motion.span
                                    className="compliance-validation-support-svg site-all-svg compliance-validation-support-svg-4"
                                    variants={iconVariants}
                                    style={{ originX: 0.5, originY: 0.5 }}
                                >
                                    <Image src="/images/compliancepage/training-onboarding.svg" alt="compliance-icon-3" width={32} height={32}>
                                    </Image>
                                </motion.span>

                                <div className="ongoing-support-text-card">
                                    <h3 className="h5 text-md">Training & User Onboarding</h3>

                                    <p className="h6 text-rg text-grey">Role-based training and onboarding to support compliant system usage and inspection readiness.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}