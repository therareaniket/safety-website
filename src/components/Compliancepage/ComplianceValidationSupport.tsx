'use client';

import Image from "next/image";

export default function ComplianceValidationSupport() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className=" compliance-validation-head-text-wrapper">
                        <h2 className="text-md ">Implementation, Validation & Ongoing Support</h2>

                        <p className="h6 text-rg">Ensures compliance is embedded from implementation through validation, ongoing operations, and continuous regulatory change.</p>
                    </div>

                    <div className="compliance-validation-support-cards-wrapper">
                        <div className="compliance-validation-row compliance-validation-row-1">
                            <div className="compliance-validation-support-card compliance-validation-support-card-1">
                                <span className="compliance-validation-support-svg site-all-svg compliance-validation-support-svg-1">
                                    <Image src="/images/compliancepage/requirement-soln-design.svg" alt="compliance-icon-3" width={32} height={32}>
                                    </Image>
                                </span>

                                <div className="ongoing-support-text-card">
                                    <h3 className="h5 text-md">Requirements & Solution Design</h3>

                                    <p className="h6 text-rg text-grey">Structured requirement assessment and solution design aligned with regulatory expectations and SOPs.</p>
                                </div>

                            </div>

                            <div className="compliance-validation-support-card compliance-validation-support-card-2">
                                <span className="compliance-validation-support-svg site-all-svg compliance-validation-support-svg-2">
                                    <Image src="/images/compliancepage/sop-aligned-config.svg" alt="compliance-icon-3" width={32} height={32}>
                                    </Image>
                                </span>

                                <div className="ongoing-support-text-card">
                                    <h3 className="h5 text-md">SOP-Aligned Configuration</h3>

                                    <p className="h6 text-rg text-grey">System configuration mapped directly to approved SOPs, ensuring operational fit without compromising compliance.</p>
                                </div>
                            </div>
                        </div>

                        <div className="compliance-validation-row compliance-validation-row-2">
                            <div className="compliance-validation-support-card compliance-validation-support-card-3">
                                <span className="compliance-validation-support-svg site-all-svg compliance-validation-support-svg-3">
                                    <Image src="/images/compliancepage/validate-migration.svg" alt="compliance-icon-3" width={32} height={32}>
                                    </Image>
                                </span>

                                <div className="ongoing-support-text-card">
                                    <h3 className="h5 text-md">Validated Data Migration</h3>

                                    <p className="h6 text-rg text-grey">Secure data migration with reconciliation, validation, and documented evidence to ensure data integrity and continuity.</p>
                                </div>
                            </div>

                            <div className="compliance-validation-support-card compliance-validation-support-card-4">
                                <span className="compliance-validation-support-svg site-all-svg compliance-validation-support-svg-4">
                                    <Image src="/images/compliancepage/training-onboarding.svg" alt="compliance-icon-3" width={32} height={32}>
                                    </Image>
                                </span>

                                <div className="ongoing-support-text-card">
                                <h3 className="h5 text-md">Training & User Onboarding</h3>

                                <p className="h6 text-rg text-grey">Role-based training and onboarding to support compliant system usage and inspection readiness.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}