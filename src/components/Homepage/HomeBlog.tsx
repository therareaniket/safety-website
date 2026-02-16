'use client';

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef } from "react";

export default function HomeBlog() {
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
                        <h2 className="text-md">Elevate Your Safety Knowledge for a Smarter, Safer Tomorrow</h2>
                    </div>

                    <div className="b-col-two">
                        <p className="h6 text-black b-desc">Stay informed with valuable content on case management, AI, and safety innovation.</p>
                    </div>
                </div>

                <div className="blog-row-inner lg flex">
                    <Link href='/Resourcedetail' className="b-feature-item reveal-feature">
                        <div className="b-post-img">
                            <Image src='/images/homepage/blogs/b-01.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={714} height={424} priority />
                        </div>

                        <div className="b-post-content">
                            <div className="b-post-title">
                                <h3 className="h4 text-md text-black">How AI Is Reshaping Modern Pharmacovigilance</h3>
                                <p id='feature-desc' className="text-black text-grey">Discover how AI‑powered tools are speeding up case review, improving signal detection accuracy, and helping safety teams make faster, smarter decisions—reshaping the future.</p>
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
                        <Link href='/Resourcedetail' className="post-item flex reveal-post">
                            <div className="b-post-img">
                                <Image src='/images/homepage/blogs/home-blog-2.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={341} height={203} priority />
                            </div>
                            <div className="b-post-title">
                                <h3 className="h4 text-md text-black">Why Use Unified Safety Data</h3>
                                <p className="text-black text-grey">A deep dive into the importance of gathering safety information</p>
                            </div>
                        </Link>

                        <Link href='/Resourcedetail' className="post-item flex reveal-post">
                            <div className="b-post-img">
                                <Image src='/images/homepage/blogs/home-blog-3.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={341} height={203} priority />
                            </div>
                            <div className="b-post-title">
                                <h3 className="h4 text-md text-black">Building a Future Ready Safety Workflow</h3>
                                <p className="text-black text-grey">Organizations are modernizing their safety processes</p>
                            </div>
                        </Link>

                        <Link href='/Resourcedetail' className="post-item flex reveal-post">
                            <div className="b-post-img">
                                <Image src='/images/homepage/blogs/home-blog-4.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={341} height={203} priority />
                            </div>
                            <div className="b-post-title">
                                <h3 className="h4 text-md text-black">The Rising Importance of Real‑Time Signal</h3>
                                <p className="text-black text-grey">Real‑time monitoring tools are helping organizations</p>
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
                                        <h3 className="h4 text-md text-black">How AI Is Reshaping Modern Pharmacovigilance</h3>

                                        <p id='feature-desc' className="text-black text-grey">Discover how AI‑powered tools are speeding up case review, improving signal detection accuracy, and helping safety teams make faster, smarter decisions—reshaping the future.</p>
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
                                    <h3 className="h4 text-md text-black">Why Use Unified Safety Data</h3>

                                    <p className="text-black text-grey">A deep dive into the importance of gathering safety information</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="post-item flex">
                                <div className="b-post-img">
                                    <Image src='/images/homepage/blogs/home-blog-3.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={341} height={203} priority />
                                </div>
                                <div className="b-post-title">
                                    <h3 className="h4 text-md text-black">Building a Future Ready Safety Workflow</h3>

                                    <p className="text-black text-grey">Organizations are modernizing their safety processes</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="post-item flex">
                                <div className="b-post-img">
                                    <Image src='/images/homepage/blogs/home-blog-4.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={341} height={203} priority />
                                </div>
                                <div className="b-post-title">
                                    <h3 className="h4 text-md text-black">The Rising Importance of Real‑Time Signal</h3>

                                    <p className="text-black text-grey">Real‑time monitoring tools are helping organizations</p>
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