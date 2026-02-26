"use client"

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Blog3() {
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
                        <h1 className="text-md h2">How CTMS Improves Clinical Trial Efficiency</h1>

                        <p className="h6 text-rg">Operational inefficiencies are one of the leading causes of trial delays. CTMS platforms streamline processes and improve coordination across stakeholders.</p>
                    </div>

                    <div className="resource-detail-banner-img">
                        <Image src="/images/live-blogs/Blog 3.webp" alt="" width={1400} height={830}></Image>
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
                            <h3 className="h5 text-md">Common Inefficiencies Without CTMS</h3>
                            <ul>
                                <li>Manual tracking in spreadsheets</li>
                                <li>Delayed site payments</li>
                                <li>Inconsistent monitoring oversight</li>
                                <li>Poor enrollment forecasting</li>
                                <li>Lack of centralized reporting</li>
                            </ul>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">Efficiency Gains with CTMS</h3>

                            <ul>
                                <li>Automated milestone tracking</li>
                                <li>Real-time site performance dashboards</li>
                                <li>Faster issue escalation</li>
                                <li>Centralized communication logs</li>
                                <li>Improved financial reconciliation</li>
                            </ul>
                            <p className="text-rg h6"></p>
                        </div>

                        <div className="resource-detail-qna">
                            <p className="text-rg h6">Organizations adopting CTMS often report measurable reductions in study cycle times and administrative burden.</p>
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