'use client';

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
        <Header />
            <section className="section page-not-found-wrapper">
                <div className="container">
                    <div className="page-not-found-inner">
                        <Image src="/images/notfoundpage/page-not-found-image.webp" alt="page not found" width={500} height={500}></Image>

                        <Link href="/" className="text-rg h5">Go To Home</Link>
                    </div>
                </div>
            </section>
        </>
    );
}