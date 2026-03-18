'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { a } from "framer-motion/client";


type AboutReportingSubmissionComplianceProps = {
    aboutReportingComplianceTitle: string;
    aboutReportingComplianceSubtitle: string;

    aboutExpeditedReportingCard: {
        title: string;
        description: string;
    }

    aboutAggregateReportingCard: {
        title: string;
        description: string;
    }

    aboutSubmissionMonitoringCard: {
        title: string;
        description: string;
    }
}

export default function AboutReportingSubmissionCompliance({ aboutReportingComplianceTitle, aboutReportingComplianceSubtitle, aboutExpeditedReportingCard, aboutAggregateReportingCard, aboutSubmissionMonitoringCard }: AboutReportingSubmissionComplianceProps) {
    return (
        <>
            <section className="section about-reporting-submission-compliance-section">
                <div className="container">
                    <div className="about-reporting-submission-compliance-inner">
                        <h2 className="about-reporting-submission-compliance-title text-md">{aboutReportingComplianceTitle}</h2>
                        <p className="about-reporting-submission-compliance-para text-rg h6">
                            {aboutReportingComplianceSubtitle}
                        </p>
                    </div>

                    <div className="about-reporting-compliance-detail-pointers">
                        <div className="about-reporting-compliance-left">
                            <div className="compliance-reporting-point-1">
                                <h3 className="h5 text-md">{aboutExpeditedReportingCard.title}</h3>

                                <p className="text-rg h6">{aboutExpeditedReportingCard.description}</p>
                            </div>

                            <motion.div
                                className="compliance-reporting-seperator"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{ duration: 4, ease: "easeOut" }}
                                style={{ transformOrigin: "left" }}
                            />

                            <div className="compliance-reporting-point-1">
                                <h3 className="h5 text-md">{aboutAggregateReportingCard.title}</h3>

                                <p className="text-rg h6">{aboutAggregateReportingCard.description}</p>
                            </div>

                            <motion.div
                                className="compliance-reporting-seperator"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true, amount: 0.6 }}
                                transition={{ duration: 4, ease: "easeOut" }}
                                style={{ transformOrigin: "left" }}
                            />

                            <div className="compliance-reporting-point-1" style={{ borderBottom: 0 }}>
                                <h3 className="h5 text-md">{aboutSubmissionMonitoringCard.title}</h3>

                                <p className="text-rg h6">{aboutSubmissionMonitoringCard.description}</p>
                            </div>
                        </div>

                        <div className="about-reporting-compliance-right">
                            <Image src="/images/aboutpage/reporting-submission-img.webp" alt="reporting icon" width={558} height={690}></Image>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}