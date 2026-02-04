'use client';
import { useEffect, useRef, useState } from 'react';

export default function ComplianceStepsValidation() {
        const wrapperRef = useRef<HTMLDivElement | null>(null);
        const [activeStep, setActiveStep] = useState<number>(0);

        useEffect(() => {
            const wrapper = wrapperRef.current;
            if (!wrapper) return;

            const cards = wrapper.querySelectorAll<HTMLDivElement>(
                '.compliance-steps-card'
            );

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const index = Number(
                                (entry.target as HTMLDivElement).dataset.index
                            );
                            setActiveStep(index);
                        }
                    });
                },
                {
                    root: wrapper,
                    threshold: 0.6, // 60% visible
                }
            );

            cards.forEach((card) => observer.observe(card));

            return () => observer.disconnect();
        }, []);

    return (
        <>
            <section className="section compliance-steps-validation-section">
                <div className="container">
                    <div className=" compliance-steps-head-text-wrapper">
                        <h2 className="text-md text-white">Validation, Change Control & Auditability</h2>

                        <p className="h6 text-rg text-white">Validation, Change Control & Auditability</p>
                    </div>

                    <div className="compliance-steps-divider">
                        <div ref={wrapperRef} className="compliance-validation-steps-wrapper">
                            <div data-index={0} className={`compliance-steps-card compliance-steps-card-1 ${activeStep === 0 ? 'active' : ''}`}>
                                <span className="text-md h5 compliance-step-span">1</span>

                                <h3 className="h5 text-md text-white">CSV Compliance</h3>

                                <p className="text-18 text-rg text-grey">End-to-end support for Computer System Validation, including structured documentation</p>
                            </div>

                            <div data-index={1} className={`compliance-steps-card compliance-steps-card-2 ${activeStep === 1 ? 'active' : ''}`}>
                                <span className="text-md h5 compliance-step-span">2</span>

                                <h3 className="h5 text-md text-white">IQ/OQ/PQ Management</h3>

                                <p className="text-18 text-rg text-grey">End-to-end support for Computer System Validation, including structured documentation</p>
                            </div>

                            <div data-index={2} className={`compliance-steps-card compliance-steps-card-3 ${activeStep === 2 ? 'active' : ''}`}>
                                <span className="text-md h5 compliance-step-span">3</span>

                                <h3 className="h5 text-md text-white">Change Control</h3>

                                <p className="text-18 text-rg text-grey">All system configurations and changes are managed through controlled change workflows.</p>
                            </div>

                            <div  className={`compliance-steps-card compliance-steps-card-4 ${activeStep === 3 ? 'active' : ''}`}>
                                <span className="text-md h5 compliance-step-span">4</span>

                                <h3 className="h5 text-md text-white">Audit Trails</h3>

                                <p className="text-18 text-rg text-grey">Complete, immutable audit trails capturing data changes, configuration updates, user.</p>
                            </div>

                            <div data-index={4} className={`compliance-steps-card compliance-steps-card-5 ${activeStep === 4 ? 'active' : ''}`}>
                                <span className="text-md h5 compliance-step-span">5</span>

                                <h3 className="h5 text-md text-white">Bulk Data Changes</h3>

                                <p className="text-18 text-rg text-grey">Supports controlled bulk updates through predefined workflows, ensuring validation, review.</p>
                            </div>

                            <div data-index={5} className={`compliance-steps-card compliance-steps-card-6 ${activeStep === 5 ? 'active' : ''}`}>
                                <span className="text-md h5 compliance-step-span">6</span>

                                <h3 className="h5 text-md text-white">Validation Status</h3>

                                <p className="text-18 text-rg text-grey">Provides visibility into validation status, open changes, and compliance indicators.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 