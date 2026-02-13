'use client';

import { useEffect, useRef } from "react";

export default function HomePlans() {
const sectionRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && sectionRef.current) {

          const separator = sectionRef.current.querySelector(".plan-home-separator");
          const leftCard = sectionRef.current.querySelector(".plan-home-page.standard");
          const rightCard = sectionRef.current.querySelector(".plan-home-page.enterprise");

          separator?.classList.add("active");
          leftCard?.classList.add("show");
          rightCard?.classList.add("show");
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

    return (

        <section ref={sectionRef} className="plans-wrapper bg-dark-grey section">
            <div className="container">
                <div className="main-title center text-center">
                    <h2 className="text-md text-white">Not Sure Which Plan Fits You?</h2>
                    <p className="h6 text-white">Talk to our team and get a custom quote within 24 hours.</p>
                </div>
                <div className="plans-row flex">
                    <div className="plan-item plan-home-page standard">
                        <div className="plan-title flex">
                            {/* <h3 className="h4 text-sb text-lightblue">Standard</h3> */}
                            <h3 className="h4 text-sb text-white">Standard</h3>
                            <div className="p-price flex"><h4 className="text-bd text-white">$49</h4><span className="text-18 text-white">per user/month</span></div>
                        </div>
                        <p className="h6 text-white">A streamlined plan with all the essential tools for efficient case trials and management.</p>
                        <div className="plan-btn">
                            <button className='main-btn flex'><span className='btn-icon bg-white centered-block'><svg className="b-arrw" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.209996 10.1677C-0.0420067 10.3829 -0.0718591 10.7616 0.143319 11.0136C0.358496 11.2656 0.73722 11.2955 0.989223 11.0803L0.599609 10.624L0.209996 10.1677ZM12.4407 1.07116C12.4667 0.740812 12.22 0.451905 11.8897 0.425866L6.50638 0.00153416C6.17604 -0.0245046 5.88713 0.222185 5.86109 0.552531C5.83505 0.882877 6.08174 1.17178 6.41209 1.19782L11.1972 1.57501L10.8201 6.36017C10.794 6.69051 11.0407 6.97942 11.3711 7.00546C11.7014 7.0315 11.9903 6.78481 12.0164 6.45446L12.4407 1.07116ZM0.599609 10.624L0.989223 11.0803L12.2322 1.4803L11.8425 1.02401L11.4529 0.56772L0.209996 10.1677L0.599609 10.624Z" fill="black" />
                            </svg></span><span className='text-md text-white text-16'>Get Your Plans</span></button>
                        </div>
                    </div>
                    
                    <div className="plan-separator plan-home-separator"></div>

                    <div className="plan-item plan-home-page enterprise">
                        <div className="plan-title flex">
                            {/* <h3 className="h4 text-sb text-lavender">Enterprise</h3> */}
                            <h3 className="h4 text-sb text-white">Enterprise</h3>
                            <div className="p-price flex"><h4 className="text-bd text-white">$299</h4><span className="text-18 text-white"> per user/month</span></div>
                        </div>
                        <p className="h6 text-white">A streamlined plan with all the essential tools for efficient case trials and management.</p>
                        <div className="plan-btn">
                            <button className='main-btn flex'><span className='btn-icon bg-white centered-block'><svg className="b-arrw" width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.209996 10.1677C-0.0420067 10.3829 -0.0718591 10.7616 0.143319 11.0136C0.358496 11.2656 0.73722 11.2955 0.989223 11.0803L0.599609 10.624L0.209996 10.1677ZM12.4407 1.07116C12.4667 0.740812 12.22 0.451905 11.8897 0.425866L6.50638 0.00153416C6.17604 -0.0245046 5.88713 0.222185 5.86109 0.552531C5.83505 0.882877 6.08174 1.17178 6.41209 1.19782L11.1972 1.57501L10.8201 6.36017C10.794 6.69051 11.0407 6.97942 11.3711 7.00546C11.7014 7.0315 11.9903 6.78481 12.0164 6.45446L12.4407 1.07116ZM0.599609 10.624L0.989223 11.0803L12.2322 1.4803L11.8425 1.02401L11.4529 0.56772L0.209996 10.1677L0.599609 10.624Z" fill="black" />
                            </svg></span><span className='text-md text-white text-16'>Get Your Plans</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}