'use client';

import Image from "next/image";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function ComplianceSecureConnectivity() {

    const [activeIndex, setActiveIndex] = useState(0);

    const buttons = [
        "EDC & CTMS Reconciliation",
        "Medical Information Integration",
        "Partner & Licensee Exchange",
        "Regulatory Gateway Connectivity",
        "E2B (R3) Data Exchange",
        "Secure APIs & Controlled Exports"
    ];

    const descriptions = [
        "Automated reconciliation of safety data with EDC and CTMS systems to identify discrepancies, ensure completeness, and maintain consistency.",
        "Bi-directional integration with medical information systems to capture, track, and assess safety-relevant inquiries and adverse events.",
        "Secure case exchange with partners, CROs, and licensees, supporting defined data scopes, timelines, and responsibilities.",
        "Direct integration with global regulatory gateways to support compliant electronic submissions and acknowledgements.",
        "Standardized E2B (R3) compliant data transmission ensuring structured, validated, and regulator-ready safety reporting.",
        "Secure APIs enable analytics and reporting while ensuring masked, logged, and permission-based data exports with full auditability."
    ];

    return (
        <section className="section compliance-secure-connectivity-section">
            <div className="container">

                <div className="compliance-security-head-wrapper">
                    <h2 className="text-md text-white">Secure Connectivity Across the Safety Ecosystem</h2>
                    <p className="text-rg h6 text-white">Enables seamless, compliant, and secure data exchange</p>
                </div>

                <div className="compliance-security-button-wrapper compliance-security-button-wrapper-desktop">

                    {/* LEFT */}
                    <div className="compliance-security-btn-left">
                        {buttons.map((btn, index) => (
                            <h3
                                key={index}
                                className={`text-md h5 text-white security-btn ${activeIndex === index ? "active" : ""}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                {btn}
                                {activeIndex === index && (
                                <Image
                                    src="/images/compliancepage/compliance-security-desktop-arrow.svg"
                                    alt="arrow"
                                    width={16}
                                    height={16}
                                />
                                    )}
                            </h3>
                        ))}
                    </div>

                    {/* RIGHT DESCRIPTION */}
                    <div
                        className="compliance-security-btn-middle"
                        style={{
                            marginTop: `${activeIndex * 65}px`,  
                            transition: "0.4s"
                        }}
                    >
                        <p className="text-rg h6">
                            {descriptions[activeIndex]}
                        </p>
                    </div>

                </div>

                <div className="compliance-security-responsive-accordion">
                    <Accordion type="single" collapsible defaultValue="item-1" className="eco-system-accord">
                        <AccordionItem value="item-1" className="compliance-accordions">
                            <AccordionTrigger className="compliance-security-accordion-title h5 text-md text-white ">EDC & CTMS Reconciliation</AccordionTrigger>
                            <AccordionContent className="compliance-security-accordion-desciption h6 text-rg ">
                                Automated reconciliation of safety data with EDC and CTMS systems to identify discrepancies, ensure completeness, and maintain consistency.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="compliance-accordions">
                            <AccordionTrigger className="compliance-security-accordion-title h5 text-md text-white">Medical Information Integration</AccordionTrigger>
                            <AccordionContent className="compliance-security-accordion-desciption h6 text-rg ">
                                Bi-directional integration with medical information systems to capture, track, and assess safety-relevant inquiries and adverse events.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="compliance-accordions">
                            <AccordionTrigger className="compliance-security-accordion-title h5 text-md text-white">Partner & Licensee Exchange</AccordionTrigger>
                            <AccordionContent className="compliance-security-accordion-desciption h6 text-rg ">
                                Secure case exchange with partners, CROs, and licensees, supporting defined data scopes, timelines, and responsibilities.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="compliance-accordions">
                            <AccordionTrigger className="compliance-security-accordion-title h5 text-md text-white">Regulatory Gateway Connectivity</AccordionTrigger>
                            <AccordionContent className="compliance-security-accordion-desciption h6 text-rg ">
                                Direct integration with global regulatory gateways to support compliant electronic submissions and acknowledgements.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="compliance-accordions">
                            <AccordionTrigger className="compliance-security-accordion-title h5 text-md text-white">E2B (R3) Data Exchange</AccordionTrigger>
                            <AccordionContent className="compliance-security-accordion-desciption h6 text-rg ">
                                Standardized E2B (R3) compliant data transmission ensuring structured, validated, and regulator-ready safety reporting.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6" className="compliance-accordions">
                            <AccordionTrigger className="compliance-security-accordion-title h5 text-md text-white">Secure APIs & Controlled Exports</AccordionTrigger>
                            <AccordionContent className="compliance-security-accordion-desciption h6 text-rg ">
                                Secure APIs enable analytics and reporting while ensuring masked, logged, and permission-based data exports with full auditability.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
