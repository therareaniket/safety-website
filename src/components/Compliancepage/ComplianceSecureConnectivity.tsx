'use client';

import Image from "next/image";
import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type ComplianceSecureConnectivityProps = {
    complianceSecureConnectivityTitle: string
    complianceSecureConnectivitySubtitle: string

    complianceSecureConnectivityWrapper: {
        accordion1Title: string
        accordion1Description: string
        accordion2Title: string
        accordion2Description: string
        accordion3Title: string
        accordion3Description: string
        accordion4Title: string
        accordion4Description: string
        accordion5Title: string
        accordion5Description: string
        accordion6Title: string
        accordion6Description: string
    }
}


export default function ComplianceSecureConnectivity({ complianceSecureConnectivityTitle, complianceSecureConnectivitySubtitle, complianceSecureConnectivityWrapper }: ComplianceSecureConnectivityProps) {

    const [activeIndex, setActiveIndex] = useState(0);

    const buttons = [
        complianceSecureConnectivityWrapper.accordion1Title,
        complianceSecureConnectivityWrapper.accordion2Title,
        complianceSecureConnectivityWrapper.accordion3Title,
        complianceSecureConnectivityWrapper.accordion4Title,
        complianceSecureConnectivityWrapper.accordion5Title,
        complianceSecureConnectivityWrapper.accordion6Title,
    ];

    const descriptions = [
        complianceSecureConnectivityWrapper.accordion1Description,
        complianceSecureConnectivityWrapper.accordion2Description,
        complianceSecureConnectivityWrapper.accordion3Description,
        complianceSecureConnectivityWrapper.accordion4Description,
        complianceSecureConnectivityWrapper.accordion5Description,
        complianceSecureConnectivityWrapper.accordion6Description,
    ];

    return (
        <section className="section compliance-secure-connectivity-section">
            <div className="container">

                <div className="compliance-security-head-wrapper">
                    <h2 className="text-md text-white">{complianceSecureConnectivityTitle}</h2>
                    <p className="text-rg h6 text-white">{complianceSecureConnectivitySubtitle}</p>
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
                    {/* <div className="compliance-security-btn-middle" style={{ marginTop: `${activeIndex * 65}px`, transition: "0.4s" }}>
                        <p className="text-rg h6">
                            {descriptions[activeIndex]}
                        </p>
                    </div> */}

                    <div className={`compliance-security-btn-middle margin-top-btn-${activeIndex}`}>
                        <p className="text-rg h6">
                            {descriptions[activeIndex]}
                        </p>
                    </div>
                </div>

                <div className="compliance-security-responsive-accordion">
                    <Accordion type="single" collapsible defaultValue="item-1" className="eco-system-accord">
                        <AccordionItem value="item-1" className="compliance-accordions">
                            <AccordionTrigger className="compliance-security-accordion-title h5 text-md text-white ">{complianceSecureConnectivityWrapper.accordion1Title}</AccordionTrigger>
                            <AccordionContent className="compliance-security-accordion-desciption h6 text-rg ">
                                {complianceSecureConnectivityWrapper.accordion1Description}
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="compliance-accordions">
                            <AccordionTrigger className="compliance-security-accordion-title h5 text-md text-white">{complianceSecureConnectivityWrapper.accordion2Title}</AccordionTrigger>
                            <AccordionContent className="compliance-security-accordion-desciption h6 text-rg ">
                                {complianceSecureConnectivityWrapper.accordion2Description}
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="compliance-accordions">
                            <AccordionTrigger className="compliance-security-accordion-title h5 text-md text-white">{complianceSecureConnectivityWrapper.accordion3Title}</AccordionTrigger>
                            <AccordionContent className="compliance-security-accordion-desciption h6 text-rg ">
                                {complianceSecureConnectivityWrapper.accordion3Description}
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="compliance-accordions">
                            <AccordionTrigger className="compliance-security-accordion-title h5 text-md text-white">{complianceSecureConnectivityWrapper.accordion4Title}</AccordionTrigger>
                            <AccordionContent className="compliance-security-accordion-desciption h6 text-rg ">
                                {complianceSecureConnectivityWrapper.accordion4Description}
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-5" className="compliance-accordions">
                            <AccordionTrigger className="compliance-security-accordion-title h5 text-md text-white">{complianceSecureConnectivityWrapper.accordion5Title}</AccordionTrigger>
                            <AccordionContent className="compliance-security-accordion-desciption h6 text-rg ">
                                {complianceSecureConnectivityWrapper.accordion5Description}
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-6" className="compliance-accordions">
                            <AccordionTrigger className="compliance-security-accordion-title h5 text-md text-white">{complianceSecureConnectivityWrapper.accordion6Title}</AccordionTrigger>
                            <AccordionContent className="compliance-security-accordion-desciption h6 text-rg ">
                                {complianceSecureConnectivityWrapper.accordion6Description}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
