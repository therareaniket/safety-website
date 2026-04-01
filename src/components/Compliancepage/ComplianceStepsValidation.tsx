'use client';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import type { SwiperProps } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

type ComplianceStepsValidationProps = {
    complianceValidationTitle: string
    complianceValidationSubtitle: string

    complianceValidationCard1: {
        title: string
        description: string
    }
    complianceValidationCard2: {
        title: string
        description: string
    }
    complianceValidationCard3: {
        title: string
        description: string
    }
    complianceValidationCard4: {
        title: string
        description: string
    }
    complianceValidationCard5: {
        title: string
        description: string
    }
    complianceValidationCard6: {
        title: string
        description: string
    }
}

export default function ComplianceStepsValidation({ complianceValidationTitle, complianceValidationSubtitle, complianceValidationCard1, complianceValidationCard2, complianceValidationCard3, complianceValidationCard4, complianceValidationCard5, complianceValidationCard6 }: ComplianceStepsValidationProps) {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [activeStep, setActiveStep] = useState<number>(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);
    const [isArrowScrolling, setIsArrowScrolling] = useState(false);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const handleScroll = () => {

            // prevent conflict while auto animation is running
            if (isAutoScrolling) return;

            const cards = wrapper.querySelectorAll<HTMLDivElement>('.compliance-steps-card');

            let closestIndex = 0;
            let closestDistance = Infinity;

            const wrapperRect = wrapper.getBoundingClientRect();
            const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;

            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const cardCenter = rect.left + rect.width / 2;

                const distance = Math.abs(wrapperCenter - cardCenter);

                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });

            setActiveStep(closestIndex);
        };

        wrapper.addEventListener("scroll", handleScroll);
        return () => wrapper.removeEventListener("scroll", handleScroll);

    }, [isAutoScrolling]);

    const swiperConfig: SwiperProps = {
        modules: [Pagination, Autoplay],
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        pagination: {
            clickable: true,
        },
    };

    const getScrollAmount = () => {
        const width = window.innerWidth;

        const map: Record<number, number> = {
            1920: 314,
            1600: 290,
            1440: 255,
            1024: 225
        };

        return map[width] ?? 225; // fallback
    };

    const triggerArrowThrow = (direction: 'left' | 'right') => {
        const wrapper = wrapperRef.current;
        if (!wrapper || isArrowScrolling) return;

        setIsArrowScrolling(true);

        const cards = wrapper.querySelectorAll<HTMLDivElement>('.compliance-steps-card');

        let newIndex = activeStep;

        if (direction === 'right') newIndex++;
        else newIndex--;

        if (newIndex < 0) newIndex = cards.length - 1;
        if (newIndex >= cards.length) newIndex = 0;

        setActiveStep(newIndex);

        const baseScroll = getScrollAmount();

        const targetCard = cards[newIndex];
        const styles = window.getComputedStyle(targetCard);
        const marginRight = parseInt(styles.marginRight) || 0;
        const marginLeft = parseInt(styles.marginLeft) || 0;

        const scrollAmount = baseScroll + marginLeft + marginRight;

        const scrollPosition =
            direction === "right"
                ? wrapper.scrollLeft + scrollAmount
                : wrapper.scrollLeft - scrollAmount;

        wrapper.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        setTimeout(() => {
            setIsArrowScrolling(false);
        }, 400);
    };
    return (
        <>
            <section className="section compliance-steps-validation-section">
                <div className="container">
                    <div className=" compliance-steps-head-text-wrapper">
                        <h2 className="text-md text-white">{complianceValidationTitle}</h2>

                        <p className="h6 text-rg text-white">{complianceValidationSubtitle}</p>
                    </div>

                    <div className="compliance-steps-divider compliance-steps-divider-desktop">
                        <div ref={wrapperRef} className="compliance-validation-steps-wrapper">
                            <div data-index={0} className={`compliance-steps-card compliance-steps-card-1 ${activeStep === 0 ? 'active' : ''}`}>
                                <span className="text-md h5 compliance-step-span">1</span>

                                <h3 className="h5 text-md text-white">{complianceValidationCard1.title}</h3>

                                <p className="text-18 text-rg text-grey">{complianceValidationCard1.description}</p>
                            </div>

                            <div data-index={1} className={`compliance-steps-card compliance-steps-card-2 ${activeStep === 1 ? 'active' : ''}`}>
                                <span className="text-md h5 compliance-step-span">2</span>

                                <h3 className="h5 text-md text-white">{complianceValidationCard2.title}</h3>

                                <p className="text-18 text-rg text-grey">{complianceValidationCard2.description}</p>
                            </div>

                            <div data-index={2} className={`compliance-steps-card compliance-steps-card-3 ${activeStep === 2 ? 'active' : ''}`}>
                                <span className="text-md h5 compliance-step-span">3</span>

                                <h3 className="h5 text-md text-white">{complianceValidationCard3.title}</h3>

                                <p className="text-18 text-rg text-grey">{complianceValidationCard3.description}</p>
                            </div>

                            <div data-index={3} className={`compliance-steps-card compliance-steps-card-4 ${activeStep === 3 ? 'active' : ''}`}>
                                <span className="text-md h5 compliance-step-span">4</span>

                                <h3 className="h5 text-md text-white">{complianceValidationCard4.title}</h3>

                                <p className="text-18 text-rg text-grey">{complianceValidationCard4.description}</p>
                            </div>

                            <div data-index={4} className={`compliance-steps-card compliance-steps-card-5 ${activeStep === 4 ? 'active' : ''}`}>
                                <span className="text-md h5 compliance-step-span">5</span>

                                <h3 className="h5 text-md text-white">{complianceValidationCard5.title}</h3>

                                <p className="text-18 text-rg text-grey">{complianceValidationCard5.description}</p>
                            </div>

                            <div data-index={5} className={`compliance-steps-card compliance-steps-card-6 ${activeStep === 5 ? 'active' : ''}`}>
                                <span className="text-md h5 compliance-step-span">6</span>

                                <h3 className="h5 text-md text-white">{complianceValidationCard6.title}</h3>

                                <p className="text-18 text-rg text-grey">{complianceValidationCard6.description}</p>
                            </div>
                        </div>


                        <div className="signal-management-arrows">
                            <div
                                className="signal-management-arrow-left"
                                onClick={() => triggerArrowThrow('left')}
                            >
                                <svg className='arrow-svg' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" rx="15" transform="matrix(-1 0 0 1 30 0)" fill="#C7B0D8" />
                                    <path d="M21.9893 14.0001C22.5415 13.9941 22.994 14.437 22.9999 14.9893C23.0059 15.5415 22.563 15.994 22.0107 15.9999L22 15L21.9893 14.0001ZM6.30138 15.8756C5.90669 15.4893 5.8999 14.8562 6.28621 14.4615L12.5815 8.02959C12.9678 7.63489 13.601 7.6281 13.9957 8.01441C14.3903 8.40072 14.3971 9.03385 14.0108 9.42854L8.415 15.1458L14.1322 20.7416C14.5269 21.1279 14.5337 21.761 14.1474 22.1557C13.7611 22.5504 13.128 22.5572 12.7333 22.1709L6.30138 15.8756ZM22 15L22.0107 15.9999L7.01159 16.1609L7.00086 15.1609L6.99013 14.161L21.9893 14.0001L22 15Z" fill="white" />
                                </svg>
                            </div>

                            <div
                                className="signal-management-arrow-right"
                                onClick={() => triggerArrowThrow('right')}
                            >
                                <svg className='arrow-svg' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="30" height="30" rx="15" fill="#C7B0D8" />
                                    <path className='signal-arrows' d="M8.01073 14.0001C7.45848 13.9941 7.00598 14.437 7.00006 14.9893C6.99413 15.5415 7.43702 15.994 7.98927 15.9999L8 15L8.01073 14.0001ZM23.6986 15.8756C24.0933 15.4893 24.1001 14.8562 23.7138 14.4615L17.4185 8.02959C17.0322 7.63489 16.399 7.6281 16.0043 8.01441C15.6097 8.40072 15.6029 9.03385 15.9892 9.42854L21.585 15.1458L15.8678 20.7416C15.4731 21.1279 15.4663 21.761 15.8526 22.1557C16.2389 22.5504 16.872 22.5572 17.2667 22.1709L23.6986 15.8756ZM8 15L7.98927 15.9999L22.9884 16.1609L22.9991 15.1609L23.0099 14.161L8.01073 14.0001L8 15Z" fill="white" />
                                </svg>

                            </div>
                        </div>

                    </div>

                    <div className="compliance-steps-divider-mobile">
                        <div className="compliance-validation-steps-wrapper">
                            <div className="compliance-steps-card-responsive compliance-steps-card-responsive-card-left compliance-steps-card-1 ">
                                <span className="text-md h5 site-all-svg compliance-step-span">1</span>

                                <div className="compliance-steps-card-text">
                                    <h3 className="h5 text-md text-white">{complianceValidationCard1.title}</h3>

                                    <p className="text-18 text-rg text-grey">{complianceValidationCard1.description}</p>
                                </div>
                            </div>

                            <div className="compliance-steps-card-responsive compliance-steps-card-responsive-card-right compliance-steps-card-2">
                                <span className="text-md h5 site-all-svg compliance-step-span">2</span>

                                <div className="compliance-steps-card-text">
                                    <h3 className="h5 text-md text-white">{complianceValidationCard2.title}</h3>

                                    <p className="text-18 text-rg text-grey">{complianceValidationCard2.description}</p>
                                </div>
                            </div>

                            <div className="compliance-steps-card-responsive compliance-steps-card-responsive-card-left compliance-steps-card-3">
                                <span className="text-md h5 site-all-svg compliance-step-span">3</span>

                                <div className="compliance-steps-card-text">
                                    <h3 className="h5 text-md text-white">{complianceValidationCard3.title}</h3>

                                    <p className="text-18 text-rg text-grey">{complianceValidationCard3.description}</p>
                                </div>
                            </div>

                            <div className="compliance-steps-card-responsive compliance-steps-card-responsive-card-right compliance-steps-card-4">
                                <span className="text-md h5 site-all-svg compliance-step-span">4</span>

                                <div className="compliance-steps-card-text">
                                    <h3 className="h5 text-md text-white">{complianceValidationCard4.title}</h3>

                                    <p className="text-18 text-rg text-grey">{complianceValidationCard4.description}</p>
                                </div>
                            </div>

                            <div className="compliance-steps-card-responsive compliance-steps-card-responsive-card-left compliance-steps-card-5">
                                <span className="text-md h5 site-all-svg compliance-step-span">5</span>

                                <div className="compliance-steps-card-text">
                                    <h3 className="h5 text-md text-white">{complianceValidationCard5.title}</h3>

                                    <p className="text-18 text-rg text-grey">{complianceValidationCard5.description}</p>
                                </div>
                            </div>

                            <div className="compliance-steps-card-responsive compliance-steps-card-responsive-card-right compliance-steps-card-6">
                                <span className="text-md h5 site-all-svg compliance-step-span">6</span>

                                <div className="compliance-steps-card-text">
                                    <h3 className="h5 text-md text-white">{complianceValidationCard6.title}</h3>

                                    <p className="text-18 text-rg text-grey">{complianceValidationCard6.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="compliance-steps-mobile-swiper">
                        <Swiper {...swiperConfig} className="compliance-steps-swiper">

                            <SwiperSlide className="compliance-swiper-card">
                                <div className="card-inner">
                                    <span className="text-md h5 compliance-step-span">1</span>

                                    <h3 className="h5 text-md text-white">{complianceValidationCard1.title}</h3>

                                    <p className="text-18 text-rg text-grey">{complianceValidationCard1.description}</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="compliance-swiper-card">
                                <div className="card-inner">
                                    <span className="text-md h5 compliance-step-span">2</span>

                                    <h3 className="h5 text-md text-white">{complianceValidationCard2.title}</h3>

                                    <p className="text-18 text-rg text-grey">{complianceValidationCard2.description}</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="compliance-swiper-card">
                                <div className="card-inner">
                                    <span className="text-md h5 compliance-step-span">3</span>

                                    <h3 className="h5 text-md text-white">{complianceValidationCard3.title}</h3>

                                    <p className="text-18 text-rg text-grey">{complianceValidationCard3.description}</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="compliance-swiper-card">
                                <div className="card-inner">
                                    <span className="text-md h5 compliance-step-span">4</span>

                                    <h3 className="h5 text-md text-white">{complianceValidationCard4.title}</h3>

                                    <p className="text-18 text-rg text-grey">{complianceValidationCard4.description}</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="compliance-swiper-card">
                                <div className="card-inner">
                                    <span className="text-md h5 compliance-step-span">5</span>

                                    <h3 className="h5 text-md text-white">{complianceValidationCard5.title}</h3>

                                    <p className="text-18 text-rg text-grey">{complianceValidationCard5.description}</p>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="compliance-swiper-card">
                                <div className="card-inner">
                                    <span className="text-md h5 compliance-step-span">6</span>

                                    <h3 className="h5 text-md text-white">{complianceValidationCard6.title}</h3>

                                    <p className="text-18 text-rg text-grey">{complianceValidationCard6.description}</p>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
} 