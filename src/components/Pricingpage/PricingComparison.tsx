'use client';

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

type ComparisonProps = {
    pricingComparisonTitle: string;
    pricingComparisonSubtitle: string;

    pricingComparisonRow1: {
        pointer1: string;
        pointer2: string;
        pointer3: string;
        pointer4: string;
        pointer5: string;
        pointer6: string;
    }

    pricingComparisonRow2: {
        pointer1: string;
        pointer2: string;
        pointer3: string;
        pointer4: string;
        pointer5: string;
        pointer6: string;
    }

    pricingComparisonRow3: {
        pointer1: string;
        pointer2: string;
        pointer3: string;
        pointer4: string;
        pointer5: string;
        pointer6: string;
    }
}

export default function PricingPlanFeatures({ 
    pricingComparisonTitle, 
    pricingComparisonSubtitle,

    pricingComparisonRow1,
    pricingComparisonRow2,
    pricingComparisonRow3
 }: ComparisonProps) {
    const ref = useRef(null);
    const shouldReduceMotion = useReducedMotion();
    const isDesktop =
        typeof window !== "undefined" && window.innerWidth > 1023;

    const disableAnimation = shouldReduceMotion || !isDesktop;

    const isInView = useInView(ref, {
        once: true,
        margin: "-100px 0px -100px 0px",
        amount: 0.5
    });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 1.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: {
            y: -50,
            opacity: 0
        },

        visible: {
            y: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    return (

        <section className="pricing-comparison-wrapper bg-dark-grey section" ref={ref}>
            <div className="container">
                <div className="main-title center text-center">
                    <h2 className="text-md text-white">{pricingComparisonTitle}</h2>
                    <p className="h6 text-white">{pricingComparisonSubtitle}</p>
                </div>

                <motion.div
                    className="compari-tbl"
                    variants={containerVariants}
                    initial={disableAnimation ? false : "hidden"}
                    animate={disableAnimation ? false : isInView ? "visible" : "hidden"}
                >
                    <div className="table-headers">
                        <div className="tbl-col-1"><span className="h5 text-md text-white">{pricingComparisonRow1.pointer1}</span></div>

                        <div className="tbl-col-2"><span className="h5 text-rg text-white">{pricingComparisonRow1.pointer2}</span></div>

                        <div className="tbl-col-3"><span className="h5 text-rg text-white">{pricingComparisonRow1.pointer3}</span></div>

                        <div className="tbl-col-4"><span className="h5 text-rg text-white">{pricingComparisonRow1.pointer4}</span></div>

                        <div className="tbl-col-5"><span className="h5 text-rg text-white">{pricingComparisonRow1.pointer5}</span></div>

                        <div className="tbl-col-6"> <span className="h5 text-rg text-white">{pricingComparisonRow1.pointer6}</span></div>
                    </div>

                    <motion.div className="table-standard" variants={itemVariants}>
                        <div className="tbl-col-1"><span className="h5 text-md text-white">{pricingComparisonRow2.pointer1}</span></div>

                        <div className="tbl-col-2"><span className="h6 text-rg text-grey">{pricingComparisonRow2.pointer2}</span></div>

                        <div className="tbl-col-3"><span className="h6 text-rg text-grey">{pricingComparisonRow2.pointer3}</span></div>

                        <div className="tbl-col-4"><span className="h6 text-rg text-grey">{pricingComparisonRow2.pointer4}</span></div>

                        <div className="tbl-col-5"><span className="h6 text-rg text-grey">{pricingComparisonRow2.pointer5}</span></div>

                        <div className="tbl-col-6"><span className="h6 text-rg text-grey">{pricingComparisonRow2.pointer6}</span></div>
                    </motion.div>

                    <motion.div className="table-enterprise" variants={itemVariants}>
                        <div className="tbl-col-1"><span className="h5 text-md text-white">{pricingComparisonRow3.pointer1}</span></div>

                        <div className="tbl-col-2"><span className="h6 text-rg text-grey">{pricingComparisonRow3.pointer2}</span></div>

                        <div className="tbl-col-3"><span className="h6 text-rg text-grey">{pricingComparisonRow3.pointer3}</span></div>

                        <div className="tbl-col-4"><span className="h6 text-rg text-grey">{pricingComparisonRow3.pointer4}</span></div>

                        <div className="tbl-col-5"><span className="h6 text-rg text-grey">{pricingComparisonRow3.pointer5}</span></div>

                        <div className="tbl-col-6"><span className="h6 text-rg text-grey">{pricingComparisonRow3.pointer6}</span></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}