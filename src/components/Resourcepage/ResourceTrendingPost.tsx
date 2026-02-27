'use client';

import { type SwiperProps } from 'swiper/react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';

export default function ResourceTrendingPost() {

    const swiperConfig: SwiperProps = {
        modules: [Pagination, Autoplay],
        spaceBetween: 20,
        slidesPerView: 'auto',
        loop: true,

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        pagination: {
            clickable: true,
        },
    };


    return (
        <section className="blog-wrapper section resource-trending-post">
            <div className="container">
                <div className="resource-listing-swiper-wrapper">
                    <h2 className='text-md h3 text-purple'>Trending Post</h2>

                    <Swiper {...swiperConfig} className='resource-listSwiper-wrapper'>
                        <SwiperSlide>
                            <Link href="/Resource/the-complete-guide-to-clinical-trial-management-systems" title='blog 1' className='resource-swiper-card'>
                                <div className="blog-swiper-left blog-swiper-left-desktop">
                                    <Image
                                        src="/images/live-blogs/Blog 1.webp"
                                        alt="Trending post"
                                        width={714}
                                        height={424}
                                    />
                                </div>

                                <div className="blog-swiper-right blog-swiper-right-desktop">
                                    <div className="">
                                        <h3 className="h5 text-md">
                                            The Complete Guide to Clinical Trial Management Systems (CTMS)
                                        </h3>

                                        <p className='h6 text-rg'>
                                            Clinical trials are becoming increasingly complex, involving multiple sites, global regulatory frameworks, tight timelines, and high financial stakes. Managing this complexity through spreadsheets and disconnected systems is no longer sustainable. A Clinical Trial Management System (CTMS) is the operational backbone that centralizes, tracks, and optimizes clinical trial activities from study startup to close-out.
                                        </p>
                                    </div>

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

                                <div className="blog-swiper-mob-res">
                                    <h3 className="h5 text-md">
                                        How AI Is Reshaping Modern Pharmacovigilance
                                    </h3>

                                    <div className="blog-swiper-left">
                                        <Image
                                            src="/images/live-blogs/Blog 1.webp"
                                            alt="Trending post"
                                            width={714}
                                            height={424}
                                        />
                                    </div>

                                    <p className='h6 text-rg'>
                                        Clinical trials are becoming increasingly complex, involving multiple sites, global regulatory frameworks, tight timelines, and high financial stakes. Managing this complexity through spreadsheets and disconnected systems is no longer sustainable. A Clinical Trial Management System (CTMS) is the operational backbone that centralizes, tracks, and optimizes clinical trial activities from study startup to close-out.
                                    </p>

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
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Link href="/Resource/top-features-to-look-for-in-a-modern-ctms-platform" title='blog 2' className='resource-swiper-card'>
                                <div className="blog-swiper-left blog-swiper-left-desktop">
                                    <Image
                                        src="/images/live-blogs/Blog 2.webp"
                                        alt="Trending post"
                                        width={714}
                                        height={424}
                                    />
                                </div>

                                <div className="blog-swiper-right blog-swiper-right-desktop">
                                    <h3 className="h5 text-md">
                                        Top Features to Look for in a Modern CTMS Platform
                                    </h3>

                                    <p className='h6 text-rg'>
                                        Choosing the right CTMS directly impacts operational efficiency and study success. A modern CTMS must go beyond basic tracking and offer intelligent automation and integration.
                                    </p>

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

                                <div className="blog-swiper-mob-res">
                                    <h3 className="h5 text-md">
                                        Top Features to Look for in a Modern CTMS Platform
                                    </h3>

                                    <div className="blog-swiper-left">
                                        <Image
                                            src="/images/live-blogs/Blog 2.webp"
                                            alt="Trending post"
                                            width={714}
                                            height={424}
                                        />
                                    </div>

                                    <p className='h6 text-rg'>
                                        Choosing the right CTMS directly impacts operational efficiency and study success. A modern CTMS must go beyond basic tracking and offer intelligent automation and integration.
                                    </p>

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
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Link href="/Resource/how-ctms-improves-clinical-trial-efficiency" title='blog 3' className='resource-swiper-card'>
                                <div className="blog-swiper-left blog-swiper-left-desktop">
                                    <Image
                                        src="/images/live-blogs/Blog 3.webp"
                                        alt="Trending post"
                                        width={714}
                                        height={424}
                                    />
                                </div>

                                <div className="blog-swiper-right blog-swiper-right-desktop">
                                    <h3 className="h5 text-md">
                                        How CTMS Improves Clinical Trial Efficiency
                                    </h3>

                                    <p className='h6 text-rg'>
                                        Operational inefficiencies are one of the leading causes of trial delays. CTMS platforms streamline processes and improve coordination across stakeholders.
                                    </p>

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

                                <div className="blog-swiper-mob-res">
                                    <h3 className="h5 text-md">
                                        How CTMS Improves Clinical Trial Efficiency
                                    </h3>

                                    <div className="blog-swiper-left">
                                        <Image
                                            src="/images/live-blogs/Blog 3.webp"
                                            alt="Trending post"
                                            width={714}
                                            height={424}
                                        />
                                    </div>

                                    <p className='h6 text-rg'>
                                        Operational inefficiencies are one of the leading causes of trial delays. CTMS platforms streamline processes and improve coordination across stakeholders.
                                    </p>

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
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
