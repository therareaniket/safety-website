'use client';
import { motion } from "framer-motion";

export default function ComplianceImmutableTrials() {
    return (
        <>
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="compliance-immutable-wrapper">
                        <div className="compliance-immutable-row compliance-immutable-row-1">
                            <div className="compliance-immutable-card-left">
                                <div className="compliance-immutable-card compliance-immutable-card-1">
                                    <h3 className="h5 text-md">Immutable Audit Trails</h3>
                                    <p className="text-18 text-rg">Automatically captures all critical data actions with user ID, timestamp, old and new values.</p>
                                </div>
                                <motion.div
                                    className="compliance-immutable-seperator"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true, amount: 0.6 }}
                                    transition={{ duration: 4, ease: "easeOut" }}
                                    style={{ transformOrigin: "left" }}
                                />
                                <div className="compliance-immutable-card compliance-immutable-card-2">
                                    <h3 className="h5 text-md">Data Accuracy & Validation Controls</h3>
                                    <p className="text-18 text-rg">Built-in validation rules, controlled fields, and workflow checks reduce errors and ensure data consistency across cases.</p>
                                </div>
                            </div>

                            <div className="compliance-immutable-card-right">
                                <h2 className="text-md">Regulator Grade Data with Enterprise Level Protection</h2>

                                <p className="text-rg h6">Accurate, Complete, and Traceable Data Across the Safety Lifecycle . Ensuring data reliability from initial capture through assessment, reporting, submission, and long-term archival, with full transparency.</p>
                            </div>
                        </div>

                        <div className="compliance-immutable-row compliance-immutable-row-2">
                            <div className="compliance-immutable-card-left">
                                <div className="compliance-immutable-card compliance-immutable-card-1">
                                    <h3 className="h5 text-md">Segregation of Duties</h3>
                                    <p className="text-18 text-rg">Separates critical tasks across roles to prevent conflicts of interest and ensure compliance.</p>
                                </div>
                                <motion.div
                                    className="compliance-immutable-seperator"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true, amount: 0.6 }}
                                    transition={{ duration: 4, ease: "easeOut" }}
                                    style={{ transformOrigin: "left" }}
                                />
                                <div className="compliance-immutable-card compliance-immutable-card-2">
                                    <h3 className="h5 text-md">Regional Policy Enforcement</h3>
                                    <p className="text-18 text-rg">Applies country-specific security and governance rules automatically based on regulatory requirements.</p>
                                </div>
                            </div>

                            <div className="compliance-immutable-card-right">
                                <h2 className="text-md">Controlled Access and Protection of Safety Data</h2>

                                <p className="text-rg h6">Safeguards confidential safety information through role-based access, segregation of duties, and auditable security mechanisms aligned with regulatory expectations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}