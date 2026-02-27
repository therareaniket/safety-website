'use client';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image";
import Link from "next/link";

export default function ResourceListingCards() {
    return (
        <>
            <section className="section" style={{ paddingTop: 0 }} >
                <div className="container">
                    <div className="resporce-listing-wrapper">
                        <div className="resporce-listing-tab-wrapper">
                            <Tabs defaultValue="workflows" className="">

                                <TabsList className="resource-listing-tabs-wrapper h6 text-rg">
                                    <TabsTrigger value="workflows" className="resource-tab-btn h6 text-rg">Workflows</TabsTrigger>
                                    <TabsTrigger value="monitoring" className="resource-tab-btn h6 text-rg">Monitoring</TabsTrigger>
                                    <TabsTrigger value="automation" className="resource-tab-btn h6 text-rg">Automation</TabsTrigger>
                                    <TabsTrigger value="detection" className="resource-tab-btn h6 text-rg">Detection</TabsTrigger>
                                </TabsList>

                                <TabsContent value="workflows" className="resources-cards-wrapper">
                                    <Link href='/Resource/the-complete-guide-to-clinical-trial-management-systems' title="Blog 1" className="resources-tab-content resources-tab-content-1">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 1.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">ST</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Sarah Thompson</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Workflows
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">The Complete Guide to Clinical Trial Management Systems (CTMS)</h3>

                                            <p className="h6 text-rg text-grey">A Clinical Trial Management System (CTMS) centralizes and streamlines clinical trial operations from study startup to close-out.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/top-features-to-look-for-in-a-modern-ctms-platform' title="Blog 2" className="resources-tab-content resources-tab-content-2">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 2.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">RM</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Rohan Mehta</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Detection
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">Top Features to Look for in a Modern CTMS Platform</h3>

                                            <p className="h6 text-rg text-grey">Choosing the right CTMS directly impacts operational efficiency and study success. A modern CTMS must go beyond basic tracking and offer intelligent automation and integration.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/how-ctms-improves-clinical-trial-efficiency' title="Blog 3" className="resources-tab-content resources-tab-content-3">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 3.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">NP</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Neha Pandey</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Reporting
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">How CTMS Improves Clinical Trial Efficiency</h3>

                                            <p className="h6 text-rg text-grey">Operational inefficiencies are one of the leading causes of trial delays. CTMS platforms streamline processes and improve coordination across stakeholders.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/regulatory-compliance-and-ctms' title="Blog 4" className="resources-tab-content resources-tab-content-4">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 5.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">SM</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Smriti Rai</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Monitoring
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">Regulatory Compliance and CTMS</h3>

                                            <p className="h6 text-rg text-grey">Regulatory scrutiny is increasing globally. A CTMS plays a critical role in ensuring compliance with FDA, EMA, and ICH-GCP guidelines.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/major-clinical-trial-challenges-and-how-a-ctms-solves-them' title="Blog 5" className="resources-tab-content resources-tab-content-1">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 6.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">ST</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Sarah Thompson</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Workflows
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">Major Clinical Trial Challenges — And How a CTMS Solves Them</h3>

                                            <p className="h6 text-rg text-grey">Clinical trials are resource-intensive and time-sensitive. Despite technological advances, many organizations still face recurring operational challenges.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/cloud-based-vs-on-premise-ctms-making-the-right-decision' title="Blog 6" className="resources-tab-content resources-tab-content-2">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 7.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">RM</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Rohan Mehta</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Detection
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">Cloud-Based vs On-Premise CTMS: Making the Right Decision</h3>

                                            <p className="h6 text-rg text-grey">Technology infrastructure decisions significantly impact cost, scalability, and compliance.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/the-role-of-ctms-in-risk-based-monitoring' title="Blog 7" className="resources-tab-content resources-tab-content-3">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 8.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">NP</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Neha Pandey</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Reporting
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">The Role of CTMS in Risk-Based Monitoring (RBM)</h3>

                                            <p className="h6 text-rg text-grey">Risk-Based Monitoring is a regulatory-supported strategy that prioritizes high-risk data and sites rather than performing equal oversight across all sites.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/improving-site-performance-and-investigator-collaboration-through-ctms' title="Blog 8" className="resources-tab-content resources-tab-content-4">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 9.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">SM</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Smriti Rai</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Monitoring
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">Improving Site Performance and Investigator Collaboration Through CTMS</h3>

                                            <p className="h6 text-rg text-grey">Sites are the backbone of clinical trials. Poor site performance directly affects timelines and cost.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/the-future-of-clinical-trial-technology' title="Blog 9" className="resources-tab-content resources-tab-content-4">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 11.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">SM</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Smriti Rai</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Monitoring
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">The Future of Clinical Trial Technology: AI, Automation & Predictive CTMS</h3>

                                            <p className="h6 text-rg text-grey">Clinical research is entering a new digital era.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/why-small-mid-size-cros-need-a-ctms-more-than-ever' title="Blog 10" className="resources-tab-content resources-tab-content-4">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 12.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">SM</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Smriti Rai</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Monitoring
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">Why Small & Mid-Size CROs Need a CTMS More Than Ever</h3>

                                            <p className="h6 text-rg text-grey">Smaller CROs face increasing pressure to compete with global players while maintaining profitability.</p>
                                        </div>
                                    </Link>
                                </TabsContent>

                                <TabsContent value="monitoring" className="resources-cards-wrapper">
                                    <Link href='/Resource/the-complete-guide-to-clinical-trial-management-systems' title="Blog 1" className="resources-tab-content resources-tab-content-1">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 1.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">ST</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Sarah Thompson</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Workflows
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">The Complete Guide to Clinical Trial Management Systems (CTMS)</h3>

                                            <p className="h6 text-rg text-grey">A Clinical Trial Management System (CTMS) centralizes and streamlines clinical trial operations from study startup to close-out.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/top-features-to-look-for-in-a-modern-ctms-platform' title="Blog 2" className="resources-tab-content resources-tab-content-2">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 2.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">RM</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Rohan Mehta</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Detection
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">Top Features to Look for in a Modern CTMS Platform</h3>

                                            <p className="h6 text-rg text-grey">Choosing the right CTMS directly impacts operational efficiency and study success. A modern CTMS must go beyond basic tracking and offer intelligent automation and integration.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/how-ctms-improves-clinical-trial-efficiency' title="Blog 3" className="resources-tab-content resources-tab-content-3">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 3.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">NP</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Neha Pandey</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Reporting
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">How CTMS Improves Clinical Trial Efficiency</h3>

                                            <p className="h6 text-rg text-grey">Operational inefficiencies are one of the leading causes of trial delays. CTMS platforms streamline processes and improve coordination across stakeholders.</p>
                                        </div>
                                    </Link>
                                </TabsContent>

                                <TabsContent value="automation" className="resources-cards-wrapper">
                                    <Link href='/Resource/regulatory-compliance-and-ctms' title="Blog 4" className="resources-tab-content resources-tab-content-4">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 5.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">SM</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Smriti Rai</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Monitoring
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">Regulatory Compliance and CTMS</h3>

                                            <p className="h6 text-rg text-grey">Regulatory scrutiny is increasing globally. A CTMS plays a critical role in ensuring compliance with FDA, EMA, and ICH-GCP guidelines.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/major-clinical-trial-challenges-and-how-a-ctms-solves-them' title="Blog 5" className="resources-tab-content resources-tab-content-1">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 6.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">ST</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Sarah Thompson</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Workflows
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">Major Clinical Trial Challenges — And How a CTMS Solves Them</h3>

                                            <p className="h6 text-rg text-grey">Clinical trials are resource-intensive and time-sensitive. Despite technological advances, many organizations still face recurring operational challenges.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/cloud-based-vs-on-premise-ctms-making-the-right-decision' title="Blog 6" className="resources-tab-content resources-tab-content-2">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 7.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">RM</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Rohan Mehta</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Detection
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">Cloud-Based vs On-Premise CTMS: Making the Right Decision</h3>

                                            <p className="h6 text-rg text-grey">Technology infrastructure decisions significantly impact cost, scalability, and compliance.</p>
                                        </div>
                                    </Link>
                                </TabsContent>

                                <TabsContent value="detection" className="resources-cards-wrapper">
                                    <Link href='/Resource/the-role-of-ctms-in-risk-based-monitoring' title="Blog 7" className="resources-tab-content resources-tab-content-3">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 8.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">NP</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Neha Pandey</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Reporting
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">The Role of CTMS in Risk-Based Monitoring (RBM)</h3>

                                            <p className="h6 text-rg text-grey">Risk-Based Monitoring is a regulatory-supported strategy that prioritizes high-risk data and sites rather than performing equal oversight across all sites.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/improving-site-performance-and-investigator-collaboration-through-ctms' title="Blog 8" className="resources-tab-content resources-tab-content-4">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 9.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">SM</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Smriti Rai</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Monitoring
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">Improving Site Performance and Investigator Collaboration Through CTMS</h3>

                                            <p className="h6 text-rg text-grey">Sites are the backbone of clinical trials. Poor site performance directly affects timelines and cost.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/the-future-of-clinical-trial-technology' title="Blog 9" className="resources-tab-content resources-tab-content-4">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 11.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">SM</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Smriti Rai</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Monitoring
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">The Future of Clinical Trial Technology: AI, Automation & Predictive CTMS</h3>

                                            <p className="h6 text-rg text-grey">Clinical research is entering a new digital era.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resource/why-small-mid-size-cros-need-a-ctms-more-than-ever' title="Blog 10" className="resources-tab-content resources-tab-content-4">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/live-blogs/Blog 12.webp" alt="resource-tab-1" width={680} height={404}></Image>
                                        </div>

                                        <div className="resource-card-btn-wrapper">
                                            <div className="resources-card-btn-dtl-left">
                                                <span className="text-sb">SM</span>

                                                <div className="resource-card-date">
                                                    <p className="text-18 text-rg text-grey">Smriti Rai</p>

                                                    <p className="text-18 text-rg text-grey">27 January 2026</p>
                                                </div>
                                            </div>

                                            <div className="resources-card-btn-detail-right text-16">
                                                Monitoring
                                            </div>
                                        </div>

                                        <div className="resources-card-text-wrapper">
                                            <h3 className="h5 text-md">Why Small & Mid-Size CROs Need a CTMS More Than Ever</h3>

                                            <p className="h6 text-rg text-grey">Smaller CROs face increasing pressure to compete with global players while maintaining profitability.</p>
                                        </div>
                                    </Link>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}