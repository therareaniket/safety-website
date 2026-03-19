'use client';

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";


type HomeBlogProps = {
    homeBlogTitle: string;
    homeBlogSubtitle: string;

    homeBlogCardWrapper: {
        blogCard1Title: string;
        blogCard1Description: string;
        blogCard2Title: string;
        blogCard2Description: string;
        blogCard3Title: string;
        blogCard3Description: string;
        blogCard4Title: string;
        blogCard4Description: string;
    }
};


export default function HomeBlog({ homeBlogTitle, homeBlogSubtitle, homeBlogCardWrapper }: HomeBlogProps) {
    const sectionRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (!entry.isIntersecting) return;

                    const feature = section.querySelector(".reveal-feature");
                    const posts = section.querySelectorAll(".reveal-post");

                    // feature first
                    feature?.classList.add("show");

                    // stagger posts one by one
                    posts.forEach((post, index) => {
                        setTimeout(() => {
                            post.classList.add("show");
                        }, 500 + index * 350);
                        // 500ms wait after feature
                        // then each card 350ms apart
                    });

                    observer.disconnect();
                });
            },
            { threshold: 0.3 }
        );

        observer.observe(section);
    }, []);


    return (
        <section className="blog-wrapper section" ref={sectionRef}>
            <div className="container">
                <div className="blog-title-row flex">
                    <div className="b-col-one">
                        <h2 className="text-md">{homeBlogTitle}</h2>
                    </div>

                    <div className="b-col-two">
                        <p className="h6 text-black b-desc">{homeBlogSubtitle}</p>
                    </div>
                </div>

                <div className="blog-row-inner lg flex">
                    <Link href='/Resourcedetail' title="b-post" className="b-feature-item reveal-feature">
                        <div className="b-post-img">
                            <Image src='/images/homepage/blogs/b-01.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={714} height={424} priority />
                        </div>

                        <div className="b-post-content">
                            <div className="b-post-title">
                                <h3 className="h5 text-md text-black"> { homeBlogCardWrapper.blogCard1Title } </h3>
                                <p id='feature-desc' className="text-black text-grey text-18">{ homeBlogCardWrapper.blogCard1Description }</p>
                            </div>
                            <div className="b-meta">
                                <p className="text-16 text-mid-grey">Arjun Deshpande , Clinical Research Lead</p>
                                <div className="b-category-inner flex">
                                    <p className="text-16 text-mid-grey">20 January 2026</p>
                                    {/* <span className="b-category text-purple text-16">Automation</span> */}
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className="b-post-items flex mini ">
                        <Link href='/Resourcedetail' title="b-post" className="post-item flex reveal-post">
                            <div className="b-post-img">
                                <Image src='/images/homepage/blogs/home-blog-2.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={341} height={203} priority />
                            </div>
                            <div className="b-post-title">
                                <h3 className="h5 text-md text-black">{ homeBlogCardWrapper.blogCard2Title }</h3>
                                <p className="text-black text-grey text-18">{ homeBlogCardWrapper.blogCard2Description }</p>
                            </div>
                        </Link>

                        <Link href='/Resourcedetail' title="b-post" className="post-item flex reveal-post">
                            <div className="b-post-img">
                                <Image src='/images/homepage/blogs/home-blog-3.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={341} height={203} priority />
                            </div>
                            <div className="b-post-title">
                                <h3 className="h5 text-md text-black">{ homeBlogCardWrapper.blogCard3Title }</h3>
                                <p className="text-black text-grey text-18">{ homeBlogCardWrapper.blogCard3Description }</p>
                            </div>
                        </Link>

                        <Link href='/Resourcedetail' title="b-post" className="post-item flex reveal-post">
                            <div className="b-post-img">
                                <Image src='/images/homepage/blogs/home-blog-4.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={341} height={203} priority />
                            </div>
                            <div className="b-post-title">
                                <h3 className="h5 text-md text-black">{ homeBlogCardWrapper.blogCard4Title }</h3>
                                <p className="text-black text-grey text-18">{ homeBlogCardWrapper.blogCard4Description }</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="blog-slider-sm b-post-items mini">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                        }}
                        spaceBetween={20}
                        slidesPerView={1}>

                        <SwiperSlide>
                            <div className="b-feature-item">
                                <div className="b-post-img">
                                    <Image src='/images/homepage/blogs/b-01.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={714} height={424} priority />
                                </div>
                                <div className="b-post-content">
                                    <div className="b-post-title">
                                        <h3 className="h5 text-md text-black">{ homeBlogCardWrapper.blogCard1Title }</h3>

                                        <p id='feature-desc' className="text-black text-grey text-18">{ homeBlogCardWrapper.blogCard1Description }</p>
                                    </div>
                                    <div className="b-meta">
                                        <p className="text-16 text-mid-grey">Arjun Deshpande , Clinical Research Lead</p>
                                        <div className="b-category-inner flex">
                                            <p className="text-16 text-mid-grey">20 January 2026</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="post-item flex">
                                <div className="b-post-img">
                                    <Image src='/images/homepage/blogs/home-blog-2.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={341} height={203} priority />
                                </div>
                                <div className="b-post-title">
                                    <h3 className="h5 text-md text-black">{ homeBlogCardWrapper.blogCard2Title }</h3>

                                    <p className="text-black text-grey text-18">{ homeBlogCardWrapper.blogCard2Description }</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="post-item flex">
                                <div className="b-post-img">
                                    <Image src='/images/homepage/blogs/home-blog-3.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={341} height={203} priority />
                                </div>
                                <div className="b-post-title">
                                    <h3 className="h5 text-md text-black">{ homeBlogCardWrapper.blogCard3Title }</h3>

                                    <p className="text-black text-grey text-18">{ homeBlogCardWrapper.blogCard3Description }</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="post-item flex">
                                <div className="b-post-img">
                                    <Image src='/images/homepage/blogs/home-blog-4.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={341} height={203} priority />
                                </div>
                                <div className="b-post-title">
                                    <h3 className="h5 text-md text-black">{ homeBlogCardWrapper.blogCard4Title }</h3>

                                    <p className="text-black text-grey text-18">{ homeBlogCardWrapper.blogCard4Description }</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <div className="swiper-pagination"></div>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}