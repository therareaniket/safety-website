'use client';

import Image from "next/image";
import { motion, useInView, Variants, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";


export default function ComplianceFlexibleOperations() {
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

    const count60 = useMotionValue(0);
    const count40 = useMotionValue(0);

    const rounded60 = useTransform(count60, (latest) => Math.round(latest));
    const rounded40 = useTransform(count40, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            animate(count60, 60, { duration: 1.8, ease: "easeOut" });
            animate(count40, 40, { duration: 1.8, ease: "easeOut" });
        }
    }, [isInView]);


    return (
        <>
            <section className="section" ref={ref}>
                <div className="container">
                    <div className="compliance-operational-wrapper">
                        <div className="compliance-flexible-operations-left">
                            <div className=" compliance-operations-head-text-wrapper">
                                <h2 className="text-md">Flexible Operations with Built In Compliance Control</h2>
                                <p className="h6 text-rg">Enables operational teams to adapt workflows, timelines, and templates while maintaining full regulatory control</p>
                            </div>

                            <div className="compliance-operations-stats-wrapper">
                                <div className="compliance-operations-stat-card compliance-operations-stat-card-1">
                                    <motion.h2 className="h3 text-md"> <motion.span >{rounded60}</motion.span>%</motion.h2>
                                    <p className="text-rg text-18">Faster Workflow Adaptation</p>
                                </div>
                                <div className="compliance-operations-stat-card compliance-operations-stat-card-2">

                                </div>
                                <div className="compliance-operations-stat-card compliance-operations-stat-card-3">
                                    <motion.h2 className="h3 text-md"><motion.span>{rounded40}</motion.span>%</motion.h2>
                                    <p className="text-rg text-18">Reduction in SLA Breaches</p>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            className="compliance-flexible-operations-right"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div className="operational-card operational-card-1">
                                <motion.span
                                    className="operational-svg site-all-svg operational-svg-1"
                                    variants={iconVariants}
                                    style={{ originX: 0.5, originY: 0.5 }}
                                >
                                    <Image src="/images/compliancepage/config-workflows.svg" alt="Operational Card 1" width={32} height={32}></Image>
                                </motion.span>

                                <div className="operational-card-right">
                                    <h4 className="h5 text-md">Configurable Workflows</h4>

                                    <p className="h6 text-rg text-grey">Design and manage workflows by product, study, region, and case type to support diverse operational needs without code changes.</p>
                                </div>
                            </div>

                            <div className="operational-card operational-card-2">
                                <motion.span
                                    className="operational-svg site-all-svg operational-svg-2"
                                    variants={iconVariants}
                                    style={{ originX: 0.5, originY: 0.5 }}
                                >
                                    <Image src="/images/compliancepage/sla-management.svg" alt="Operational Card 2" width={32} height={32}></Image>
                                </motion.span>

                                <div className="operational-card-right">
                                    <h4 className="h5 text-md">SLA Management & Escalation</h4>

                                    <p className="h6 text-rg text-grey">Define, monitor, and enforce regulatory and operational SLAs, with automated alerts and escalations to ensure timely compliance.</p>
                                </div>
                            </div>

                            <div className="operational-card operational-card-3">
                                <motion.span
                                    className="operational-svg site-all-svg operational-svg-3"
                                    variants={iconVariants}
                                    style={{ originX: 0.5, originY: 0.5 }}
                                >

                                    <Image src="/images/compliancepage/case-lifecycle-config.svg" alt="Operational Card 3" width={32} height={32}></Image>
                                </motion.span>
                                <div className="operational-card-right">
                                    <h4 className="h5 text-md">Case Lifecycle Configuration</h4>

                                    <p className="h6 text-rg text-grey">Configure case statuses, transitions, and checkpoints to align with organizational processes and regulatory expectations.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}