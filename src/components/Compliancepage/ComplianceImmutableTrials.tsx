'use client';
import { motion } from "framer-motion";


type ComplianceImmutableTrialsProps = {
                complianceImmutableTitle: string
            complianceImmutableSubtitle: string

            complianceImmutableCard1: {
                title: string
                description: string
            }

            complianceImmutableCard2: {
                title: string
                description: string
            }

            complianceControlledAccessTitle: string
            complianceControlledAccessSubtitle: string

            complianceControlledAccessCard1: {
                title: string
                subtitle: string
            }
            complianceControlledAccessCard2: {
                title: string
                subtitle: string
            }
}

export default function ComplianceImmutableTrials( { 
    complianceImmutableTitle, 
    complianceImmutableSubtitle, 
    complianceImmutableCard1, 
    complianceImmutableCard2, 
    complianceControlledAccessTitle, 
    complianceControlledAccessSubtitle, 
    complianceControlledAccessCard1, 
    complianceControlledAccessCard2 } : ComplianceImmutableTrialsProps ) {
    return (
        <>
            <section className="section" style={{ paddingTop: 0 }}>
                <div className="container">
                    <div className="compliance-immutable-wrapper">
                        <div className="compliance-immutable-row compliance-immutable-row-1">
                            <div className="compliance-immutable-card-left">
                                <div className="compliance-immutable-card compliance-immutable-card-1">
                                    <h3 className="h5 text-md">{complianceImmutableCard1.title}</h3>
                                    <p className="text-18 text-rg">{complianceImmutableCard1.description}</p>
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
                                    <h3 className="h5 text-md">{complianceImmutableCard2.title}</h3>
                                    <p className="text-18 text-rg">{complianceImmutableCard2.description}</p>
                                </div>
                            </div>

                            <div className="compliance-immutable-card-right">
                                <h2 className="text-md">{complianceImmutableTitle}</h2> 

                                <p className="text-rg h6">{complianceImmutableSubtitle}</p>
                            </div>
                        </div>

                        <div className="compliance-immutable-row compliance-immutable-row-2">
                            <div className="compliance-immutable-card-left">
                                <div className="compliance-immutable-card compliance-immutable-card-1">
                                    <h3 className="h5 text-md">{complianceControlledAccessCard1.title}</h3>
                                    <p className="text-18 text-rg"> {complianceControlledAccessCard1.subtitle}</p>
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
                                    <h3 className="h5 text-md">{complianceControlledAccessCard2.title}</h3>
                                    <p className="text-18 text-rg">{complianceControlledAccessCard2.subtitle}</p>
                                </div>
                            </div>

                            <div className="compliance-immutable-card-right">
                                <h2 className="text-md">{complianceControlledAccessTitle}</h2> 

                                <p className="text-rg h6">{complianceControlledAccessSubtitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}