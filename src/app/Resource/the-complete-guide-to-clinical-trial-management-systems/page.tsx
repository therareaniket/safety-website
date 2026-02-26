"use client"

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Blog1() {
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
                        <h1 className="text-md h2">The Complete Guide to Clinical Trial Management Systems (CTMS)</h1>

                        <p className="h6 text-rg">Clinical trials are becoming increasingly complex, involving multiple sites, global regulatory frameworks, tight timelines, and high financial stakes. Managing this complexity through spreadsheets and disconnected systems is no longer sustainable. A Clinical Trial Management System (CTMS) is the operational backbone that centralizes, tracks, and optimizes clinical trial activities from study startup to close-out.</p>
                    </div>

                    <div className="resource-detail-banner-img">
                        <Image src="/images/live-blogs/Blog 1.webp" alt="" width={1400} height={830}></Image>
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
                            <h3 className="h5 text-md">What is a CTMS?</h3>
                            <p className="text-rg h6">A CTMS is a purpose-built software platform designed to manage the operational, financial, and administrative aspects of clinical trials. It supports study planning, site management, subject tracking, monitoring oversight, budget management, and reporting.</p>
                            <p className="text-rg h6">Unlike EDC systems that capture patient data, CTMS focuses on trial operations — ensuring studies are delivered on time, within budget, and in compliance.</p>
                            <p className="text-rg h6"><b>Core Functional Areas</b></p>
                            <ul>
                                <li>Study Planning & Forecasting</li>
                                <li>Site Selection & Activation</li>
                                <li>Monitoring Visit Tracking</li>
                                <li>Budget & Payment Management</li>
                                <li>Enrollment Tracking</li>
                                <li>Document & Milestone Tracking</li>
                                <li>Audit Trails & Compliance Reporting</li>
                            </ul>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">Why CTMS is Critical in Modern Trials</h3>

                            <p className="text-rg h6"></p>

                            <ul>
                                <li>Rising protocol complexity</li>
                                <li>Multi-country regulatory demands</li>
                                <li>Risk-Based Monitoring (RBM) adoption</li>
                                <li>Increased need for financial transparency</li>
                                <li>Demand for real-time operational visibility</li>
                            </ul>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">Future of CTMS</h3>
                            <p className="text-rg h6">Modern CTMS platforms are evolving with AI-powered analytics, predictive enrollment forecasting, and seamless integration with EDC, eTMF, and safety systems — forming a unified clinical technology ecosystem.</p>
                        </div>
                    </div>

                    <div className="resource-detail-more-blogs">
                        <Link href='#' className="resources-tab-content resources-tab-content-1">
                            <div className="resource-card-image-wrapper">
                                <Image src="/images/live-blogs/Blog 1.webp" alt="resource-tab-1" width={680} height={404}></Image>
                            </div>

                            <div className="resources-card-text-wrapper">
                                <h3 className="h5 text-md">The Complete Guide to Clinical Trial Management Systems (CTMS)</h3>

                                <p className="h6 text-rg text-grey">Need to Change</p>
                            </div>
                        </Link>

                        <Link href='#' className="resources-tab-content resources-tab-content-1">
                            <div className="resource-card-image-wrapper">
                                <Image src="/images/live-blogs/Blog 2.webp" alt="resource-tab-1" width={680} height={404}></Image>
                            </div>

                            <div className="resources-card-text-wrapper">
                                <h3 className="h5 text-md">Top Features to Look for in a Modern CTMS Platform</h3>

                                <p className="h6 text-rg text-grey">Need to Change</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}