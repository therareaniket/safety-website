import Image from "next/image";


export default function PricingServices() {
    return (

        <section className="pricing-services-wrapper section">
            <div className="container">
                 <div className="main-title center text-center">
                    <h2 className="text-md text-black">Optional Add-On Services</h2>
                    <p className="h6">Enhance your plan with additional capabilities</p>
                </div>

                <div className="pricing-services-inner flex">
                    <div className="ps-item flex green">
                        <div className="ps-icon centered-block rounded-full bg-green">
                            <Image src='/images/pricingpage/ps-01.svg' alt="Additional Service Capacity" width={18.44} height={16} priority />
                        </div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">Additional Service Capacity</h3>
                            <p className="h6 text-grey mb-0">Scale up your processing volume as needed</p>
                        </div>
                    </div>
                    <div className="ps-item flex blue">
                        <div className="ps-icon centered-block rounded-full bg-blue">
                            <Image src='/images/pricingpage/ps-02.svg' alt="Priority Turnaround" width={16.89} height={17.78} priority />
                        </div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">Priority Turnaround</h3>
                            <p className="h6 text-grey mb-0">Expedited processing for urgent cases</p>
                        </div>
                    </div>
                    <div className="ps-item flex yellow">
                        <div className="ps-icon centered-block rounded-full bg-yellow">
                            <Image src='/images/pricingpage/ps-03.svg' alt="Training & Onboarding" width={16} height={17.78} priority />
                        </div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">Training & Onboarding</h3>
                            <p className="h6 text-grey mb-0">Comprehensive team training programs</p>
                        </div>
                    </div>  
                    <div className="ps-item flex purple">
                        <div className="ps-icon centered-block rounded-full bg-purple">
                            <Image src='/images/pricingpage/ps-04.svg' alt="Custom Reports" width={16.89} height={16} priority />
                        </div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">Custom Tailored Reports</h3>
                            <p className="h6 text-grey mb-0">Tailored reporting to your specifications for inspection plan</p>
                        </div>
                    </div>
                    <div className="ps-item flex orange">
                        <div className="ps-icon centered-block rounded-full bg-orange">
                            <Image src='/images/pricingpage/ps-05.svg' alt="System Setup & Migration" width={17.78} height={16} priority />
                        </div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">System Setup & Migration</h3>
                            <p className="h6 text-grey mb-0">Seamless integration with your systems</p>
                        </div>
                    </div>
                    <div className="ps-item flex bluish-purple">
                        <div className="ps-icon centered-block rounded-full bg-bluish-purple">
                            <Image src='/images/pricingpage/ps-06.svg' alt="Inspection Support" width={16.9} height={17.78} priority />
                        </div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">Inspection Support</h3>
                            <p className="h6 text-grey mb-0">On-demand assistance for health authority inspections</p>
                        </div>
                    </div>                  
                </div>
            </div>
        </section>
    );
}