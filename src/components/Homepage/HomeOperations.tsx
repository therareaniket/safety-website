import Image from "next/image";
import Link from "next/link";
import Star from '../../assets/images/star.svg'
import GraphOne from '../../assets/images/graph-01.webp'
import GraphTwo from '../../assets/images/graph-02.webp'
import GraphThree from '../../assets/images/graph-03.webp'

export default function HomeOperations() {
    return (
        <>
            <section className="operations-wrapper bg-dark-grey section centered-block">
                <div className="container">
                    <div className="op-row flex items-center">
                        <div className="op-col-one">
                            <h2 className="text-md text-white">How DhatuSafety Streams Safety Operations</h2>
                            <p className="h6 op-desc text-white">DhatuSafety’s workflow is designed to simplify and strengthen every stage of pharmacovigilance and patient safety management. We begin by bringing together safety data from multiple sources, ensuring a unified and consistent intake.</p>                           
                        </div>
                         <div className="op-col-two">
                            <div className="op-items-inner relative centered-block">
                                <div className="op-dashed-circle rounded-full relative centered-block">
                                    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="149.5" stroke="white" stroke-dasharray="10 10"/></svg>
                                    <div className="op-items-desc absolute text-center">
                                        <p className="op-text text-18 text-white">Collect and consolidate safety data from multiple sources, including ICSRs, medical literature, and external systems.</p>
                                    </div>
                                    <div className="op-item-number left-center rounded-full one absolute centered-block"><span>1</span></div>
                                    <div className="op-item-number top-center rounded-full two absolute centered-block"><span>2</span></div>
                                    <div className="op-item-number left-center rounded-full three absolute centered-block"><span>3</span></div>
                                    <div className="op-item-number top-center rounded-full four absolute centered-block"><span>4</span></div>
                                </div> 
                                <h3 className="op-item-title one left-center absolute h5 text-white">Unified Data Intake</h3>
                                <h3 className="op-item-title two top-center absolute h5 text-white">Cash Managment</h3>
                                <h3 className="op-item-title three left-center absolute h5 text-white">Reporting & Compliance</h3>
                                <h3 className="op-item-title four top-center absolute h5 text-white">Signal Detection</h3>                               
                            </div>
                         </div>
                    </div>
                </div>
            </section>
        </>
    )
}