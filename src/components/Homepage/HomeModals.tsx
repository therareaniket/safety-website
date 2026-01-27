import Image from "next/image";
import Link from "next/link";
import CurveSm from '../../assets/images/curve-sm.svg'
// import IcsrSm from '../../assets/images/icsr-sm.webp'
// import SignalLg from '../../assets/images/signal-lg.webp'
// import SignalSm from '../../assets/images/signal-sm.webp'
// import ComplianceLg from '../../assets/images/compliance-lg.webp'
// import ComplianceSm from '../../assets/images/compliance-sm.webp'
// import SaftyLg from '../../assets/images/safty-lg.webp'
// import SaftySm from '../../assets/images/safty-sm.webp'

export default function HomeModals() {
    return (

        <section className="modals-wrapper section pt-0 relative">
             <Image className="curve-sm absolute" src={CurveSm} alt="curve" width={1970} height={410} priority />
            <div className="container">
                <div className="main-title center text-center">
                    <h2 className="text-md">AI At The Heart Of Safety</h2>
                    <p className="h6">Advanced models that power clear insights, accurate detection, and efficient decision‑making.</p>
                </div>
                <div className="tools-row flex">
                </div>
            </div>
        </section>

    )
}