import Image from "next/image";


export default function PricingPlanFeatures() {
    return (

        <section className="pricing-feature-wrapper section pt-0">
            <div className="container">
                 <div className="main-title center text-center">
                    <h2 className="text-md text-black">What’s Included In All Plans</h2>
                    <p className="h6">Every plan comes with our core features and commitment to excellence</p>
                </div>

                <div className="pricing-feature-inner flex">
                    <div className="pf-item text-center blue">
                        <div className="pf-icon centered-block rounded-full bg-blue">
                            <Image src='/images/pricingpage/pf-01.svg' alt="Compliant Process" width={16.67} height={15.83} priority />
                        </div>
                        <div className="pf-content">
                            <h3 className="h5 text-md">Compliant Process</h3>
                            <p className="h6 text-grey mb-0">All workflows meet standards</p>
                        </div>
                    </div>
                    <div className="pf-item text-center orange">
                        <div className="pf-icon centered-block rounded-full bg-orange">
                            <Image src='/images/pricingpage/pf-01.svg' alt="Experienced Professionals" width={16.67} height={15.83} priority />
                        </div>
                        <div className="pf-content">
                            <h3 className="h5 text-md">Experienced Professionals</h3>
                            <p className="h6 text-grey mb-0">Industry-leading safety experts</p>
                        </div>
                    </div>
                    <div className="pf-item text-center green">
                        <div className="pf-icon centered-block rounded-full bg-green">
                            <Image src='/images/pricingpage/pf-03.svg' alt="Quality Checks" width={13.33} height={17.5} priority />
                        </div>
                        <div className="pf-content">
                            <h3 className="h5 text-md">Quality Checks</h3>
                            <p className="h6 text-grey mb-0">Multi-level review processes</p>
                        </div>
                    </div>
                    <div className="pf-item text-center yellow">
                        <div className="pf-icon centered-block rounded-full bg-yellow">
                            <Image src='/images/pricingpage/pf-04.svg' alt="Secure Data Handling" width={13.33} height={16.67} priority />
                        </div>
                        <div className="pf-content">
                            <h3 className="h5 text-md">Secure Data Handling</h3>
                            <p className="h6 text-grey mb-0">Enterprise-grade security protocols</p>
                        </div>
                    </div>
                    <div className="pf-item text-center bluish-purple">
                        <div className="pf-icon centered-block rounded-full bg-bluish-purple">
                            <Image src='/images/pricingpage/pf-05.svg' alt="Compliant Process" width={20} height={15} priority />
                        </div>
                        <div className="pf-content">
                            <h3 className="h5 text-md">Regular Communication</h3>
                            <p className="h6 text-grey mb-0">Transparent updates and reporting</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}