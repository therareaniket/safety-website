'use client';

import Image from "next/image";

export default function AboutReportingSubmissionCompliance() {
    return (
        <>
            <section className="section about-reporting-submission-compliance-section">
                <div className="container">
                    <div className="about-reporting-submission-compliance-inner">
                        <h2 className="about-reporting-submission-compliance-title text-md">Reporting, Submissions & Compliance</h2>
                        <p className="about-reporting-submission-compliance-para text-rg h6">
                            Streamline global safety reporting with built-in validation, monitoring, and traceability.
                        </p>
                    </div>

                    <div className="about-reporting-compliance-detail-pointers">
                        <div className="about-reporting-compliance-left">
                            <div className="compliance-reporting-point-1">
                                <h3 className="h5 text-md">Expedited Reporting</h3>

                                <p className="text-rg h6">Generate regulator-ready safety reports with full compliance and speed. The platform supports E2B (R3) compliant case generation, including initial, follow-up  with built-in validation to ensure data completeness.</p>
                            </div>

                            <div className="compliance-reporting-point-1">
                                <h3 className="h5 text-md">Aggregate Reporting</h3>

                                <p className="text-rg h6">Manage periodic safety reports through structured, end-to-end workflows. DhatuSafety supports PSUR, PBRER, and DSUR preparation, including line listings and cumulative summaries.</p>
                            </div>

                            <div className="compliance-reporting-point-1" style={{ borderBottom: 0 }}>
                                <h3 className="h5 text-md">Submission Monitoring</h3>

                                <p className="text-rg h6">Maintain full visibility and control over regulatory submissions. The platform continuously tracks gateway acknowledgements, supports error handling and automated retries, and performs submission readiness.</p>
                            </div>
                        </div>

                        <div className="about-reporting-compliance-right">
                            <Image src="/images/aboutpage/reporting-submission-right.webp" alt="reporting icon" width={558} height={690}></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}