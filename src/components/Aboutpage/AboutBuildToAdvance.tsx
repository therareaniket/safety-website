'Use Client';

import Image from "next/image";

export default function AboutBuildToAdvance() {
    return (
        <>
         <section className="section">
            <div className="container">
                <div className="build-to-advance-wrapper">
                    <div className="build-to-advance-left-wrapper">
                        <h2 className="text-md">Built to Advance Pharmacovigilance with Confidence</h2>

                        <p className="text-rg h6">DhatuSafety is a modern pharmacovigilance platform designed to help life sciences organizations manage safety data with clarity, control, and regulatory confidence.</p>
                    </div>
                    <div className="build-to-advance-right-wrapper">
                        <div className="compliance-driven-by">
                            <span className="build-toadvance-icon">
                                <Image src="/images/aboutpage/compliace-driven-icon.svg" alt="compliance-driven-icon" width={26} height={26} />
                            </span>

                            <div className="compliance-driven-wrapper">
                                <h3 className="text-md h5">Compliance-Driven by Design</h3>

                                <p className="h6 text-rg">It is built from the ground up to align with global pharmacovigilance quality expectations.</p>
                            </div>
                        </div>

                        <div className="build-for-real-world">
                            <span className="build-toadvance-icon build-for-safety-Operations">
                                <Image src="/images/aboutpage/build-real-safety.svg" alt="compliance-driven-icon" width={26} height={26} />
                            </span>

                            <div className="compliance-driven-wrapper">
                                <h3 className="text-md h5">Built for Real-World Safety Operations</h3>

                                <p className="h6 text-rg">Shaped by real pharmacovigilance workflows supporting sponsors, CROs, multi-region environments.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
        </>
    );
}
