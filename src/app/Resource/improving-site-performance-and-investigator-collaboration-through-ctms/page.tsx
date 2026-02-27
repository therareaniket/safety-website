"use client"

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Blog9() {
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
                        <h1 className="text-md h2">Improving Site Performance and Investigator Collaboration Through CTMS</h1>

                        <p className="h6 text-rg">Sites are the backbone of clinical trials. Poor site performance directly affects timelines and cost.</p>
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
                            <h3 className="h5 text-md">Key Site Performance Metrics</h3>
                            <ul>
                                <li>• Time to activation</li>
                                <li>• Enrollment rate</li>
                                <li>• Screen failure rate</li>
                                <li>• Monitoring visit compliance</li>
                                <li>• Data entry timeliness</li>
                            </ul>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">How CTMS Improves Site Oversight</h3>
                            <p className="text-rg h6"><b>Performance Dashboards</b></p>
                            <p className="text-rg h6">Compare sites across regions and studies.</p>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">Investigator Payment Automation</h3>
                            <p className="text-rg h6">Ensure timely and transparent payments to maintain strong relationships.</p>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">Visit Scheduling Tools</h3>
                            <p className="text-rg h6">Avoid missed visits and compliance gaps.</p>
                        </div>
                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">Communication Tracking</h3>
                            <p className="text-rg h6">Maintain documented interactions and action plans.</p>
                            <p className="text-rg h6">With structured oversight, sponsors can support high-performing sites and intervene early with underperforming ones.</p>
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