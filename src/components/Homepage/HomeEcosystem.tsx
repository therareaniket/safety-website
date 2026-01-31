import Image from "next/image";
import Link from "next/link";
import Sponsor from '../../assets/images/sponsor.webp'
import Cros from '../../assets/images/cros.webp'
import Pharma from '../../assets/images/pharma.webp'
import Mahs from '../../assets/images/mahs.webp'

export default function HomeEcosystem() {
    return (

        <section className="tools-wrapper section">
            <div className="container">
                <div className="main-title center text-center">
                    <h2 className="text-md">Supporting Every Corner of the Safety Ecosystem</h2>
                    <p className="h6">Built for medical teams, regulatory units, researchers, and organizations.</p>
                </div>
                <div className="eco-row flex">
                    <div className="eco-item">
                        <div className="eco-img">
                            <Image className="ec-img" src={Sponsor} alt="Clinical Sponsors" width={336} height={413} priority />
                        </div>
                        <div className="eco-title">
                            <h3 className="h4 text-md">Clinical Sponsors</h3>
                            <p className="h6">Use to streamline safety data capture, case processing</p>
                        </div>
                    </div>
                    <div className="eco-item">
                        <div className="eco-title top">
                            <h3 className="h4 text-md">CROs</h3>
                            <p className="h6">Depend for efficiently manage safety operations for multiple clients</p>
                        </div>
                        <div className="eco-img">
                            <Image className="ec-img" src={Cros} alt="Cros" width={336} height={413} priority />
                        </div>                        
                    </div>
                    <div className="eco-item">
                        <div className="eco-img">
                            <Image className="ec-img" src={Pharma} alt="Pharma & Biotech" width={336} height={413} priority />
                        </div>
                        <div className="eco-title">
                            <h3 className="h4 text-md">Pharma & Biotech</h3>
                            <p className="h6">To unify case manage, evaluate emerging safety signals, and meet global</p>
                        </div>
                    </div>
                    <div className="eco-item">
                        <div className="eco-title top">
                            <h3 className="h4 text-md">MaHs</h3>
                            <p className="h6">Marketing Authorization Holders rely to manage their full pharma trials</p>
                        </div>
                        <div className="eco-img">
                            <Image className="ec-img" src={Mahs} alt="MaHs" width={336} height={413} priority />
                        </div>                        
                    </div>
                </div>
            </div>
        </section>

    )
}