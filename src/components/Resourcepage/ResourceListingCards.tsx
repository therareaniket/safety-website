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
                                    <Link href='/Resourcedetail' className="resources-tab-content resources-tab-content-1">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/resourcepage/resource-card-1.webp" alt="resource-tab-1" width={680} height={404}></Image>
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
                                            <h3 className="h5 text-md">Building a Future Ready Safety Workflow For Intelligence</h3>

                                            <p className="h6 text-rg text-grey">A future‑ready safety workflow integrates automation, AI‑driven insights, and standardized processes to help teams manage cases more efficiently and spot risks sooner.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resourcedetail' className="resources-tab-content resources-tab-content-2">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/resourcepage/resource-card-2.webp" alt="resource-tab-1" width={680} height={404}></Image>
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
                                            <h3 className="h5 text-md">Why Multi‑Source Safety Data Intake are Used For Trials</h3>

                                            <p className="h6 text-rg text-grey">It is essential during clinical trials because it brings together safety information from a wide range of channels—such as investigator reports, patient diaries, EDC systems, lab results.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resourcedetail' className="resources-tab-content resources-tab-content-3">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/resourcepage/resource-card-3.webp" alt="resource-tab-1" width={680} height={404}></Image>
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
                                            <h3 className="h5 text-md">Enhancing Compliance With Intelligent Reporting</h3>

                                            <p className="h6 text-rg text-grey">Explore how automated aggregate reporting tools are helping safety teams reduce manual errors, streamline submissions, and stay audit‑ready across global regulatory requirements.</p>
                                        </div>
                                    </Link>

                                    <Link href='/Resourcedetail' className="resources-tab-content resources-tab-content-4">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/resourcepage/resource-card-4.webp" alt="resource-tab-1" width={680} height={404}></Image>
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
                                            <h3 className="h5 text-md">The Role of Literature Surveillance in Risk Identification</h3>

                                            <p className="h6 text-rg text-grey">Learn why continuous literature monitoring is essential for detecting emerging signals, strengthening case assessments, and supporting comprehensive safety evaluations.</p>
                                        </div>
                                    </Link>
                                </TabsContent>

                                <TabsContent value="monitoring">
                                    <Link href='/Resourcedetail'className="resources-tab-content resources-tab-content-4">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/resourcepage/resource-card-4.webp" alt="resource-tab-1" width={680} height={404}></Image>
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
                                            <h3 className="h5 text-md">The Role of Literature Surveillance in Risk Identification</h3>

                                            <p className="h6 text-rg text-grey">Learn why continuous literature monitoring is essential for detecting emerging signals, strengthening case assessments, and supporting comprehensive safety evaluations.</p>
                                        </div>
                                    </Link>
                                </TabsContent>

                                <TabsContent value="automation">
                                    <Link href='/Resourcedetail' className="resources-tab-content resources-tab-content-1">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/resourcepage/resource-card-1.webp" alt="resource-tab-1" width={680} height={404}></Image>
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
                                            <h3 className="h5 text-md">Building a Future Ready Safety Workflow For Intelligence</h3>

                                            <p className="h6 text-rg text-grey">A future‑ready safety workflow integrates automation, AI‑driven insights, and standardized processes to help teams manage cases more efficiently and spot risks sooner.</p>
                                        </div>
                                    </Link>
                                </TabsContent>

                                <TabsContent value="detection">
                                    <Link href='/Resourcedetail' className="resources-tab-content resources-tab-content-2">
                                        <div className="resource-card-image-wrapper">
                                            <Image src="/images/resourcepage/resource-card-2.webp" alt="resource-tab-1" width={680} height={404}></Image>
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
                                            <h3 className="h5 text-md">Why Multi‑Source Safety Data Intake are Used For Trials</h3>

                                            <p className="h6 text-rg text-grey">It is essential during clinical trials because it brings together safety information from a wide range of channels—such as investigator reports, patient diaries, EDC systems, lab results.</p>
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