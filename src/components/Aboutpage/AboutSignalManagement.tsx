'use client';

import Image from "next/image";

export default function AboutSignalManagement() {
    return (
        <>
            <section className="section about-signal-management-section">
                <div className="container">
                    <div className="about-signal-management-inner">
                        <div className="about-signal-management-content">
                            <h2 className="about-signal-management-title text-md">Signal Management & Safety Oversight</h2>
                            <p className="about-signal-management-para text-rg h6">Proactively identify, assess, and monitor safety risks with full visibility, traceability, and operational control.</p>
                        </div>

                        <div className="about-signal-management-cards-wrapper">
                            <div className="about-signal-management-cards">
                                <div className="signal-management-text-left">
                                    <h3 className="signal-management-card-title h4 text-md">Signal Detection and Prioritization</h3>

                                    <p className="signal-management-card-para h6 text-rg text-grey">
                                        Continuously identify potential safety signals across cases, reports, and data trends, and prioritize them based on clinical relevance, impact, and regulatory risk.
                                        Continuously identify potential safety signals across cases, reports, and data trends.
                                    </p>
                                </div>

                                <div className="signal-management-right">
                                    <Image src="/images/aboutpage/signal-detection-card.webp" alt="signal icon" width={545} height={327}></Image>
                                </div>
                            </div>

                            <div className="about-signal-management-cards about-signal-management-cards-reverse">
                                <div className="signal-management-text-left">
                                    <h3 className="signal-management-card-title h4 text-md">Signal Lifecycle Documentation</h3>

                                    <p className="signal-management-card-para h6 text-rg text-grey">
                                        Maintain structured documentation for every stage of the signal lifecycle from detection and evaluation to decision and closure ensuring audit readiness. Maintain structured documentation for every stage of the signal lifecycle from detection and evaluation to decision and.
                                    </p>
                                </div>

                                <div className="signal-management-right">
                                    <Image src="/images/aboutpage/signal-lifecycle-card.webp" alt="signal icon" width={545} height={327}></Image>
                                </div>
                            </div>

                            <div className="about-signal-management-cards">
                                <div className="signal-management-text-left">
                                    <h3 className="signal-management-card-title h4 text-md">Linkage to Cases and Reports</h3>

                                    <p className="signal-management-card-para h6 text-rg text-grey">
                                        Establish direct traceability between signals, individual cases, and aggregate reports, enabling consistent evaluations and evidence-based decision making. Establish direct traceability between signals, individual cases, and aggregate reports, enabling consistent
                                    </p>
                                </div>

                                <div className="signal-management-right">
                                    <Image src="/images/aboutpage/linkage-to-cases-card.webp" alt="signal icon" width={545} height={327}></Image>
                                </div>
                            </div>

                            <div className="about-signal-management-cards about-signal-management-cards-reverse">
                                <div className="signal-management-text-left">
                                    <h3 className="signal-management-card-title h4 text-md">SLA and Compliance Monitoring</h3>

                                    <p className="signal-management-card-para h6 text-rg text-grey">
                                        Track timelines, workload, and compliance metrics against defined SLAs, with early visibility into risks, delays, and regulatory commitments. Track timelines, workload, and compliance metrics against defined SLAs, with early visibility into risks, delays, and regulatory
                                    </p>
                                </div>

                                <div className="signal-management-right">
                                    <Image src="/images/aboutpage/sla-compliance-card.webp" alt="signal icon" width={545} height={327}></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}