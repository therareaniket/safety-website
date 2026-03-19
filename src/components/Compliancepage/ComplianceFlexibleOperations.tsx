'use client';

import Image from "next/image";
import { motion, useInView, Variants, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";


type ComplianceFlexibleOperationsProps = {
    complianceFlexibleOperationTitle: string
    complianceFlexibleOperationSubtitle: string
    statsNumericDescription1: string
    statsNumericDescription2: string

    complianceConfigWorkflowCard: {
        title: string
        description: string
    }

    complianceSlaManagementCard: {
        title: string
        description: string
    }

    complianceCaseLifecycleCard: {
        title: string
        description: string
    }
}

export default function ComplianceFlexibleOperations({ 
    complianceFlexibleOperationTitle, 
    complianceFlexibleOperationSubtitle, 
    complianceConfigWorkflowCard, complianceSlaManagementCard, complianceCaseLifecycleCard, statsNumericDescription1, statsNumericDescription2 }: ComplianceFlexibleOperationsProps) {
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
                                <h2 className="text-md">{complianceFlexibleOperationTitle}</h2>
                                <p className="h6 text-rg">{complianceFlexibleOperationSubtitle}</p>
                            </div>

                            <div className="compliance-operations-stats-wrapper">
                                <div className="compliance-operations-stat-card compliance-operations-stat-card-1">
                                    <motion.h2 className="h3 text-md"> <motion.span >{rounded60}</motion.span>%</motion.h2>
                                    <p className="text-rg text-18">{statsNumericDescription1}</p>
                                </div>
                                <div className="compliance-operations-stat-card compliance-operations-stat-card-2">

                                </div>
                                <div className="compliance-operations-stat-card compliance-operations-stat-card-3">
                                    <motion.h2 className="h3 text-md"><motion.span>{rounded40}</motion.span>%</motion.h2>
                                    <p className="text-rg text-18">{statsNumericDescription2}</p>
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
                                    <h4 className="h5 text-md">{complianceConfigWorkflowCard.title}</h4>

                                    <p className="h6 text-rg text-grey">{complianceConfigWorkflowCard.description}</p>
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
                                    <h4 className="h5 text-md">{complianceSlaManagementCard.title}</h4>

                                    <p className="h6 text-rg text-grey">{complianceSlaManagementCard.description}</p>
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
                                    <h4 className="h5 text-md">{complianceCaseLifecycleCard.title}</h4>

                                    <p className="h6 text-rg text-grey">{complianceCaseLifecycleCard.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}