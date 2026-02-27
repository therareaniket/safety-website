'use client';

import Header from "@/components/Header";
import Link from "next/link";

export default function ComingSoon() {
    return (
        <>
            <Header />
            <section className="section">
                <div className="container">
                    <div className="coming-soon-wrapper">
                        <h1 className="text-sb">Coming Soon !</h1>
                        <Link href='/Contact#contact-form'>
                            <div className="comming-soon-btn flex">
                                <span className="flex">
                                    <span className="book-btn-icon bg-black centered-block"><svg width="21" height="19" className="b-arrw" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.350644 16.9468C-0.0693601 17.3055 -0.119114 17.9367 0.239515 18.3567C0.598145 18.7767 1.22935 18.8264 1.64936 18.4678L1 17.7073L0.350644 16.9468ZM20.7351 1.78586C20.7785 1.23529 20.3674 0.753775 19.8168 0.710376L10.8446 0.00315809C10.294 -0.0402407 9.81253 0.370909 9.76914 0.921486C9.72574 1.47206 10.1369 1.95357 10.6875 1.99697L18.6627 2.62561L18.0341 10.6009C17.9907 11.1515 18.4018 11.633 18.9524 11.6764C19.503 11.7198 19.9845 11.3086 20.0279 10.758L20.7351 1.78586ZM1 17.7073L1.64936 18.4678L20.3876 2.46777L19.7382 1.70728L19.0889 0.9468L0.350644 16.9468L1 17.7073Z" fill="white" />
                                    </svg></span>
                                </span>
                                <div className=""><p className="text-18 text-sb text-black">Get Early Access</p></div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}