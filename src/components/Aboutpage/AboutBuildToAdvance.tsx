'use client';

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function AboutBuildToAdvance() {
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
        <section className="section" ref={ref}>
            <div className="container">
                <div className="build-to-advance-wrapper">
                    <div className="build-to-advance-left-wrapper">
                        <h2 className="text-md">Built to Advance Pharmacovigilance with Confidence</h2>
                        <p className="text-rg h6">
                            DhatuSafety is a modern pharmacovigilance platform designed to help life sciences organizations manage safety data with clarity, control, and regulatory confidence.
                        </p>
                    </div>

                    <motion.div
                        className="build-to-advance-right-wrapper"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >

                        <div className="compliance-driven-by">
                            <motion.span
                                className="build-toadvance-icon site-all-svg"
                                variants={iconVariants}

                                style={{ originX: 0.5, originY: 0.5 }}
                            >
                                <Image src="/images/aboutpage/compliace-driven-icon.svg" alt="compliance-driven-icon" width={26} height={26} />
                            </motion.span>

                            <div className="compliance-driven-wrapper">
                                <h3 className="text-md h5">Compliance-Driven by Design</h3>
                                <p className="h6 text-rg">
                                    It is built from the ground up to align with global pharmacovigilance quality expectations.
                                </p>
                            </div>
                        </div>

                        <div className="build-for-real-world">
                            <motion.span
                                className="build-toadvance-icon site-all-svg build-for-safety-Operations"
                                variants={iconVariants}
                                style={{ originX: 0.5, originY: 0.5 }}
                            >
                                <Image src="/images/aboutpage/build-real-safety.svg" alt="compliance-driven-icon" width={26} height={26} />
                            </motion.span>

                            <div className="compliance-driven-wrapper">
                                <h3 className="text-md h5">Built for Real-World Safety Operations</h3>
                                <p className="h6 text-rg">
                                    Shaped by real pharmacovigilance workflows supporting sponsors, CROs, multi-region environments.
                                </p>
                            </div>
                        </div>
                </motion.div>
            </div>
        </div>
        </section >
    );
}
