'use client';

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type PlanCardProps = {
    planIncludesTitle: string;
    planIncludesSubtitle: string;

    planIncludesCard1: {
        title: string;
        description: string;
    }

    planIncludesCard2: {
        title: string;
        description: string;
    }

    planIncludesCard3: {
        title: string;
        description: string;
    }

    planIncludesCard4: {
        title: string;
        description: string;
    }

    planIncludesCard5: {
        title: string;
        description: string;
    }
}

export default function PricingPlanFeatures( { planIncludesTitle, planIncludesSubtitle, planIncludesCard1, planIncludesCard2, planIncludesCard3, planIncludesCard4, planIncludesCard5 } : PlanCardProps ) {
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

    const itemVariants: Variants = {
        hidden: {
            scale: 1.5,
            opacity: 0
        },

        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (

        <section className="pricing-feature-wrapper section pt-0" ref={ref}>
            <div className="container">
                <div className="main-title center text-center">
                    <h2 className="text-md text-black">{planIncludesTitle}</h2>
                    <p className="h6">{planIncludesSubtitle}</p>
                </div>


                <motion.div
                    className="pricing-feature-inner flex"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <motion.div className="pf-item text-center blue" variants={itemVariants}>
                        <motion.div
                            className="pf-icon centered-block rounded-full bg-blue"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/pf-01.svg' alt="Compliant Process" width={16.67} height={15.83} priority />
                        </motion.div>
                        <div className="pf-content">
                            <h3 className="h5 text-md">{planIncludesCard1.title}</h3>
                            <p className="h6 text-grey mb-0">{planIncludesCard1.description}</p>
                        </div>
                    </motion.div>

                    <motion.div className="pf-item text-center orange" variants={itemVariants}>
                        <motion.div
                            className="pf-icon centered-block rounded-full bg-orange"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/pf-02.svg' alt="Experienced Professionals" width={16.67} height={15.83} priority />
                        </motion.div>
                        <div className="pf-content">
                            <h3 className="h5 text-md">{planIncludesCard2.title}</h3>
                            <p className="h6 text-grey mb-0">{planIncludesCard2.description}</p>
                        </div>
                    </motion.div>

                    <motion.div className="pf-item text-center green" variants={itemVariants}>
                        <motion.div
                            className="pf-icon centered-block rounded-full bg-green"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/pf-03.svg' alt="Quality Checks" width={13.33} height={17.5} priority />
                        </motion.div>
                        <div className="pf-content">
                            <h3 className="h5 text-md">{planIncludesCard3.title}</h3>
                            <p className="h6 text-grey mb-0">{planIncludesCard3.description}</p>
                        </div>
                    </motion.div>

                    <motion.div className="pf-item text-center yellow" variants={itemVariants}>
                        <motion.div
                            className="pf-icon centered-block rounded-full bg-yellow"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/pf-04.svg' alt="Secure Data Handling" width={13.33} height={16.67} priority />
                        </motion.div>
                        <div className="pf-content">
                            <h3 className="h5 text-md">{planIncludesCard4.title}</h3>
                            <p className="h6 text-grey mb-0">{planIncludesCard4.description}</p>
                        </div>
                    </motion.div>

                    <motion.div className="pf-item text-center bluish-purple" variants={itemVariants}>
                        <motion.div
                            className="pf-icon centered-block rounded-full bg-bluish-purple"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/pf-05.svg' alt="Compliant Process" width={20} height={15} priority />
                        </motion.div>
                        <div className="pf-content">
                            <h3 className="h5 text-md">{planIncludesCard5.title}</h3>
                            <p className="h6 text-grey mb-0">{planIncludesCard5.description}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}