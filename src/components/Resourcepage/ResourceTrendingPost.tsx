'use client';

import { type SwiperProps } from 'swiper/react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { useEffect } from 'react';
import Link from 'next/link';

export default function ResourceTrendingPost() {

    const swiperConfig: SwiperProps = {
        modules: [Pagination, Autoplay],
        spaceBetween: 20,
        slidesPerView: 'auto',
        loop: true,

        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },

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
                            <Link href="/Resourcedetail"  className='resource-swiper-card'>
                                <div className="blog-swiper-left blog-swiper-left-desktop">
                                    <Image
                                        src="/images/resourcepage/trending-post-1.webp"
                                        alt="Trending post"
                                        width={714}
                                        height={424}
                                    />
                                </div>

                                <div className="blog-swiper-right blog-swiper-right-desktop">
                                    <div className="">
                                        <h3 className="h5 text-md">
                                            How AI Is Reshaping Modern Pharmacovigilance
                                        </h3>

                                        <p className='h6 text-rg'>
                                            Discover how AI-powered tools are speeding up case review,
                                            improving signal detection accuracy, and helping safety teams
                                            make faster, smarter decisions.
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
                                            src="/images/resourcepage/trending-post-1.webp"
                                            alt="Trending post"
                                            width={714}
                                            height={424}
                                        />
                                    </div>

                                    <p className='h6 text-rg'>
                                        Discover how AI-powered tools are speeding up case review,
                                        improving signal detection accuracy, and helping safety teams
                                        make faster, smarter decisions.
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
                            <Link href="/Resourcedetail" className='resource-swiper-card'>
                                <div className="blog-swiper-left blog-swiper-left-desktop">
                                    <Image
                                        src="/images/resourcepage/trending-post-3.webp"
                                        alt="Trending post"
                                        width={714}
                                        height={424}
                                    />
                                </div>

                                <div className="blog-swiper-right blog-swiper-right-desktop">
                                    <h3 className="h5 text-md">
                                        Enhancing Compliance With Intelligent Reporting
                                    </h3>

                                    <p className='h6 text-rg'>
                                        Discover how AI-powered tools are speeding up case review,
                                        improving signal detection accuracy, and helping safety teams
                                        make faster, smarter decisions.
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
                                        Enhancing Compliance With Intelligent Reporting
                                    </h3>

                                    <div className="blog-swiper-left">
                                        <Image
                                            src="/images/resourcepage/trending-post-3.webp"
                                            alt="Trending post"
                                            width={714}
                                            height={424}
                                        />
                                    </div>

                                    <p className='h6 text-rg'>
                                        Discover how AI-powered tools are speeding up case review,
                                        improving signal detection accuracy, and helping safety teams
                                        make faster, smarter decisions.
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
                            <Link href="/Resourcedetail" className='resource-swiper-card'>
                                <div className="blog-swiper-left blog-swiper-left-desktop">
                                    <Image
                                        src="/images/resourcepage/trending-post-2.webp"
                                        alt="Trending post"
                                        width={714}
                                        height={424}
                                    />
                                </div>

                                <div className="blog-swiper-right blog-swiper-right-desktop">
                                    <h3 className="h5 text-md">
                                        Building a Future Ready Safety Workflow
                                    </h3>

                                    <p className='h6 text-rg'>
                                        Discover how AI-powered tools are speeding up case review,
                                        improving signal detection accuracy, and helping safety teams
                                        make faster, smarter decisions.
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
                                        Building a Future Ready Safety Workflow
                                    </h3>

                                    <div className="blog-swiper-left">
                                        <Image
                                            src="/images/resourcepage/trending-post-2.webp"
                                            alt="Trending post"
                                            width={714}
                                            height={424}
                                        />
                                    </div>

                                    <p className='h6 text-rg'>
                                        Discover how AI-powered tools are speeding up case review,
                                        improving signal detection accuracy, and helping safety teams
                                        make faster, smarter decisions.
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
