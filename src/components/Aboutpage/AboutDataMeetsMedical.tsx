'use client';

import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { a } from "framer-motion/client";

type AboutDataMeetsMedicalProps = {
    aboutDataMeetsMedicalTitle: string;
    aboutDataMeetsMedicalSubtitle: string;

    aboutDataMeetsCard1: {
        title: string;
        description: string;
    }
          aboutDataMeetsCard2: {
        title: string;
        description: string;
      }

      aboutDataMeetsCard3: {
        title: string;
        description: string;
      }

      aboutDataMeetsCard4: {
        title: string;
        description: string;
      }
            aboutIntegrationCard: {
        title: string;
        description: string;
      }

      aboutCodingCard: {
        title: string;
        description: string;
      }

      aboutAuditCard: {
        title: string;
        description: string;
      }
}

export default function AboutDataMeetsMedical( { aboutDataMeetsMedicalTitle, aboutDataMeetsMedicalSubtitle, aboutDataMeetsCard1 , aboutDataMeetsCard2, aboutDataMeetsCard3, aboutDataMeetsCard4 , aboutIntegrationCard, aboutCodingCard, aboutAuditCard} : AboutDataMeetsMedicalProps) {
    const ref = useRef(null);

    const isDesktop =
        typeof window !== "undefined" ? window.innerWidth > 1023 : true;

    const isInView = useInView(ref, {
        once: true,
        margin: "-100px 0px -100px 0px",
        amount: 0.1
    });


    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: isDesktop ? 0.5 : 0.3
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
            <section className="about-data-meets-medical-wrapper section" ref={ref}>
                <div className="container">
                    <motion.div
                        className="about-data-meets-medical-inner"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        <h2 className="text-md text-white">
                            {aboutDataMeetsMedicalTitle}
                        </h2>
                        <p className="data-meets-medical-desc text-rg h6 text-white">
                            {aboutDataMeetsMedicalSubtitle}
                        </p>

                        <div className="about-data-meets-medical-cards-wrapper about-data-meets-medical-cards-wrapper-desktop">
                            <div className="about-medical-card-row about-medical-card-row-1">
                                <div className="about-data-card about-data-card-1">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-1"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/seriousness-assessment-card-1.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>
                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">{aboutDataMeetsCard1.title}</h3>

                                        <p className="text-rg text-18 text-grey">{aboutDataMeetsCard1.description}</p>
                                    </div>
                                </div>

                                <div className="about-data-card about-data-card-2">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-2"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/structurednarrative-card-2.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>

                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">{aboutDataMeetsCard2.title}</h3>

                                        <p className="text-rg text-18 text-grey">{aboutDataMeetsCard2.description}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-medical-card-row about-medical-card-row-2">
                                <div className=" about-data-card-5">
                                    <Image src="/images/aboutpage/where-data-meets-medical-image.webp" alt="image" width={613} height={366}></Image>
                                </div>
                            </div>

                            <div className="about-medical-card-row about-medical-card-row-3">
                                <div className="about-data-card about-data-card-3">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-3"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/reference-safety-card-3.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>


                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">{aboutDataMeetsCard3.title}</h3>

                                        <p className="text-rg text-18 text-grey">{aboutDataMeetsCard3.description}</p>
                                    </div>
                                </div>

                                <div className="about-data-card about-data-card-4">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-4"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/controlled-medical-approval-card-4.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>
                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">{aboutDataMeetsCard4.title}</h3>

                                        <p className="text-rg text-18 text-grey">{aboutDataMeetsCard4.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-data-meets-medical-cards-wrapper about-data-meets-medical-cards-wrapper-responsive">
                            <div className=" about-medical-card-row-2">
                                <div className=" about-data-card-5">
                                    <Image src="/images/aboutpage/where-data-meets-medical-image.webp" alt="image" width={613} height={366}></Image>
                                </div>
                            </div>

                            <div className="about-medical-card-row">
                                <div className="about-data-card about-data-card-1">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-1"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/seriousness-assessment-card-1.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>

                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">{aboutDataMeetsCard1.title}</h3>

                                        <p className="text-rg text-18 text-grey">{aboutDataMeetsCard1.description}</p>
                                    </div>
                                </div>

                                <div className="about-data-card about-data-card-2">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-2"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/structurednarrative-card-2.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>

                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">{aboutDataMeetsCard2.title}</h3>

                                        <p className="text-rg text-18 text-grey">{aboutDataMeetsCard2.description}</p>
                                    </div>
                                </div>

                                <div className="about-data-card about-data-card-3">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-3"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/reference-safety-card-3.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>

                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">{aboutDataMeetsCard3.title}</h3>

                                        <p className="text-rg text-18 text-grey">{aboutDataMeetsCard3.description}</p>
                                    </div>
                                </div>

                                <div className="about-data-card about-data-card-4">
                                    <motion.span
                                        className="about-data-cards-svg site-all-svg about-data-cards-svg-4"
                                        variants={iconVariants}
                                        style={{ originX: 0.5, originY: 0.5 }}
                                    >
                                        <Image src="/images/aboutpage/controlled-medical-approval-card-4.svg" alt="medical icon" width={24} height={24}></Image>
                                    </motion.span>

                                    <div className="about-data-card-text">
                                        <h3 className="h5 text-md text-white">{aboutDataMeetsCard4.title}</h3>

                                        <p className="text-rg text-18 text-grey">{aboutDataMeetsCard4.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="medical-detail-cards-wrapper">
                            <div className="medical-detail-cards">
                                <h4 className="h5 text-md text-white">{aboutIntegrationCard.title}</h4>

                                <p className="text-rg text-18 text-grey">
                                    {aboutIntegrationCard.description}
                                </p>
                            </div>

                            <div className="medical-detail-cards">
                                <h4 className="h5 text-md text-white">{aboutCodingCard.title}</h4>

                                <p className="text-rg text-18 text-grey">
                                    {aboutCodingCard.description}
                                </p>
                            </div>

                            <div className="medical-detail-cards">
                                <h4 className="h5 text-md text-white">{aboutAuditCard.title}</h4>

                                <p className="text-rg text-18 text-grey">
                                    {aboutAuditCard.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}