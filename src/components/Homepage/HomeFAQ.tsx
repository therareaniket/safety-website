
"use client";

import { useState } from "react";


export default function HomeFAQ() {

    const faqs = [
        {
            question: 'What is DhatuSafety?',
            answer: 'DhatuAcademy is a specialized training platform offering portal-specific courses certifications to help you work on real-world projects.'
        }, {
            question: 'Who can use DhatuSafety?',
            answer: 'DhatuAcademy is a specialized training platform offering portal-specific courses certifications to help you work on real-world projects..'
        },
        {
            question: 'Can DhatuSafety integrate with other systems?',
            answer: 'DhatuAcademy is a specialized training platform offering portal-specific courses certifications to help you work on real-world projects.'
        }, {
            question: 'Does DhatuSafety support global regulatory compliance?',
            answer: 'DhatuAcademy is a specialized training platform offering portal-specific courses certifications to help you work on real-world projects.'
        }, {
            question: 'What kind of support is offered?',
            answer: 'DhatuAcademy is a specialized training platform offering portal-specific courses certifications to help you work on real-world projects.'
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <>
            <section className="faq-wrapper section pt-0">
                <div className="container">
                    <div className="faq-row flex">
                        <div className="fq-col-one">
                            <h2 className="text-md text-black">Plans Designed for Smarter Safety Management</h2>
                            <p className="h6 op-desc text-black">Here are answers to the top questions teams ask about DhatuSafety, helping you understand our features, workflows, and how we empower safer, more efficient operations.</p>
                        </div>
                        <div className="fq-col-two">
                            <div className="faq-accordian" id="accordionExample">
                                {faqs.map((item, index) => (
                                    <div className="accordion-item" key={index}>
                                        <h3
                                            className={`accordion-header h6 mb-0 ${activeIndex === index ? "active" : ""
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
                                                    className={`fq-show-icon relative ${activeIndex === index ? "minus" : "plus"
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