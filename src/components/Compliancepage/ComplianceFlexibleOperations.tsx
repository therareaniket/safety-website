'use client';

import Image from "next/image";

export default function ComplianceFlexibleOperations() {
    return (
        <>
            <section className="section">
                <div className="container">
                    <div className="compliance-operational-wrapper">
                        <div className="compliance-flexible-operations-left">
                            <div className=" compliance-operations-head-text-wrapper">
                                <h2 className="text-md">Flexible Operations with Built In Compliance Control</h2>
                                <p className="h6 text-rg">Enables operational teams to adapt workflows, timelines, and templates while maintaining full regulatory control</p>
                            </div>

                            <div className="compliance-operations-stats-wrapper">
                                <div className="compliance-operations-stat-card compliance-operations-stat-card-1">
                                    <h2 className="text-md">60%</h2>
                                    <p className="text-rg h6">Faster Workflow Adaptation</p>
                                </div>
                                <div className="compliance-operations-stat-card compliance-operations-stat-card-2">

                                </div>
                                <div className="compliance-operations-stat-card compliance-operations-stat-card-3">
                                    <h2 className="text-md">40%</h2>
                                    <p className="text-rg h6">Reduction in SLA Breaches</p>
                                </div>
                            </div>
                        </div>

                        <div className="compliance-flexible-operations-right">
                            <div className="operational-card operational-card-1">
                                <span className="operational-svg operational-svg-1"><Image src="/images/compliancepage/config-workflows.svg" alt="Operational Card 1" width={32} height={32}></Image></span>

                                <div className="operational-card-right">
                                    <h4 className="h5 text-md">Configurable Workflows</h4>

                                    <p className="h6 text-rg text-grey">Design and manage workflows by product, study, region, and case type to support diverse operational needs without code changes.</p>
                                </div>
                            </div>

                            <div className="operational-card operational-card-2">
                                <span className="operational-svg operational-svg-2"><Image src="/images/compliancepage/sla-management.svg" alt="Operational Card 2" width={32} height={32}></Image></span>

                                <div className="operational-card-right">
                                    <h4 className="h5 text-md">SLA Management & Escalation</h4>

                                    <p className="h6 text-rg text-grey">Define, monitor, and enforce regulatory and operational SLAs, with automated alerts and escalations to ensure timely compliance.</p>
                                </div>
                            </div>

                            <div className="operational-card operational-card-3">
                                <span className="operational-svg operational-svg-3"><Image src="/images/compliancepage/case-lifecycle-config.svg" alt="Operational Card 3" width={32} height={32}></Image></span>

                                <div className="operational-card-right">
                                    <h4 className="h5 text-md">Case Lifecycle Configuration</h4>

                                    <p className="h6 text-rg text-grey">Configure case statuses, transitions, and checkpoints to align with organizational processes and regulatory expectations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}