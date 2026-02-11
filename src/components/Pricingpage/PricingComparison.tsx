import Image from "next/image";


export default function PricingPlanFeatures() {
    return (

        <section className="pricing-comparison-wrapper bg-dark-grey section">
            <div className="container">
                 <div className="main-title center text-center">
                    <h2 className="text-md text-white">Simple Comparison</h2>
                    <p className="h6 text-white">See how our plans compare at a glance</p>
                </div>

                <div className="pricing-comparison-inner">
                   <div className="pc-item flex items-center">
                        <div className="pc-type"><h3 className="h4 text-md text-white mb-0">Feature</h3></div>
                        <div className="pc-text one"><h4 className="h5 text-rg text-white">Service Capacity</h4></div>
                        <div className="pc-text two"><h4 className="h5 text-rg text-white">Turnaround Time</h4></div>
                        <div className="pc-text three"><h4 className="h5 text-rg text-white">Dedicated Contact</h4></div>
                        <div className="pc-text four"><h4 className="h5 text-rg text-white">Customization</h4></div>
                        <div className="pc-text five"><h4 className="h5 text-rg text-white">Support Level</h4></div>
                   </div>
                    <div className="pc-item two flex items-center">
                        <div className="pc-type standard"><h3 className="h4 text-md text-white mb-0">Standard</h3></div>
                        <div className="pc-text one"><h4 className="h6 text-mid-grey mb-0">Medium</h4></div>
                        <div className="pc-text two"><h4 className="h6 text-mid-grey mb-0">Faster</h4></div>
                        <div className="pc-text three"><h4 className="h6 text-mid-grey mb-0">Yes</h4></div>
                        <div className="pc-text four"><h4 className="h6 text-mid-grey mb-0">Limited</h4></div>
                        <div className="pc-text five"><h4 className="h6 text-mid-grey mb-0">Priority</h4></div>
                   </div>
                   <div className="pc-item three flex items-center">
                        <div className="pc-type enterprise"><h3 className="h4 text-md text-white mb-0">Enterprise</h3></div>
                        <div className="pc-text one"><h4 className="h6 text-mid-grey mb-0">High</h4></div>
                        <div className="pc-text two"><h4 className="h6 text-mid-grey mb-0">Priority</h4></div>
                        <div className="pc-text three"><h4 className="h6 text-mid-grey mb-0">Yes</h4></div>
                        <div className="pc-text four"><h4 className="h6 text-mid-grey mb-0">Full</h4></div>
                        <div className="pc-text five"><h4 className="h6 text-mid-grey mb-0">24/7</h4></div>
                   </div>
                </div>

                {/* <div className="pricing-comparison-inner flex sm">
                    <div className="pc-item flex flex-col items-center">
                        <div className="pc-type"><h3 className="h4 text-md text-white mb-0">Feature</h3></div>
                        <div className="pc-text one"><h4 className="h5 text-rg text-white">Service Capacity</h4></div>
                        <div className="pc-text two"><h4 className="h5 text-rg text-white">Turnaround Time</h4></div>
                        <div className="pc-text three"><h4 className="h5 text-rg text-white">Dedicated Contact</h4></div>
                        <div className="pc-text four"><h4 className="h5 text-rg text-white">Customization</h4></div>
                        <div className="pc-text five"><h4 className="h5 text-rg text-white">Support Level</h4></div>                        
                    </div>
                    <div className="pc-item flex flex-col items-center">
                        <div className="pc-type standard"><h3 className="h4 text-md text-white mb-0">Standard</h3></div>
                        <div className="pc-text one"><h4 className="h6 text-mid-grey mb-0">Medium</h4></div>
                        <div className="pc-text two"><h4 className="h6 text-mid-grey mb-0">Faster</h4></div>
                        <div className="pc-text three"><h4 className="h6 text-mid-grey mb-0">Yes</h4></div>
                        <div className="pc-text four"><h4 className="h6 text-mid-grey mb-0">Limited</h4></div>
                        <div className="pc-text five"><h4 className="h6 text-mid-grey mb-0">Priority</h4></div>
                    </div>
                     <div className="pc-item flex flex-col items-center">
                        <div className="pc-type enterprise"><h3 className="h4 text-md text-white mb-0">Enterprise</h3></div>
                        <div className="pc-text one"><h4 className="h6 text-mid-grey mb-0">High</h4></div>
                        <div className="pc-text two"><h4 className="h6 text-mid-grey mb-0">Priority</h4></div>
                        <div className="pc-text three"><h4 className="h6 text-mid-grey mb-0">Yes</h4></div>
                        <div className="pc-text four"><h4 className="h6 text-mid-grey mb-0">Full</h4></div>
                        <div className="pc-text five"><h4 className="h6 text-mid-grey mb-0">24/7</h4></div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}