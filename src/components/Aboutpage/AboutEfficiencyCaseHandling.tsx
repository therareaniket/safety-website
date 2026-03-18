'use client'
import { type SwiperProps } from 'swiper/react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { motion, Variants } from "framer-motion";
import { a } from 'framer-motion/client';


type AboutStepsProps = {
    aboutComplianceStepsTitle: string;
    aboutComplianceStepsSubtitle: string;

    aboutStepCard1: {
        span: string;
        title: string;
        point1: string;
        point2: string;
        point3: string;
        point4: string;
    }

    aboutStepCard2: {
        span: string;
        title: string;
        point1: string;
        point2: string;
        point3: string;
        point4: string;
    }

    aboutStepCard3: {
        span: string;
        title: string;
        point1: string;
        point2: string;
        point3: string;
        point4: string;
    }

        aboutStepCard4: {
        span: string;
        title: string;
        point1: string;
        point2: string;
        point3: string;
        point4: string;
    }
}

export default function AboutEfficiencyCaseHandling({ aboutComplianceStepsTitle, aboutComplianceStepsSubtitle, aboutStepCard1, aboutStepCard2, aboutStepCard3, aboutStepCard4 }: AboutStepsProps) {
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
                        <h2 className="text-md">{aboutComplianceStepsTitle}</h2>

                        <p className="text-rg h6">{aboutComplianceStepsSubtitle}</p>
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

                            <span className="text-mid-grey text-18">{aboutStepCard1.span}</span>

                            <h3 className="text-md h5">{aboutStepCard1.title}</h3>

                            <ul className="text-rg h6">
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard1.point1}</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard1.point2}</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard1.point3}</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard1.point4}</li>
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

                            <span className="text-mid-grey text-18">{aboutStepCard2.span}</span>

                            <h3 className="text-md h5">{aboutStepCard2.title}</h3>

                            <ul className="text-rg h6">
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard2.point1}</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard2.point2}</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard2.point3}</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard2.point4}</li>
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

                            <span className="text-mid-grey text-18">{aboutStepCard3.span}</span>

                            <h3 className="text-md h5">{aboutStepCard3.title}</h3>

                            <ul className="text-rg h6">
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard3.point1}</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard3.point2}</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard3.point3}</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard3.point4}</li>
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

                            <span className="text-mid-grey text-18">{aboutStepCard4.span}</span>

                            <h3 className="text-md h5">{aboutStepCard4.title}</h3>

                            <ul className="text-rg h6">
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard4.point1}</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard4.point2}</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard4.point3}</li>
                                <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard4.point4}</li>
                            </ul>
                        </motion.div>
                    </motion.div>

                    <div className="efficiency-steps-wrapper-responsive">
                        <Swiper {...swiperConfig} className='aboutSwiper-wrapper'>
                            <SwiperSlide className='efficiency-step-card efficiency-step-card-1'>
                                <span className="text-mid-grey text-18 text-md">{aboutStepCard1.span}</span>

                                <h3 className="text-md h5">{aboutStepCard1.title}</h3>

                                <ul className="text-rg h6">
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span> {aboutStepCard1.point1} </li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span> {aboutStepCard1.point2} </li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span> {aboutStepCard1.point3} </li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span> {aboutStepCard1.point4} </li>
                                </ul>
                            </SwiperSlide>

                            <SwiperSlide className='efficiency-step-card efficiency-step-card-2'>
                                <span className="text-mid-grey text-18 text-md">{aboutStepCard2.span}</span>

                                <h3 className="text-md h5">{aboutStepCard2.title}</h3>

                                <ul className="text-rg h6">
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image>{aboutStepCard2.point1}</span></li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image>{aboutStepCard2.point2}</span></li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image>{aboutStepCard2.point3}</span></li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image>{aboutStepCard2.point4}</span></li>
                                </ul>
                            </SwiperSlide>

                            <SwiperSlide className='efficiency-step-card efficiency-step-card-3'>
                                <span className="text-mid-grey text-18 text-md">{aboutStepCard3.span}</span>

                                <h3 className="text-md h5">{aboutStepCard3.title}</h3>

                                <ul className="text-rg h6">
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard3.point1}</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard3.point2}</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard3.point3}</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard3.point4}</li>
                                </ul>
                            </SwiperSlide>

                            <SwiperSlide className='efficiency-step-card efficiency-step-card-4'>
                                <span className="text-mid-grey text-18 text-md">{aboutStepCard4.span}</span>

                                <h3 className="text-md h5">{aboutStepCard4.title}</h3>

                                <ul className="text-rg h6">
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard4.point1}</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard4.point2}</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard4.point3}</li>
                                    <li><span><Image src="/images/aboutpage/about-steps-check.svg" alt="check-icon" width={10} height={7}></Image></span>{aboutStepCard4.point4}</li>
                                </ul>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}