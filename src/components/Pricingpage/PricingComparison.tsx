'use client';
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function PricingPlanFeatures() {
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

                {/* <div className="pricing-comparison-inner">
                    <div className="pc-item flex items-center">
                        <div className="pc-type"><h3 className="h4 text-md text-white mb-0">Feature</h3></div>
                        <div className="pc-text one"><h4 className="h5 text-rg text-white">Service Capacity</h4></div>
                        <div className="pc-text two"><h4 className="h5 text-rg text-white">Turnaround Time</h4></div>
                        <div className="pc-text three"><h4 className="h5 text-rg text-white">Dedicated Contact</h4></div>
                        <div className="pc-text four"><h4 className="h5 text-rg text-white">Customization</h4></div>
                        <div className="pc-text five"><h4 className="h5 text-rg text-white">Support Level</h4></div>
                    </div>

                    <div className="pc-item two flex items-center">
                        <div className="pc-type standard"><h3 className="h4 text-md text-white mb-0">Standard</h3></div>
                        <div className="pc-text one"><h4 className="h6 text-mid-grey mb-0">Medium</h4></div>
                        <div className="pc-text two"><h4 className="h6 text-mid-grey mb-0">Faster</h4></div>
                        <div className="pc-text three"><h4 className="h6 text-mid-grey mb-0">Yes</h4></div>
                        <div className="pc-text four"><h4 className="h6 text-mid-grey mb-0">Limited</h4></div>
                        <div className="pc-text five"><h4 className="h6 text-mid-grey mb-0">Priority</h4></div>
                    </div>

                    <div className="pc-item three flex items-center">
                        <div className="pc-type enterprise"><h3 className="h4 text-md text-white mb-0">Enterprise</h3></div>
                        <div className="pc-text one"><h4 className="h6 text-mid-grey mb-0">High</h4></div>
                        <div className="pc-text two"><h4 className="h6 text-mid-grey mb-0">Priority</h4></div>
                        <div className="pc-text three"><h4 className="h6 text-mid-grey mb-0">Yes</h4></div>
                        <div className="pc-text four"><h4 className="h6 text-mid-grey mb-0">Full</h4></div>
                        <div className="pc-text five"><h4 className="h6 text-mid-grey mb-0">24/7</h4></div>
                    </div>
                </div> */}


                <motion.div
                    className="compari-tbl"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
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