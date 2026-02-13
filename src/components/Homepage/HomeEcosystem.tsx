'use client';

import Image from "next/image";
import Link from "next/link";


export default function HomeEcosystem() {

    return (
        <section className="tools-wrapper section eco-system">
            <div className="container">
                <div className="main-title center text-center">
                    <h2 className="text-md">Supporting Every Corner of the Safety Ecosystem</h2>
                    <p className="h6">Built for medical teams, regulatory units, researchers, and organizations.</p>
                </div>

                <div className="eco-row flex">
                    <div className="eco-item">
                        <div className="eco-img">
                            <Image className="ec-img" src='/images/homepage/sponsor.webp' alt="Clinical Sponsors" width={336} height={413} priority />
                        </div>
                        <div className="eco-title">
                            <h3 className="h5 text-md">Clinical Sponsors</h3>
                            <p className="text-18">Use to streamline safety data capture, case processing</p>
                        </div>
                    </div>

                    <div className="eco-item">
                        <div className="eco-title top">
                            <h3 className="h5 text-md">CROs</h3>
                            <p className="text-18">Depend for efficiently manage safety operations for multiple clients</p>
                        </div>
                        <div className="eco-img">
                            <Image className="ec-img" src='/images/homepage/cros.webp' alt="Cros" width={336} height={413} priority />
                        </div>
                    </div>

                    <div className="eco-item">
                        <div className="eco-img">
                            <Image className="ec-img" src='/images/homepage/pharma.webp' alt="Pharma & Biotech" width={336} height={413} priority />
                        </div>
                        <div className="eco-title">
                            <h3 className="h5 text-md">Pharma</h3>
                            <p className="text-18">To unify case manage, evaluate emerging safety signals, and meet global</p>
                        </div>
                    </div>

                    <div className="eco-item">
                        <div className="eco-title top">
                            <h3 className="h5 text-md">MAHs</h3>
                            <p className="text-18">Marketing Authorization Holders rely to manage</p>
                        </div>
                        <div className="eco-img">
                            <Image className="ec-img" src='/images/homepage/mahs.webp' alt="MAHs" width={336} height={413} priority />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
