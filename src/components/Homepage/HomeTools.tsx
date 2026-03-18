'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HomeToolsProps = {
    homeToolsSubtitle: string;
    homeToolsTitle: string;
    homeToolsCards: {
        homeToolsIcsrCardTitle: string;
        homeToolsIcsrCardSubtitle: string;
        homeToolsSignalDetectionCardTitle: string;
        homeToolsSignalDetectionCardSubtitle: string;
        homeToolsRegulatoryReportingCardTitle: string;
        homeToolsRegulatoryReportingCardSubtitle: string;
        homeToolsDataIntakeCardTitle: string;
        homeToolsDataIntakeCardSubtitle: string;
    }
}

export default function HomeTools({ homeToolsSubtitle, homeToolsTitle, homeToolsCards }: HomeToolsProps) {

    const ref = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);
    return (
        <section ref={ref} className={`tools-wrapper section pt-0 ${show ? "show" : ""}`}>
            <div className="container">
                <div className="main-title center text-center">
                    {/* <h2 className="text-md">Essential Tools for Reliable Patient Safety</h2> */}
                    <h2 className="text-md">{homeToolsTitle}</h2>
                    {/* <p className="h6">Our foundation of four core features ensures accuracy, compliance, and proactive risk management.</p> */}
                    <p className="h6">{homeToolsSubtitle}</p>
                </div>
                <div className="tools-row flex">
                    <div className="tools-item-wrap-card orange">
                        <div className="tools-item orange">
                            <div className="tools-title">
                                {/* <h3 className="h4 text-md">ICSR Case Management</h3> */}
                                <h3 className="h4 text-md">{ homeToolsCards.homeToolsIcsrCardTitle }</h3>
                                {/* <p className="h6">Efficient tools to capture, review, and process Individual Case Safety Reports with accuracy and speed.</p> */}
                                <p className="h6">{ homeToolsCards.homeToolsIcsrCardSubtitle }</p>
                            </div>
                            <div className="tools-img relative">
                                <Image className="tool-lg" src='/images/homepage/icrc.webp' alt="ICSR Case Management" width={596} height={199} priority />
                            </div>
                        </div>
                    </div>

                    <div className="tools-item-wrap-card purple">
                        <div className="tools-item purple">
                            <div className="tools-title">
                                {/* <h3 className="h4 text-md">Signal Detection & Risk Tracking</h3> */}
                                <h3 className="h4 text-md">{ homeToolsCards.homeToolsSignalDetectionCardTitle }</h3>
                                {/* <p className="h6">Intelligent analytics to identify emerging safety signals early and monitor risk throughout the product lifecycle.</p> */}
                                <p className="h6">{ homeToolsCards.homeToolsSignalDetectionCardSubtitle }</p>
                            </div>
                            <div className="tools-img relative">
                                <Image className="tool-lg" src='/images/homepage/signal.webp' alt="Signal Detection & Risk Tracking" width={580} height={200} priority />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tools-row two flex">
                    <div className="tools-item-wrap-card blue">
                        <div className="tools-item blue">
                            <div className="tools-title">
                                <h3 className="h4 text-md">{ homeToolsCards.homeToolsRegulatoryReportingCardTitle }</h3>
                                {/* <h3 className="h4 text-md">Compliance & Regulatory Reporting</h3> */}
                                {/* <p className="h6">Built‑in support for audit trails, quality oversight, and timely generation of regulatory‑ready aggregate reports.</p> */}
                                <p className="h6">{ homeToolsCards.homeToolsRegulatoryReportingCardSubtitle }</p>
                            </div>
                            <div className="tools-img relative">
                                <Image className="tool-lg" src='/images/homepage/compliance.webp' alt="Compliance & Regulatory Reporting" width={516} height={207} priority />
                            </div>
                        </div>
                    </div>

                    <div className="tools-item-wrap-card green">
                        <div className="tools-item green">
                            <div className="tools-title">
                                {/* <h3 className="h4 text-md">Multi‑Source Safety Data Intake</h3> */}
                                <h3 className="h4 text-md">{ homeToolsCards.homeToolsDataIntakeCardTitle }</h3>
                                <p className="h6">{ homeToolsCards.homeToolsDataIntakeCardSubtitle }</p>
                                {/* <p className="h6">Seamless collection of safety information from various sources including literature, reports clinical systems.</p> */}
                            </div>
                            <div className="tools-img relative">
                                <Image className="tool-lg" src='/images/homepage/safety.webp' alt="Multi‑Source Safety Data Intake" width={466} height={203} priority />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}