'use client';
import { useState, useEffect } from "react";

export default function HomeOperations() {

    const [activeIndex, setActiveIndex] = useState(0);

    const totalItems = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % totalItems)
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const opDesc = [
        { text: 'Collect and consolidate safety data from multiple sources, including ICSRs, medical literature, and external systems.' },
        { text: 'Streamline Individual Case Safety Report handling from data entry and validation to medical review.' },
        { text: 'Generate aggregate reports, manage regulatory submissions, and maintain complete quality controls.' },
        { text: 'Identify, assess, and track safety signals through their full lifecycle with automated insights monitoring.' },
    ]
                                                                                                                                                                                   
    const opNumber = [
        {
            num: 1,
            position: 'left-center',
            keyClass: 'one'
        },
        {
            num: 2,
            position: 'top-center',
            keyClass: 'two'
        },
        {
            num: 3,
            position: 'left-center',
            keyClass: 'three'
        },
        {
            num: 4,
            position: 'top-center',
            keyClass: 'four'
        }
    ]


    return (
        <>
            <section className="operations-wrapper bg-dark-grey section centered-block">
                <div className="container">
                    <div className="op-row flex items-center">
                        <div className="op-col-one main-title">
                            <h2 className="text-md text-white">How DhatuSafety Streams Safety Operations</h2>
                            <p className="h6 op-desc mb-0 text-white">DhatuSafety’s workflow is designed to simplify and strengthen every stage of pharmacovigilance and patient safety management. We begin by bringing together safety data from multiple sources, ensuring a unified and consistent intake.</p>
                        </div>
                        <div className="op-col-two">
                            <div className="op-items-inner relative centered-block">
                                <div className="op-dashed-circle rounded-full relative centered-block">
                                    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="149.5" stroke="white" strokeDasharray="10 10"/></svg>
                                    
                                    <div className="op-items-desc centered-block absolute text-center">
                                        {opDesc.map((text, index) => (
                                            <p key={index} className={`op-text text-18 text-white ${activeIndex === index ? 'active' : ''}`}>{text.text}</p>
                                        ))}
                                    </div>
                                    {opNumber.map((num, index) => (
                                        <div
                                            key={num.num}
                                            className={`op-item-number ${activeIndex === index ? 'active' : ''} ${num.keyClass} ${num.position} rounded-full absolute centered-block`} >
                                            <span className="text-md">{num.num}</span>
                                        </div>
                                    ))}
                                </div>
                                <h3 className={`op-item-title one left-center absolute h5 ${activeIndex === 0 ? 'active' : ''}`}>Unified Data Intake</h3>

                                <h3 className={`op-item-title two top-center absolute h5 ${activeIndex === 1 ? 'active' : ''}`}> Cash Managment </h3>

                                <h3 className={`op-item-title three left-center absolute h5 ${activeIndex === 2 ? 'active' : ''}`}> Reporting & Compliance </h3>

                                <h3 className={`op-item-title four top-center absolute h5 ${activeIndex === 3 ? 'active' : ''}`}> Signal Detection </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}