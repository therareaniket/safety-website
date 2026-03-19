'use client';
import { useState, useEffect } from "react";

type HomeOperationProps = {
    homeSafetyOperationTitle: string;
    homeSafetyOperationSubtitle: string;

    safetyOperationWrapper: {
        safetyOperation1Title: string;
        safetyOperation1Description: string;
        safetyOperation2Title: string;
        safetyOperation2Description: string;
        safetyOperation3Title: string;
        safetyOperation3Description: string;
        safetyOperation4Title: string;
        safetyOperation4Description: string;
    }
}

export default function HomeOperations({ homeSafetyOperationTitle, homeSafetyOperationSubtitle, safetyOperationWrapper }: HomeOperationProps) {

    const [activeIndex, setActiveIndex] = useState(0);

    const totalItems = 4;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % totalItems)
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const opDesc = [
        { text: safetyOperationWrapper.safetyOperation1Description },
        { text: safetyOperationWrapper.safetyOperation2Description },
        { text: safetyOperationWrapper.safetyOperation3Description },
        { text: safetyOperationWrapper.safetyOperation4Description },
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
                            <h2 className="text-md text-white">{homeSafetyOperationTitle}</h2>
                            <p className="h6 op-desc mb-0 text-white">{homeSafetyOperationSubtitle}</p>
                        </div>
                        <div className="op-col-two">
                            <div className="op-items-inner relative centered-block">
                                <div className="op-dashed-circle rounded-full relative centered-block">
                                    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="149.5" stroke="white" strokeDasharray="10 10" /></svg>

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
                                <h3 className={`op-item-title one left-center absolute h5 ${activeIndex === 0 ? 'active' : ''}`}>{safetyOperationWrapper.safetyOperation1Title}</h3>

                                <h3 className={`op-item-title two top-center absolute h5 ${activeIndex === 1 ? 'active' : ''}`}> {safetyOperationWrapper.safetyOperation2Title} </h3>

                                <h3 className={`op-item-title three left-center absolute h5 ${activeIndex === 2 ? 'active' : ''}`}> {safetyOperationWrapper.safetyOperation3Title} </h3>

                                <h3 className={`op-item-title four top-center absolute h5 ${activeIndex === 3 ? 'active' : ''}`}> {safetyOperationWrapper.safetyOperation4Title} </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}