import Image from "next/image";
import Link from "next/link";
import IcsrLg from '../../assets/images/icsr-lg.webp'
import IcsrSm from '../../assets/images/icsr-sm.webp'
import SignalLg from '../../assets/images/signal-lg.webp'
import SignalSm from '../../assets/images/signal-sm.webp'
import ComplianceLg from '../../assets/images/compliance-lg.webp'
import ComplianceSm from '../../assets/images/compliance-sm.webp'
import SaftyLg from '../../assets/images/safty-lg.webp'
import SaftySm from '../../assets/images/safty-sm.webp'

export default function HomeTools() {
    return (

        <section className="tools-wrapper section pt-0">
            <div className="container">
                <div className="main-title center text-center">
                    <h2 className="text-md">Essential Tools for Reliable Patient Safety</h2>
                    <p className="h6">Our foundation of four core features ensures accuracy, compliance, and proactive risk management.</p>
                </div>
                <div className="tools-row flex">
                    <div className="tools-item orange">
                        <div className="tools-title">
                            <h3 className="h4 text-md">ICSR Case Management</h3>
                            <p className="h6">Efficient tools to capture, review, and process Individual Case Safety Reports with accuracy and speed.</p>
                        </div>
                        <div className="tools-img relative">
                            <Image className="tool-lg" src={IcsrLg} alt="ICSR Case Management" width={525} height={179} priority />
                            <Image className="tool-sm absolute" src={IcsrSm} alt="ICSR Case Management" width={326} height={104} priority />    
                        </div>
                    </div>
                    <div className="tools-item purple">
                        <div className="tools-title">
                            <h3 className="h4 text-md">Signal Detection & Risk Tracking</h3>
                            <p className="h6">Intelligent analytics to identify emerging safety signals early and monitor risk throughout the product lifecycle.</p>
                        </div>
                        <div className="tools-img relative">
                            <Image className="tool-lg" src={SignalLg} alt="Signal Detection & Risk Tracking" width={368} height={188} priority />
                            <Image className="tool-sm absolute" src={SignalSm} alt="Signal Detection & Risk Tracking" width={340} height={94} priority />    
                        </div>
                    </div>  
                </div>
                <div className="tools-row two flex">
                    <div className="tools-item blue">
                        <div className="tools-title">
                            <h3 className="h4 text-md">Compliance & Regulatory Reporting</h3>
                            <p className="h6">Built‑in support for audit trails, quality oversight, and timely generation of regulatory‑ready aggregate reports.</p>
                        </div>
                        <div className="tools-img relative">
                            <Image className="tool-lg" src={ComplianceLg} alt="Compliance & Regulatory Reporting" width={362} height={185} priority />
                            <Image className="tool-sm absolute" src={ComplianceSm} alt="Compliance & Regulatory Reporting" width={184} height={140} priority />    
                        </div>
                    </div>
                    <div className="tools-item green">
                        <div className="tools-title">
                            <h3 className="h4 text-md">Multi‑Source Safety Data Intake</h3>
                            <p className="h6">Seamless collection of safety information from various sources including literature, reports clinical systems.</p>
                        </div>
                        <div className="tools-img relative">
                            <Image className="tool-lg" src={SaftyLg} alt="Multi‑Source Safety Data Intake" width={282} height={194} priority />
                            <Image className="tool-sm absolute" src={SaftySm} alt="Multi‑Source Safety Data Intake" width={234} height={103} priority />    
                        </div>
                    </div>  
                </div>
            </div>
        </section>

    )
}