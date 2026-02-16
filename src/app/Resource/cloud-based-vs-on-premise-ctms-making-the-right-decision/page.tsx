"use client"

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Blog7() {
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
                        <h1 className="text-md h2">Cloud-Based vs On-Premise CTMS: Making the Right Decision</h1>

                        <p className="h6 text-rg">Technology infrastructure decisions significantly impact cost, scalability, and compliance.</p>
                    </div>

                    <div className="resource-detail-banner-img">
                        <Image src="/images/live-blogs/Blog 7.webp" alt="" width={1400} height={830}></Image>
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
                            <h3 className="h5 text-md">Cloud-Based CTMS</h3>
                            <p className="text-rg h6">Cloud solutions are hosted on secure remote servers and accessed via web browsers.</p>

                            <p className="text-rg h6"><b>Advantages:</b></p>

                            <ul>
                                <li>Lower upfront investment</li>
                                <li>Faster deployment</li>
                                <li>Automatic system updates</li>
                                <li>Remote access for global teams</li>
                                <li>Scalable storage and performance</li>
                                <li>Reduced IT burden</li>
                            </ul>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">Security Considerations:</h3>

                            <p className="text-rg h6"><b>Modern cloud CTMS platforms comply with:</b></p>

                            <ul>
                                <li>21 CFR Part 11</li>
                                <li>GDPR</li>
                                <li>ISO certifications</li>
                                <li>Role-based access control</li>
                                <li>Data encryption</li>
                            </ul>
                        </div>
                    </div>

                    <div className="resource-detail-more-blogs">
                        <Link href='#' className="resources-tab-content resources-tab-content-1">
                            <div className="resource-card-image-wrapper">
                                <Image src="/images/" alt="resource-tab-1" width={680} height={404}></Image>
                            </div>

                            <div className="resources-card-text-wrapper">
                                <h3 className="h5 text-md">Need to Change</h3>

                                <p className="h6 text-rg text-grey">Need to Change</p>
                            </div>
                        </Link>

                        <Link href='#' className="resources-tab-content resources-tab-content-1">
                            <div className="resource-card-image-wrapper">
                                <Image src="/images/" alt="resource-tab-1" width={680} height={404}></Image>
                            </div>

                            <div className="resources-card-text-wrapper">
                                <h3 className="h5 text-md">Need to Change</h3>

                                <p className="h6 text-rg text-grey">Need to Change</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}