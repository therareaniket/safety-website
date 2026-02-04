'use client';

import Image from "next/image";

export default function ComplianceInspectionReadiness() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="compliance-head-text-wrapper">
                        <h2 className="text-md">Regulatory Compliance & Inspection Readiness</h2>

                        <p className="h6 text-rg">Proven Compliance. Complete Transparency. Always Inspection-Ready</p>
                    </div>

                    <div className="compliance-pointers-wrapper">
                        <div className="compliance-pointers-card">
                            <span className="compliance-pointers-svg global-standard-alignment"><Image src="/images/compliancepage/global-standard-alignment.svg" alt="compliance-icon-1" width={32} height={32}></Image></span>

                            <h3 className="h5 text-md">Global Standards Alignment</h3>

                            <p className="h6 text-rg text-grey">Built-in compliance with ICH E2A, E2B (R3), E2C, and E2D standards, ensuring standardized case processing reporting.</p>
                        </div>

                        <div className="compliance-pointers-card">
                            <span className="compliance-pointers-svg gvp-part-11-compliance"><Image src="/images/compliancepage/gvp-compliance.svg" alt="compliance-icon-2" width={32} height={32}></Image></span>

                            <h3 className="h5 text-md">GVP & Part 11 Compliance</h3>

                            <p className="h6 text-rg text-grey">Supports EMA Good Pharmacovigilance Practices (GVP) and FDA 21 CFR Part 11 requirements.</p>
                        </div>

                        <div className="compliance-pointers-card">
                            <span className="compliance-pointers-svg regional-regulatory-support"><Image src="/images/compliancepage/regulatory-support.svg" alt="compliance-icon-3" width={32} height={32}></Image></span>

                            <h3 className="h5 text-md">Regional Regulatory Support</h3>

                            <p className="h6 text-rg text-grey">Flexible configuration to meet country-specific and authority-specific regulations (EMA, FDA, MHRA,etc).</p>
                        </div>

                        <div className="compliance-pointers-card">
                            <span className="compliance-pointers-svg inspection-ready-outputs"><Image src="/images/compliancepage/inspection-ready.svg" alt="compliance-icon-4" width={32} height={32}></Image></span>

                            <h3 className="h5 text-md">Inspection-Ready Outputs</h3>

                            <p className="h6 text-rg text-grey">One-click generation of inspection ready reports, line listings, case histories, narratives, minimizing manual effort.</p>
                        </div>

                        <div className="compliance-pointers-card">
                            <span className="compliance-pointers-svg end-to-end-traceability"><Image src="/images/compliancepage/end-to-end.svg" alt="compliance-icon-5" width={32} height={32}></Image></span>

                            <h3 className="h5 text-md">End-to-End Traceability</h3>

                            <p className="h6 text-rg text-grey">Complete traceability linking cases, signals, assessments, aggregate reports, enabling inspectors to follow the full safety decision.</p>
                        </div>

                        <div className="compliance-pointers-card">
                            <span className="compliance-pointers-svg inspection-audit-support"><Image src="/images/compliancepage/audit-support.svg" alt="compliance-icon-6" width={32} height={32}></Image></span>

                            <h3 className="h5 text-md">Inspection & Audit Support</h3>

                            <p className="h6 text-rg text-grey">Dedicated support for regulatory inspections and audits, including document retrieval, question tracking, and historical inspection.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}