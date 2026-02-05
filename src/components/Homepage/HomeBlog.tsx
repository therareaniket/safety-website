import Image from "next/image";
import Link from "next/link";

export default function HomeBlog() {
    return (

        <section className="blog-wrapper section">
            <div className="container">
                <div className="blog-title-row flex">
                    <div className="b-col-one">
                        <h2 className="text-md">Elevate Your Safety Knowledge for a Smarter, Safer Tomorrow</h2>
                    </div>
                    <div className="b-col-two">
                        <p className="h6 text-black b-desc">Stay informed with valuable content on case management, AI, and safety innovation.</p>
                    </div>
                </div>
                <div className="blog-row-inner flex">
                    <div className="b-feature-item">
                       <div className="b-post-img">
                        <Image src='/images/homepage/blogs/b-01.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={714} height={424} priority />
                       </div>
                       <div className="b-post-content">
                       <div className="b-post-title">
                            <Link href='#'><h3 className="h4 text-md text-black">How AI Is Reshaping Modern Pharmacovigilance</h3></Link>
                            <p id='feature-desc' className="text-black">Discover how AI‑powered tools are speeding up case review, improving signal detection accuracy, and helping safety teams make faster, smarter decisions—reshaping the future.</p>
                       </div>
                       <div className="b-meta">
                            <p className="text-16 text-mid-grey">Arjun Deshpande , Clinical Research Lead</p>
                            <div className="b-category-inner flex">
                                <p className="text-16 text-mid-grey">20 January 2026</p>
                                <span className="b-category text-purple text-16">Automation</span>
                            </div>
                       </div>
                       </div>
                    </div>
                    <div className="b-post-items flex mini">
                        <div className="post-item flex">
                            <div className="b-post-img">
                                <Image src='/images/homepage/blogs/b-01.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={341} height={203} priority />
                            </div>
                            <div className="b-post-title">
                                <Link href='#'><h3 className="h4 text-md text-black">Why Use Unified Safety Data</h3></Link>
                                <p className="text-black">A deep dive into the importance of gathering safety information</p>
                            </div>
                        </div>
                        <div className="post-item flex">
                            <div className="b-post-img">
                                <Image src='/images/homepage/blogs/b-01.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={341} height={203} priority />
                            </div>
                            <div className="b-post-title">
                                <Link href='#'><h3 className="h4 text-md text-black">Building a Future Ready Safety Workflow</h3></Link>
                                <p className="text-black">Organizations are modernizing their safety processes</p>
                            </div>
                        </div>
                        <div className="post-item flex">
                            <div className="b-post-img">
                                <Image src='/images/homepage/blogs/b-01.webp' alt="How AI Is Reshaping Modern Pharmacovigilance" width={341} height={203} priority />
                            </div>
                            <div className="b-post-title">
                                <Link href='#'><h3 className="h4 text-md text-black">The Rising Importance of Real‑Time Signal</h3></Link>
                                <p className="text-black">Real‑time monitoring tools are helping organizations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}