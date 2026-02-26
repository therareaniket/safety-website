"use client"

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Blog6() {
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
                        <h1 className="text-md h2">Major Clinical Trial Challenges — And How a CTMS Solves Them</h1>

                        <p className="h6 text-rg">Clinical trials are resource-intensive and time-sensitive. Despite technological advances, many organizations still face recurring operational challenges.</p>
                    </div>

                    <div className="resource-detail-banner-img">
                        <Image src="/images/live-blogs/Blog 6.webp" alt="" width={1400} height={830}></Image>
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
                            <h3 className="h5 text-md">Common Challenges in Clinical Trials</h3>
                            
                            <h3 className="h5 text-md">1. Site Activation Delays</h3>
                            <p className="text-rg h6">Delays in regulatory approvals, contract negotiations, and document submission slow down trial startup.</p>

                            <h3 className="h5 text-md">2. Budget Overruns</h3>
                            <p className="text-rg h6">Inaccurate forecasting and manual payment tracking lead to financial inefficiencies.</p>

                            <h3 className="h5 text-md">3. Enrollment Delays</h3>
                            <p className="text-rg h6">Lack of real-time visibility into site performance impacts recruitment strategy.</p>
                            
                            <h3 className="h5 text-md">4. Poor Monitoring Oversight</h3>
                            <p className="text-rg h6">Tracking monitoring visits manually leads to gaps and compliance risks.</p>
                            
                            <h3 className="h5 text-md">5. Communication Gaps</h3>
                            <p className="text-rg h6">Disconnected systems create misalignment between sponsors, CROs, and sites.</p>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">How CTMS Addresses These Challenges</h3>
                            <p className="text-rg h6"><b>Automated Milestone Tracking</b></p>
                            <p className="text-rg h6">CTMS provides automated alerts for site activation timelines and pending approvals.</p>

                            <p className="text-rg h6"><b>Real-Time Financial Dashboards</b></p>
                            <p className="text-rg h6">Budget tracking ensures transparency in investigator payments and vendor contracts.</p>

                            <p className="text-rg h6"><b>Enrollment Performance Analytics</b></p>
                            <p className="text-rg h6">Live dashboards allow proactive recruitment strategy adjustments.</p>
                            
                            <p className="text-rg h6"><b>Monitoring Management</b></p>
                            <p className="text-rg h6">Track visit schedules, trip reports, action items, and follow-ups in one centralized system.</p>
                            
                            <p className="text-rg h6"><b>Centralized Communication Logs</b></p>
                            <p className="text-rg h6">Maintain structured documentation of interactions with sites and stakeholders.</p>
                            <p className="text-rg h6">A well-configured CTMS transforms reactive management into proactive operational control.</p>
                            
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