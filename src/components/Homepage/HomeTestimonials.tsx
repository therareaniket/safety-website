'use client';
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


export default function HomeTestimonials() {
    return (

        <section className="testimonial-wrapper section pt-0">
            <div className="container">
                <div className="main-title center text-center">
                    <h2 className="text-md">Why Teams Choose DhatuSafety</h2>
                    <p className="h6">See how our platform improves efficiency, compliance, and patient safety</p>
                </div>
                <div className="team-testimonial-inner flex">
                    <div className="t-title">
                        <Image className="quote-img" src='/images/homepage/quote-icon.svg' alt="Quote Icon" width={97} height={74} priority />
                        <h3 className="text-md h4">Hear What Our Customers Say For Us</h3>
                        <div className="custom-navigation flex items-center">
                            <div className="s-nav swiper-button-prev"><svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7071 8.07088C21.0976 7.68035 21.0976 7.04719 20.7071 6.65666L14.3431 0.292702C13.9526 -0.0978227 13.3195 -0.0978227 12.9289 0.292702C12.5384 0.683226 12.5384 1.31639 12.9289 1.70692L18.5858 7.36377L12.9289 13.0206C12.5384 13.4111 12.5384 14.0443 12.9289 14.4348C13.3195 14.8254 13.9526 14.8254 14.3431 14.4348L20.7071 8.07088ZM0 7.36377V8.36377H20V7.36377V6.36377H0V7.36377Z" fill="black"/>
</svg></div>
                            <div className="nav-seprator"></div>
                            <div className="s-nav swiper-button-next"><svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.7071 8.07088C21.0976 7.68035 21.0976 7.04719 20.7071 6.65666L14.3431 0.292702C13.9526 -0.0978227 13.3195 -0.0978227 12.9289 0.292702C12.5384 0.683226 12.5384 1.31639 12.9289 1.70692L18.5858 7.36377L12.9289 13.0206C12.5384 13.4111 12.5384 14.0443 12.9289 14.4348C13.3195 14.8254 13.9526 14.8254 14.3431 14.4348L20.7071 8.07088ZM0 7.36377V8.36377H20V7.36377V6.36377H0V7.36377Z" fill="black"/>
</svg></div>
                        </div>
                    </div>
                    <div className="t-testimonial-slider">
                        <Swiper
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".swiper-button-prev",
                            nextEl: ".swiper-button-next",
                        }}
                        spaceBetween={30}
                        slidesPerView={2}
                        breakpoints={{
                            0: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                            },
                            1024: {
                            slidesPerView: 2, 
                            },
                        }}
                        >
                            <SwiperSlide>
                            <div className="testi-item">
                                <div className="testi-desc">
                                    <p className="h6 text-black mb-0">DhatuSafety has transformed the way our team manages safety cases. What used to take days now takes hours.</p>
                                </div>
                                <div className="testi-title flex items-center">
                                    <div className="name-initial centered-block bg-lavender"><h4 className="h5 text-black mb-0">P</h4></div>
                                    <div className="t-name">
                                        <h4 className="h5 text-black mb-0">PV Manager</h4>
                                        <span className="text-18 text-blakc">Research Organization</span>
                                    </div>
                                </div>
                            </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testi-item">
                                    <div className="testi-desc">
                                        <p className="h6 text-black mb-0">As a clinical trial sponsor, we needed a system that could centralize all safety data without overwhelming our team.</p>
                                    </div>
                                    <div className="testi-title flex items-center">
                                        <div className="name-initial centered-block bg-lavender"><h4 className="h5 text-black mb-0">S</h4></div>
                                        <div className="t-name">
                                            <h4 className="h5 text-black mb-0">Safety Manager</h4>
                                            <span className="text-18 text-black">Global Pharma Company</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide> 
                             <SwiperSlide>
                                <div className="testi-item">
                                    <div className="testi-desc">
                                        <p className="h6 text-black mb-0">DhatuSafety has transformed the way our team manages safety cases. What used to take days now takes hours.</p>
                                    </div>
                                    <div className="testi-title flex items-center">
                                        <div className="name-initial centered-block bg-lavender"><h4 className="h5 text-black mb-0">P</h4></div>
                                        <div className="t-name">
                                            <h4 className="h5 text-black mb-0">PV Manager</h4>
                                            <span className="text-18 text-blakc">Research Organization</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>                           
                        </Swiper>
                    </div>                    
                </div>
            </div>
        </section>

    )
}