
"use client";

import { useState } from "react";
import Image from "next/image";


export default function HomeFAQ() {

    const faqs = [
        {
            question: 'What is DhatuSafety?',
            answer: 'DhatuSafety is a unified patient safety and pharmacovigilance platform that helps teams manage ICSRs, track safety signals, monitor literature.'
        }, {
            question: 'Who can use DhatuSafety?',
            answer: 'It is designed for MAHs, clinical trial sponsors, CROs, pharma & biotech company and any organization involved in safety monitoring and regulatory reporting.'
        }, {
            question: 'Can DhatuSafety integrate with other systems?',
            answer: 'Yes. DhatuSafety supports integrations with EHR, ERP, EDC, and other clinical systems to ensure seamless data intake and workflow automation.'
        }, {
            question: 'Does DhatuSafety support global regulatory compliance?',
            answer: 'Yes . The platform includes features for regulatory reporting, audit trails, compliance tracking, and jurisdiction‑specific requirements (US/EU/IN).'
        }, {
            question: 'What kind of support is offered?',
            answer: 'Provides dedicated onboarding, training, documentation, and ongoing support. Enterprise plans also include priority assistance and advanced configuration.'
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <>
            <section className="faq-wrapper section pt-0">
                <div className="container">
                    <div className="faq-row flex">
                        <div className="fq-col-one">
                            <Image className="faq-img" src='images/homepage/faq-icon.svg' alt="FAQ" width={211} height={226} priority />
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