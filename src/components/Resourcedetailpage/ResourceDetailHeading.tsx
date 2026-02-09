'use client';


import Image from "next/image";
import Link from "next/link";

export default function ResourceDetailHeading() {
    return (
        <>
            <section className="section resource-detail-hero-wrapper">
                <div className="container">

                    <div className="resource-detail-breadcrumb">
                        <span className="text-18 text-rg text-grey">{"<"}</span>
                        <Link href="/Resource" className="text-18 text-rg text-grey">Back to Resources</Link>

                    </div>

                    <div className="blog-sm-container blog-detail-text-wrapper">
                        <h2 className="text-md">How AI Is Reshaping Modern Pharmacovigilance</h2>

                        <p className="h6 text-rg">Discover how AI‑powered tools are speeding up case review, improving signal detection accuracy, and helping safety teams make faster, smarter decisions—reshaping the future of safety management with intelligent automation and real‑time insights.</p>
                    </div>

                    <div className="resource-detail-banner-img">
                        <Image src="/images/resourcedetailpage/resource-detail-banner.png" alt="" width={1400} height={830}></Image>
                    </div>

                    <div className="resources-detail-social-links">
                        <div className="resource-detail-left resources-card-btn-dtl-left">
                            <span className="text-sb">ST</span>

                            <div className="resource-card-date">
                                <p className="text-18 text-rg text-grey">Sarah Thompson</p>

                                <p className="text-18 text-rg text-grey">27 January 2026</p>
                            </div>
                        </div>

                        <div className="resource-detail-middle">
                            <span className="text-16 text-rg">Automation</span>
                            <p className="text-18 text-rg text-grey">5 min read</p>
                        </div>

                        <div className="resource-detail-right social-icons-wrapper">
                            <Image src="/images/resourcedetailpage/facebook-icon.svg" alt="" width={28} height={28}></Image>
                            <Image src="/images/resourcedetailpage/instagram-icon.svg" alt="" width={28} height={28}></Image>
                            <Image src="/images/resourcedetailpage/twitter-icon.svg" alt="" width={28} height={28}></Image>
                        </div>
                    </div>

                    <div className="blog-sm-container blog-detail-qna-wrapper">
                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">How is AI improving the speed of case review in pharmacovigilance?</h3>
                            <p className="text-rg h6">AI automates repetitive and time‑consuming tasks such as data extraction, case triaging, and initial assessment. Machine‑learning models can quickly analyze unstructured data from narratives, identify key safety details, and prioritize cases. </p>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">How does AI enhance signal detection accuracy?</h3>
                            <p className="text-rg h6">AI identifies emerging safety signals by detecting patterns, correlations, and anomalies that may be overlooked in traditional manual reviews. It continuously learns from historical data, literature, and real‑time case inputs. </p>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">What role does intelligent automation play in modern PV workflows?</h3>
                            <p className="text-rg h6">Intelligent automation streamlines the entire PV workflow—case intake, validation, data entry, narrative extraction, signal monitoring, and reporting. This reduces errors, maintains consistency across case submissions. </p>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">How is AI shaping the future of pharmacovigilance?</h3>
                            <p className="text-rg h6">AI is transforming pharmacovigilance into a proactive, insight‑driven function. With real‑time monitoring, automated pattern recognition, and predictive risk analysis, organizations can identify threats earlier, act faster.</p>
                        </div>

                        <div className="resource-detail-qna">
                            <h3 className="h5 text-md">What challenges does AI help overcome in pharmacovigilance?</h3>
                            <p className="text-rg h6">AI addresses several long‑standing challenges in pharmacovigilance, including slow manual case reviews, data inconsistencies, and difficulty identifying early safety signals in large and complex datasets. By automating repetitive tasks.</p>
                        </div>
                    </div>

                    <div className="resource-detail-more-blogs">
                        <Link href='/Resourcedetail' className="resources-tab-content resources-tab-content-1">
                            <div className="resource-card-image-wrapper">
                                <Image src="/images/resourcepage/resource-card-1.png" alt="resource-tab-1" width={680} height={404}></Image>
                            </div>

                            <div className="resources-card-text-wrapper">
                                <h3 className="h5 text-md">Building a Future Ready Safety Workflow For Intelligence</h3>

                                <p className="h6 text-rg text-grey">A future‑ready safety workflow integrates automation, AI‑driven insights, and standardized processes to help teams manage cases more efficiently and spot risks sooner.</p>
                            </div>
                        </Link>

                        <Link href='/Resourcedetail' className="resources-tab-content resources-tab-content-2">
                            <div className="resource-card-image-wrapper">
                                <Image src="/images/resourcepage/resource-card-2.png" alt="resource-tab-1" width={680} height={404}></Image>
                            </div>

                            <div className="resources-card-text-wrapper">
                                <h3 className="h5 text-md">Why Multi‑Source Safety Data Intake are Used For Trials</h3>

                                <p className="h6 text-rg text-grey">It is essential during clinical trials because it brings together safety information from a wide range of channels—such as investigator reports, patient diaries, EDC systems, lab results.</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}