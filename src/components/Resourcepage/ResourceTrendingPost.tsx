'use client';

import { type SwiperProps } from 'swiper/react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function ResourceTrendingPost() {
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

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            401: {
                slidesPerView: 1,
            },
        },
    };
    return (

        <section className="blog-wrapper section">
            <div className="container">
                <div className="resource-listing-swiper-wrapper">
                    <Swiper {...swiperConfig} className='resource-listSwiper-wrapper'>
                        <SwiperSlide className='resource-swiper-card resource-swiper-card-1'>
                            <div className="blog-swiper-left">
                                <Image src="/images/resourcepage/trending-post-1.webp" alt="" width={714} height={424}></Image>
                            </div>

                            <div className="blog-swiper-right">
                                <h2 className='text-md text-purple'>Trending Post</h2>

                                <h3 className="h4 text-md">How AI Is Reshaping Modern Pharmacovigilance</h3>

                                <p className='h6 text-rg'>Discover how AI‑powered tools are speeding up case review, improving signal detection accuracy, and helping safety teams make faster, smarter decisions—reshaping the future with intelligent automation, deeper insights, and more proactive safety strategies and smarter data intelligence.</p>

                                <div className="trending-date-span">
                                    <div className="trending-post-pn">
                                        <p className='text-14 text-sb'>AD</p>
                                    </div>

                                    <div className="trending-post-name-span">
                                        <span className='text-rg text-16 text-grey'>Arjun Deshpande</span>

                                        <span className='text-rg text-16 text-grey'>27 January 2026</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='resource-swiper-card resource-swiper-card-3'>
                            <div className="blog-swiper-left">
                                <Image src="/images/resourcepage/trending-post-3.webp" alt="" width={714} height={424}></Image>
                            </div>

                            <div className="blog-swiper-right">
                                <h2 className='text-md text-purple'>Trending Post</h2>

                                <h3 className="h4 text-md">Enhancing Compliance With Intelligent Reporting</h3>

                                <p className='h6 text-rg'>Discover how AI‑powered tools are speeding up case review, improving signal detection accuracy, and helping safety teams make faster, smarter decisions—reshaping the future with intelligent automation, deeper insights, and more proactive safety strategies and smarter data intelligence.</p>

                                <div className="trending-date-span">
                                    <div className="trending-post-pn">
                                        <p className='text-14 text-sb'>NP</p>
                                    </div>

                                    <div className="trending-post-name-span">
                                        <span className='text-rg text-16 text-grey'>Neha Pandey</span>

                                        <span className='text-rg text-16 text-grey'>27 January 2026</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='resource-swiper-card resource-swiper-card-2'>
                            <div className="blog-swiper-left">
                                <Image src="/images/resourcepage/trending-post-2.webp" alt="" width={714} height={424}></Image>
                            </div>

                            <div className="blog-swiper-right">
                                <h2 className='text-md text-purple'>Trending Post</h2>

                                <h3 className="h4 text-md">Building a Future Ready Safety Workflow For Intelligence</h3>

                                <p className='h6 text-rg'>Discover how AI‑powered tools are speeding up case review, improving signal detection accuracy, and helping safety teams make faster, smarter decisions—reshaping the future with intelligent automation, deeper insights, and more proactive safety strategies and smarter data intelligence.</p>

                                <div className="trending-date-span">
                                    <div className="trending-post-pn">
                                        <p className='text-14 text-sb'>ST</p>
                                    </div>

                                    <div className="trending-post-name-span">
                                        <span className='text-rg text-16 text-grey'>Sarah Thompson</span>

                                        <span className='text-rg text-16 text-grey'>27 January 2026</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}