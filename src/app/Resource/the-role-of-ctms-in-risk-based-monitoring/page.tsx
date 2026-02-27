"use client"

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Blog8() {
    return (
        <>
            <Header />

            <section className="section resource-detail-hero-wrapper">
                <div className="container container-sm">
                    <div className="resource-detail-breadcrumb">
                        <span className="text-18 text-rg text-grey">{"<"}</span>
                        <Link href="/Resource" className="text-18 text-rg text-grey">Back to Resources</Link>
                    </div>

                    <div className="blog-sm-container blog-detail-text-wrapper">
                        <h1 className="text-md h2">The Role of CTMS in Risk-Based Monitoring (RBM)</h1>

                        <p className="h6 text-rg">Risk-Based Monitoring is a regulatory-supported strategy that prioritizes high-risk data and sites rather than performing equal oversight across all sites.</p>
                    </div>

                    <div className="resource-detail-banner-img">
                        <Image src="/images/live-blogs/Blog 8.webp" alt="" width={1400} height={830}></Image>
                    </div>

                    <div className="resources-detail-social-links">
                        <div className="resource-detail-left resources-card-btn-dtl-left">
                            <span className="text-sb">SS</span>

                            <div className="resource-card-date">
                                <p className="text-18 text-rg text-grey">Smit Shah</p>

                                <p className="text-18 text-rg text-grey">16 January 2026</p>
                            </div>
                        </div>

                        <div className="resource-detail-middle">
                            <span className="text-16 text-rg">Workflows</span>
                            <p className="text-18 text-rg text-grey">5 min read</p>
                        </div>

                        <div className="resource-detail-right social-icons-wrapper">
                            <ul>
                                <Link href="#"><li className="text-grey footer-social-icons"><span className="icon-facebook"></span></li></Link>
                                <Link href="#"><li className="text-grey footer-social-icons"><span className="icon-twitter"></span></li></Link>
                                <Link href="#"><li className="text-grey footer-social-icons"><span className="icon-linkedin"></span></li></Link>
                                <Link href="#"><li className="text-grey footer-social-icons"><span className="icon-instagram"></span></li></Link>
                            </ul>
                        </div>
                    </div>

                    <div className="blog-sm-container blog-detail-qna-wrapper">
                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">What is RBM?</h3>
                            <p className="text-rg h6">RBM focuses on:</p>
                            <ul>
                                <li>• Critical data points</li>
                                <li>• Key Risk Indicators (KRIs)</li>
                                <li>• Centralized monitoring</li>
                                <li>• Reduced on-site visits</li>
                                <li>• Proactive issue detection</li>
                            </ul>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">How CTMS Supports RBM</h3>
                            <p className="text-rg h6"><b>Centralized Dashboards</b></p>
                            <p className="text-rg h6">Real-time visualization of:</p>
                            <ul>
                                <li>• Enrollment rates</li>
                                <li>• Protocol deviations</li>
                                <li>• Monitoring findings</li>
                                <li>• Reduced on-site visits</li>
                                <li>• Data entry delays</li>
                            </ul>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">KRI Tracking</h3>
                            <p className="text-rg h6">Automated identification of sites exceeding predefined risk thresholds.</p>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">Trend Analysis</h3>
                            <p className="text-rg h6">Historical performance analytics to predict emerging risks.</p>
                        </div>
                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">Remote Oversight</h3>
                            <p className="text-rg h6">Operational review without requiring physical site visits.</p>
                            <p className="text-rg h6">A CTMS enables data-driven monitoring strategies aligned with regulatory expectations.</p>
                        </div>
                    </div>

                    <div className="resource-detail-more-blogs">
                        <Link href='#' className="resources-tab-content resources-tab-content-1">
                            <div className="resource-card-image-wrapper">
                                <Image src="/images/live-blogs/Blog 1.webp" alt="resource-tab-1" width={680} height={404}></Image>
                            </div>

                            <div className="resources-card-text-wrapper">
                                <h3 className="h5 text-md">The Complete Guide to Clinical Trial Management Systems (CTMS)</h3>

                                <p className="h6 text-rg text-grey">Clinical trials are becoming increasingly complex, involving multiple sites, global regulatory frameworks, tight timelines, and high financial stakes. Managing this complexity through spreadsheets and disconnected systems is no longer sustainable. A Clinical Trial Management System (CTMS) is the operational backbone that centralizes, tracks, and optimizes clinical trial activities from study startup to close-out.</p>
                            </div>
                        </Link>

                        <Link href='#' className="resources-tab-content resources-tab-content-1">
                            <div className="resource-card-image-wrapper">
                                <Image src="/images/live-blogs/Blog 2.webp" alt="resource-tab-1" width={680} height={404}></Image>
                            </div>

                            <div className="resources-card-text-wrapper">
                                <h3 className="h5 text-md">Top Features to Look for in a Modern CTMS Platform</h3>

                                <p className="h6 text-rg text-grey">Choosing the right CTMS directly impacts operational efficiency and study success. A modern CTMS must go beyond basic tracking and offer intelligent automation and integration.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}