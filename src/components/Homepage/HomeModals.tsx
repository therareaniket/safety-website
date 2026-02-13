'use client';

import Image from "next/image";

export default function HomeModals() {

    return (
        <section className="modals-wrapper centered-block section pt-0 relative">
             <Image className="curve-sm absolute" src='/images/homepage/curve-sm.svg' alt="curve" width={1970} height={410} priority />
              <Image className="curve-lg absolute" src='/images/homepage/ai-icons/ai-lines.svg' alt="curve" width={1920} height={756} priority />
            <div className="container">
                <div className="main-title center text-center">
                    <h2 className="text-md">AI at The Heart Of Safety</h2>
                    <p className="h6">Advanced models that power clear insights, accurate detection, and efficient decision‑making.</p>
                </div>
                <div className="ai-modals-row relative centered-block">
                    <div className="ai-center-icon centered-block">
                        <Image src='/images/homepage/ai-icons/ai-center-icon.svg' alt="ai-icon" width={116} height={138} priority />
                    </div>
                    <div className="ai-icon absolute rounded-full person centered-block">
                        <Image src='/images/homepage/ai-icons/ai-icon-1.svg' alt="ai-icon-1" width={42} height={42} priority />
                    </div>
                     <div className="ai-icon absolute rounded-full calender centered-block">
                        <Image src='/images/homepage/ai-icons/ai-icon-2.svg' alt="ai-icon-2" width={42} height={42} priority />
                    </div>
                    <div className="ai-icon absolute rounded-full add-reaction centered-block">
                        <Image src='/images/homepage/ai-icons/ai-icon-3.svg' alt="ai-icon-3" width={42} height={42} priority />
                    </div>
                    <div className="ai-icon absolute rounded-full thumb-up centered-block">
                        <Image src='/images/homepage/ai-icons/ai-icon-4.svg' alt="ai-icon-4" width={42} height={42} priority />
                    </div>
                    <div className="ai-icon absolute rounded-full chat centered-block">
                        <Image src='/images/homepage/ai-icons/ai-icon-5.svg' alt="ai-icon-5" width={42} height={42} priority />
                    </div>
                    <div className="ai-icon absolute rounded-full assignment centered-block">
                        <Image src='/images/homepage/ai-icons/ai-icon-6.svg' alt="ai-icon-6" width={42} height={42} priority />
                    </div>
                    <div className="ai-icon absolute rounded-full add-ad centered-block">
                        <Image src='/images/homepage/ai-icons/ai-icon-7.svg' alt="ai-icon-7" width={42} height={42} priority />
                    </div>
                </div>
            </div>
        </section>

    )
}