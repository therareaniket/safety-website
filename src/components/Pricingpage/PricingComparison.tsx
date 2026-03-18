'use client';

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function PricingPlanFeatures() {
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
                    <h2 className="text-md text-white">Simple Comparison</h2>
                    <p className="h6 text-white">See how our plans compare at a glance</p>
                </div>
                
                <motion.div
                    className="compari-tbl"
                    variants={containerVariants}
                    initial={disableAnimation ? false : "hidden"}
                    animate={ disableAnimation ? false : isInView ? "visible" : "hidden"}
                >
                    <div className="table-headers">
                        <div className="tbl-col-1"><span className="h5 text-md text-white">Feature</span></div>

                        <div className="tbl-col-2"><span className="h5 text-rg text-white">Service Capacity</span></div>

                        <div className="tbl-col-3"><span className="h5 text-rg text-white">Turnaround Time</span></div>

                        <div className="tbl-col-4"><span className="h5 text-rg text-white">Dedicated Contact</span></div>

                        <div className="tbl-col-5"><span className="h5 text-rg text-white">Customization</span></div>

                        <div className="tbl-col-6"> <span className="h5 text-rg text-white">Support Level</span></div>
                    </div>

                    <motion.div className="table-standard" variants={itemVariants}>
                        <div className="tbl-col-1"><span className="h5 text-md text-white">Standard</span></div>

                        <div className="tbl-col-2"><span className="h6 text-rg text-grey">Medium</span></div>

                        <div className="tbl-col-3"><span className="h6 text-rg text-grey">Faster</span></div>

                        <div className="tbl-col-4"><span className="h6 text-rg text-grey">Yes</span></div>

                        <div className="tbl-col-5"><span className="h6 text-rg text-grey">Limited</span></div>

                        <div className="tbl-col-6"><span className="h6 text-rg text-grey">Priority</span></div>
                    </motion.div>

                    <motion.div className="table-enterprise" variants={itemVariants}>
                        <div className="tbl-col-1"><span className="h5 text-md text-white">Enterprise</span></div>

                        <div className="tbl-col-2"><span className="h6 text-rg text-grey">High</span></div>

                        <div className="tbl-col-3"><span className="h6 text-rg text-grey">Priority</span></div>

                        <div className="tbl-col-4"><span className="h6 text-rg text-grey">Yes</span></div>

                        <div className="tbl-col-5"><span className="h6 text-rg text-grey">Full</span></div>

                        <div className="tbl-col-6"><span className="h6 text-rg text-grey">24/7</span></div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}