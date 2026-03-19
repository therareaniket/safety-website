'use client';

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type ServiceOptionalProps = {
    pricingOptionalServiceTitle: string;
    pricingOptionalServiceSubtitle: string;

    pricingOptionalServiceCard1: {
        title: string;
        description: string;
    }

    pricingOptionalServiceCard2: {
        title: string;
        description: string;
    }

    pricingOptionalServiceCard3: {
        title: string;
        description: string;
    }

    pricingOptionalServiceCard4: {
        title: string;
        description: string;
    }

    pricingOptionalServiceCard5: {
        title: string;
        description: string;
    }

    pricingOptionalServiceCard6: {
        title: string;
        description: string;
    }
}

export default function PricingServices({ pricingOptionalServiceTitle, pricingOptionalServiceSubtitle, pricingOptionalServiceCard1, pricingOptionalServiceCard2, pricingOptionalServiceCard3, pricingOptionalServiceCard4, pricingOptionalServiceCard5, pricingOptionalServiceCard6  } : ServiceOptionalProps) {
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

        <section className="pricing-services-wrapper section" ref={ref}>
            <div className="container">
                <div className="main-title center text-center">
                    <h2 className="text-md text-black">{pricingOptionalServiceTitle}</h2>
                    <p className="h6">{pricingOptionalServiceSubtitle}</p>
                </div>

                <motion.div
                    className="pricing-services-inner flex"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="ps-item flex green">
                        <motion.div
                            className="ps-icon centered-block rounded-full bg-green"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/ps-01.svg' alt="Additional Service Capacity" width={18.44} height={16} priority />
                        </motion.div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">{pricingOptionalServiceCard1.title}</h3>
                            <p className="h6 text-grey mb-0">{pricingOptionalServiceCard1.description}</p>
                        </div>
                    </div>
                    <div className="ps-item flex blue">
                        <motion.div
                            className="ps-icon centered-block rounded-full bg-blue"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/ps-02.svg' alt="Priority Turnaround" width={16.89} height={17.78} priority />
                        </motion.div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">{pricingOptionalServiceCard2.title}</h3>
                            <p className="h6 text-grey mb-0">{pricingOptionalServiceCard2.description}</p>
                        </div>
                    </div>
                    <div className="ps-item flex yellow">
                        <motion.div
                            className="ps-icon centered-block rounded-full bg-yellow"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/ps-03.svg' alt="Training & Onboarding" width={16} height={17.78} priority />
                        </motion.div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">{pricingOptionalServiceCard3.title}</h3>
                            <p className="h6 text-grey mb-0">{pricingOptionalServiceCard3.description}</p>
                        </div>
                    </div>
                    <div className="ps-item flex purple">
                        <motion.div
                            className="ps-icon centered-block rounded-full bg-purple"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/ps-04.svg' alt="Custom Reports" width={16.89} height={16} priority />
                        </motion.div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">{pricingOptionalServiceCard4.title}</h3>
                            <p className="h6 text-grey mb-0">{pricingOptionalServiceCard4.description}</p>
                        </div>
                    </div>
                    <div className="ps-item flex orange">
                        <motion.div
                            className="ps-icon centered-block rounded-full bg-orange"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/ps-05.svg' alt="System Setup & Migration" width={17.78} height={16} priority />
                        </motion.div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">{pricingOptionalServiceCard5.title}</h3>
                            <p className="h6 text-grey mb-0">{pricingOptionalServiceCard5.description}</p>
                        </div>
                    </div>
                    <div className="ps-item flex bluish-purple">
                        <motion.div
                            className="ps-icon centered-block rounded-full bg-bluish-purple"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/ps-06.svg' alt="Inspection Support" width={16.9} height={17.78} priority />
                        </motion.div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">{pricingOptionalServiceCard6.title}</h3>
                            <p className="h6 text-grey mb-0">{pricingOptionalServiceCard6.description}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}