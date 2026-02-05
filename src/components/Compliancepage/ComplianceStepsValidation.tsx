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
                threshold: 0.3,
                rootMargin: "0px -120px 0px -120px",
            }
        );


        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        // mouse down
        const handleMouseDown = (e: MouseEvent) => {
            isDown = true;
            wrapper.classList.add("dragging");
            startX = e.pageX - wrapper.offsetLeft;
            scrollLeft = wrapper.scrollLeft;
        };

        // mouse leave
        const handleMouseLeave = () => {
            isDown = false;
            wrapper.classList.remove("dragging");
        };

        // mouse up
        const handleMouseUp = () => {
            isDown = false;
            wrapper.classList.remove("dragging");
        };

        // mouse move
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - wrapper.offsetLeft;
            const walk = (x - startX) * 1.5; // speed
            wrapper.scrollLeft = scrollLeft - walk;
        };

        wrapper.addEventListener("mousedown", handleMouseDown);
        wrapper.addEventListener("mouseleave", handleMouseLeave);
        wrapper.addEventListener("mouseup", handleMouseUp);
        wrapper.addEventListener("mousemove", handleMouseMove);

        return () => {
            wrapper.removeEventListener("mousedown", handleMouseDown);
            wrapper.removeEventListener("mouseleave", handleMouseLeave);
            wrapper.removeEventListener("mouseup", handleMouseUp);
            wrapper.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    return (
        <>
            <section className="section compliance-steps-validation-section">
                <div className="container">
                    <div className=" compliance-steps-head-text-wrapper">
                        <h2 className="text-md text-white">Validation, Change Control & Auditability</h2>

                        <p className="h6 text-rg text-white">Validation, Change Control & Auditability</p>
                    </div>

                    <div className="compliance-steps-divider compliance-steps-divider-desktop">
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

                            <div className={`compliance-steps-card compliance-steps-card-4 ${activeStep === 3 ? 'active' : ''}`}>
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

                    <div className="compliance-steps-divider-mobile">
                        <div className="compliance-validation-steps-wrapper">
                            <div className="compliance-steps-card-responsive compliance-steps-card-responsive-card-left compliance-steps-card-1 ">
                                <span className="text-md h5 compliance-step-span">1</span>

                                <h3 className="h5 text-md text-white">CSV Compliance</h3>

                                <p className="text-18 text-rg text-grey">End-to-end support for Computer System Validation, including structured documentation</p>
                            </div>

                            <div className= "compliance-steps-card-responsive compliance-steps-card-responsive-card-right compliance-steps-card-2">
                                <span className="text-md h5 compliance-step-span">2</span>

                                <h3 className="h5 text-md text-white">IQ/OQ/PQ Management</h3>

                                <p className="text-18 text-rg text-grey">End-to-end support for Computer System Validation, including structured documentation</p>
                            </div>

                            <div className="compliance-steps-card-responsive compliance-steps-card-responsive-card-left compliance-steps-card-3">
                                <span className="text-md h5 compliance-step-span">3</span>

                                <h3 className="h5 text-md text-white">Change Control</h3>

                                <p className="text-18 text-rg text-grey">All system configurations and changes are managed through controlled change workflows.</p>
                            </div>

                            <div className="compliance-steps-card-responsive compliance-steps-card-responsive-card-right compliance-steps-card-4">
                                <span className="text-md h5 compliance-step-span">4</span>

                                <h3 className="h5 text-md text-white">Audit Trails</h3>

                                <p className="text-18 text-rg text-grey">Complete, immutable audit trails capturing data changes, configuration updates, user.</p>
                            </div>

                            <div className="compliance-steps-card-responsive compliance-steps-card-responsive-card-left compliance-steps-card-5">
                                <span className="text-md h5 compliance-step-span">5</span>

                                <h3 className="h5 text-md text-white">Bulk Data Changes</h3>

                                <p className="text-18 text-rg text-grey">Supports controlled bulk updates through predefined workflows, ensuring validation, review.</p>
                            </div>

                            <div className="compliance-steps-card-responsive compliance-steps-card-responsive-card-right compliance-steps-card-6">
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