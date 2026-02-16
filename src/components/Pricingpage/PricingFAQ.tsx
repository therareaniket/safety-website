
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";


export default function PricingFAQ() {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const faqs = [
        {
            question: 'Can I change plans later? ',
            answer: 'Yes, you can upgrade or downgrade your plan at any time as your needs change.'
        }, {
            question: 'Do you offer custom pricing?',
            answer: 'Yes, pricing can be customized based on your needs, usage volume, and service requirements.'
        }, {
            question: 'Is onboarding included? ',
            answer: 'Yes, onboarding and setup are included, helping your team get started quickly and confidently.'
        }, {
            question: 'Are there long-term contracts?',
            answer: 'Yes, flexible contract options are available, allowing you to choose terms that work best for you.'
        }, {
            question: 'How fast can we start? ',
            answer: 'Typically within a few business days, depending on the scope and requirements.'
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <>
            <section className="faq-wrapper section pt-0" ref={ref}>
                <div className="container">
                    <div className="faq-row flex">
                        <div className="fq-col-one">
                            <motion.div
                                initial={{ y: 0 }}
                                animate={{ y: [0, -18, 0] }}   // up → down → up loop
                                transition={{
                                    duration: 1.2,
                                    ease: "easeInOut",
                                    repeat: Infinity,            // infinite bounce
                                    repeatType: "loop"
                                }}
                            >
                                <Image className="faq-img" src='images/homepage/faq-icon.svg' alt="FAQ" width={211} height={226} priority />
                            </motion.div>
                            <h2 className="text-md text-black">Plans Designed for Smarter Safety Management</h2>
                            <p className="h6 op-desc text-black">Here are answers to the top questions teams ask about DhatuSafety, helping you understand our features, workflows.</p>
                        </div>

                        <div className="fq-col-two">
                            <div className="faq-accordian" id="accordionExample">
                                {faqs.map((item, index) => (
                                    <div className="accordion-item" key={index}>
                                        <h3
                                            className={`accordion-header relative h6 mb-0 ${activeIndex === index ? "active" : ""
                                                }`}
                                        >
                                            <button
                                                className={`accordion-button flex ${activeIndex === index ? "active" : ""
                                                    }`}
                                                onClick={() =>
                                                    setActiveIndex(
                                                        activeIndex === index ? null : index
                                                    )
                                                }
                                                aria-expanded={activeIndex === index}
                                            >
                                                <span className="fq-text">{item.question}</span>

                                                <span
                                                    className={`fq-show-icon centered-block absolute ${activeIndex === index ? "minus" : "plus"
                                                        }`}
                                                >
                                                    <span className="f-plus absolute">
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 8H0V6H6V0H8V6H14V8H8V14H6V8Z" fill="#1C1B1F" />
                                                        </svg>
                                                    </span>
                                                    <span className="f-minus absolute">
                                                        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M0 2V0H14V2H0Z" fill="#1C1B1F" />
                                                        </svg>
                                                    </span>
                                                </span>
                                            </button>
                                        </h3>

                                        <div
                                            className={`accordion-content ${activeIndex === index ? "open" : ""
                                                }`}
                                        >
                                            <div className="accordion-inner">
                                                <div className="accordion-body">
                                                    <p className="text-18">{item.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}