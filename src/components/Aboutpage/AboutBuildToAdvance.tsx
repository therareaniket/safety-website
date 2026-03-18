'use client';

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type AboutBuildProps = {
    aboutBuildTitle: string;
    aboutBuildSubtitle: string;

    aboutBuildToAdvanceCardWrapper: {
        detail1Title: string;
        detail1Description: string;

        detail2Title: string;
        detail2Description: string;
    }
}

export default function AboutBuildToAdvance({ aboutBuildTitle, aboutBuildSubtitle, aboutBuildToAdvanceCardWrapper }: AboutBuildProps) {
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
                        <h2 className="text-md">{aboutBuildTitle}</h2>
                        <p className="text-rg h6">
                            {aboutBuildSubtitle}
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
                                <h3 className="text-md h5">{aboutBuildToAdvanceCardWrapper.detail1Title}</h3>
                                <p className="h6 text-rg">
                                    {aboutBuildToAdvanceCardWrapper.detail1Description}
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
                                <h3 className="text-md h5">{aboutBuildToAdvanceCardWrapper.detail2Title}</h3>
                                <p className="h6 text-rg">
                                    {aboutBuildToAdvanceCardWrapper.detail2Description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
}
