'use client'
import { type SwiperProps } from 'swiper/react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, Variants } from "framer-motion";


export default function AboutEfficiencyCaseHandling() {
    const containerVariant = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.55, 
            },
        },
    };

    const itemVariant: Variants = {
        hidden: {
            opacity: 0,
            x: -80,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };

        const arrowVariant: Variants = {
        hidden: {
            opacity: 0,
            x: -30,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeOut",
            },
        },
    };

    const swiperConfig: SwiperProps = {
        modules: [Pagination, Autoplay],
        spaceBetween: 20,
        slidesPerView: 2,
        loop: true,

        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        pagination: {
            clickable: true,
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            392: {
                slidesPerView: 1,
            },
            401: {
                slidesPerView: 2,
            },
        },
    };

    return (
        <>
            <section className="section" style={{ paddingTop: '0' }}>
                <div className="container">
                    <div className="efficiencycase-wrapper">
                        <h2 className="text-md">Efficient Case Handling at Every Step</h2>

                        <p className="text-rg h6">Optimize how cases are collected, processed, reviewed, and submitted with an intelligent and guided workflow.</p>
                    </div>

                    <motion.div
                        className="efficiency-steps-wrapper"
                        variants={containerVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.4 }}
                    >

                        <motion.div
                            className="efficiency-step-card efficiency-step-card-1"
                            variants={itemVariant}
                        >

                            <span className="text-mid-grey text-18">Step 01</span>

                            <h3 className="text-md h5">Intake & Case Creation</h3>

                            <ul className="text-rg h6">
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Multi-source intake</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Triage and prioritization</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>New case creation</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Case Linking</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="about-steps-arrow"
                            variants={arrowVariant}
                        >

                            <Image src="/images/aboutpage/about-steps-arrow.svg" alt="arrow-icon" width={21} height={21}></Image>
                        </motion.div>

                        <motion.div
                            className="efficiency-step-card efficiency-step-card-2"
                            variants={itemVariant}
                        >

                            <span className="text-mid-grey text-18">Step 02</span>

                            <h3 className="text-md h5">Processing & Medical Review</h3>

                            <ul className="text-rg h6">
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Case data management</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Medical coding (MedDRA)</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Seriousness, causality</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Follow-Ups</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="about-steps-arrow about-steps-arrow-1"
                            variants={arrowVariant}
                        >

                            <Image src="/images/aboutpage/about-steps-arrow.svg" alt="arrow-icon" width={21} height={21}></Image>
                        </motion.div>

                        <motion.div
                            className="efficiency-step-card efficiency-step-card-3"
                            variants={itemVariant}
                        >

                            <span className="text-mid-grey text-18">Step 03</span>

                            <h3 className="text-md h5">Regulatory & Report</h3>

                            <ul className="text-rg h6">
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>E2B (R3), CIOMS, PDFs</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Aggregate reports (PSUR)</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>New case creation</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Follow‑Up Reporting</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="about-steps-arrow about-steps-arrow-2"
                            variants={arrowVariant}
                        >

                            <Image src="/images/aboutpage/about-steps-arrow.svg" alt="arrow-icon" width={21} height={21}></Image>
                        </motion.div>

                        <motion.div
                            className="efficiency-step-card efficiency-step-card-4"
                            variants={itemVariant}
                        >

                            <span className="text-mid-grey text-18">Step 04</span>

                            <h3 className="text-md h5">Signal & Safety Oversight</h3>

                            <ul className="text-rg h6">
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Signal detection</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Compliance monitoring</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Audit trails</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Portfolio Oversight</li>
                            </ul>
                        </motion.div>
                    </motion.div>

                    <div className="efficiency-steps-wrapper-responsive">
                        <Swiper {...swiperConfig} className='aboutSwiper-wrapper'>
                            <SwiperSlide className='efficiency-step-card efficiency-step-card-1'>
                                <span className="text-mid-grey text-18 text-md">Step 01</span>

                                <h3 className="text-md h5">Intake & Case Creation</h3>

                                <ul className="text-rg h6">
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Multi-source intake</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Triage and prioritization</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>New case creation</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Case Linking</li>
                                </ul>
                            </SwiperSlide>

                            <SwiperSlide className='efficiency-step-card efficiency-step-card-2'>
                                <span className="text-mid-grey text-18 text-md">Step 02</span>

                                <h3 className="text-md h5">Case Processing & Medical Review</h3>

                                <ul className="text-rg h6">
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Case data management</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Medical coding (MedDRA)</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Seriousness, causality</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Case Linking</li>
                                </ul>
                            </SwiperSlide>

                            <SwiperSlide className='efficiency-step-card efficiency-step-card-3'>
                                <span className="text-mid-grey text-18 text-md">Step 03</span>

                                <h3 className="text-md h5">Regulatory & Aggregate Report</h3>

                                <ul className="text-rg h6">
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>E2B (R3), CIOMS, PDFs</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Aggregate reports (PSUR)</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>New case creation</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Follow‑Up Reporting</li>
                                </ul>
                            </SwiperSlide>

                            <SwiperSlide className='efficiency-step-card efficiency-step-card-4'>
                                <span className="text-mid-grey text-18 text-md">Step 04</span>

                                <h3 className="text-md h5">Signal & Safety Oversight</h3>

                                <ul className="text-rg h6">
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Signal detection</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Compliance monitoring</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Audit trails</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>Portfolio Oversight</li>
                                </ul>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}