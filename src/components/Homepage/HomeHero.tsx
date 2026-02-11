import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
    return (
        <>
            <section className="hero-wrapper centered-block">
                <div className="container">
                    <div className="hero-row flex items-center">
                        <div className="hero-col-one">
                            <h1 className="text-md">Central Hub of Safety <br /> & Intelligence</h1>
                            <p className="h6 hero-desc">Track patient cases, analyze clinical details, and detect safety signals all from one unified, trusted platform.</p>
                            <div className="book-demo-main lg">
                                <Link href='#'>
                                    <div className="book-demo-inner flex">
                                        <span className="flex">
                                            <span className="book-btn-icon bg-purple centered-block"><svg width="21" height="19" className="b-arrw" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.350644 16.9468C-0.0693601 17.3055 -0.119114 17.9367 0.239515 18.3567C0.598145 18.7767 1.22935 18.8264 1.64936 18.4678L1 17.7073L0.350644 16.9468ZM20.7351 1.78586C20.7785 1.23529 20.3674 0.753775 19.8168 0.710376L10.8446 0.00315809C10.294 -0.0402407 9.81253 0.370909 9.76914 0.921486C9.72574 1.47206 10.1369 1.95357 10.6875 1.99697L18.6627 2.62561L18.0341 10.6009C17.9907 11.1515 18.4018 11.633 18.9524 11.6764C19.503 11.7198 19.9845 11.3086 20.0279 10.758L20.7351 1.78586ZM1 17.7073L1.64936 18.4678L20.3876 2.46777L19.7382 1.70728L19.0889 0.9468L0.350644 16.9468L1 17.7073Z" fill="white" />
                                            </svg></span><span className="book-btn-icon bg-white centered-block"><Image className="" src='/images/homepage/star.svg' alt="star" width={50} height={50} priority /></span>
                                        </span>
                                        <div className=""><p className="text-18 text-sb text-purple">Explore Products</p><p className="text-18">Book Demo</p></div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="hero-col-two">
                            <div className="recent-activity-circle relative centered-block">
                                <div className="ra-circle-mini centered-block">
                                    <div className="ra-graph-images relative">
                                        <Image className="graph-one site-radius-10" src='/images/homepage/hero-graph.webp' alt="hero-graph" width={300} height={206} priority />
                                        {/* <Image className="graph-two absolute" src='/images/homepage/graph-02.webp' alt="graph" width={444} height={319} priority />
                                        <Image className="graph-three absolute" src='/images/homepage/graph-03.webp' alt="graph" width={430} height={318} priority /> */}
                                    </div>
                                </div>
                                <div className="ra-spin-circle">
                                    <span className="ra-circle-lg bg-black rounded-radius centered-block"><svg width="61" height="51" viewBox="0 0 61 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M61 0C40.2 12 11.6667 5 0 0C11.2 13.6 4.66667 39.3333 0 50.5C18.4 43.3 48.3333 47.5 61 50.5C50.6 34.9 56.6667 10.3333 61 0Z" fill="#C7B0D8" />
                                    </svg></span>
                                    <span className="ra-shapes diamond one bg-black"></span>
                                    <span className="ra-shapes circle left bg-lavender"></span>
                                    <span className="ra-shapes diamond two bg-black"></span>
                                    <span className="ra-shapes circle right bg-black"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="book-demo-main sm">
                        <Link href='#'>
                            <div className="book-demo-inner flex">
                                <span className="flex">
                                    <span className="book-btn-icon bg-purple centered-block"><svg width="21" height="19" className="b-arrw" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.350644 16.9468C-0.0693601 17.3055 -0.119114 17.9367 0.239515 18.3567C0.598145 18.7767 1.22935 18.8264 1.64936 18.4678L1 17.7073L0.350644 16.9468ZM20.7351 1.78586C20.7785 1.23529 20.3674 0.753775 19.8168 0.710376L10.8446 0.00315809C10.294 -0.0402407 9.81253 0.370909 9.76914 0.921486C9.72574 1.47206 10.1369 1.95357 10.6875 1.99697L18.6627 2.62561L18.0341 10.6009C17.9907 11.1515 18.4018 11.633 18.9524 11.6764C19.503 11.7198 19.9845 11.3086 20.0279 10.758L20.7351 1.78586ZM1 17.7073L1.64936 18.4678L20.3876 2.46777L19.7382 1.70728L19.0889 0.9468L0.350644 16.9468L1 17.7073Z" fill="white" />
                                    </svg></span><span className="book-btn-icon bg-white centered-block"><Image className="" src='/images/homepage/star.svg' alt="star" width={50} height={50} priority /></span>
                                </span>
                                <div className=""><p className="text-18 text-sb text-purple">Explore Products</p><p className="text-18">Book Demo</p></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}