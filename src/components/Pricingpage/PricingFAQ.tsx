
"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";


type PricingFaqProps = {
    pricingFaqTitle: string;
    pricingFaqSubtitle: string;

    pricingFaqWrapper: {
        question1: string;
        answer1: string;
        question2: string;
        answer2: string;
        question3: string;
        answer3: string;
        question4: string;
        answer4: string;
        question5: string;
        answer5: string;
    }
};

export default function PricingFAQ({ pricingFaqTitle, pricingFaqSubtitle, pricingFaqWrapper }: PricingFaqProps) {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const faqs = [
        {
            question: pricingFaqWrapper.question1,
            answer: pricingFaqWrapper.answer1
        }, {
            question: pricingFaqWrapper.question2 ,
            answer: pricingFaqWrapper.answer2 
        }, {
            question:  pricingFaqWrapper.question3,
            answer: pricingFaqWrapper.answer3 
        }, {
            question:  pricingFaqWrapper.question4 ,
            answer: pricingFaqWrapper.answer4 
        }, {
            question: pricingFaqWrapper.question5 ,
            answer:  pricingFaqWrapper.answer5 
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
                            <h2 className="text-md text-black">{pricingFaqTitle}</h2>
                            <p className="h6 op-desc text-black">{pricingFaqSubtitle}</p>
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