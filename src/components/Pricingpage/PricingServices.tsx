import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

export default function PricingServices() {
    const ref = useRef(null);

    const isInView = useInView(ref, {
        once: true,
        margin: "-100px 0px -100px 0px",
        amount: 0.5
    });

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.5
            }
        }
    };

    const iconVariants: Variants = {
        hidden: {
            scale: 0,
            opacity: 1
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };
    return (

        <section className="pricing-services-wrapper section" ref={ref}>
            <div className="container">
                <div className="main-title center text-center">
                    <h2 className="text-md text-black">Optional Add-On Services</h2>
                    <p className="h6">Enhance your plan with additional capabilities</p>
                </div>

                <motion.div
                    className="pricing-services-inner flex"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="ps-item flex green">
                        <motion.div
                            className="ps-icon centered-block rounded-full bg-green"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/ps-01.svg' alt="Additional Service Capacity" width={18.44} height={16} priority />
                        </motion.div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">Additional Service</h3>
                            <p className="h6 text-grey mb-0">Scale up your processing volume as needed</p>
                        </div>
                    </div>
                    <div className="ps-item flex blue">
                        <motion.div
                            className="ps-icon centered-block rounded-full bg-blue"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/ps-02.svg' alt="Priority Turnaround" width={16.89} height={17.78} priority />
                        </motion.div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">Priority Turnaround</h3>
                            <p className="h6 text-grey mb-0">Expedited processing for urgent cases</p>
                        </div>
                    </div>
                    <div className="ps-item flex yellow">
                        <motion.div
                            className="ps-icon centered-block rounded-full bg-yellow"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/ps-03.svg' alt="Training & Onboarding" width={16} height={17.78} priority />
                        </motion.div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">Training & Onboarding</h3>
                            <p className="h6 text-grey mb-0">Comprehensive team training programs</p>
                        </div>
                    </div>
                    <div className="ps-item flex purple">
                        <motion.div
                            className="ps-icon centered-block rounded-full bg-purple"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/ps-04.svg' alt="Custom Reports" width={16.89} height={16} priority />
                        </motion.div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">Custom Tailored Reports</h3>
                            <p className="h6 text-grey mb-0">Tailored reporting to your specifications for inspection plan</p>
                        </div>
                    </div>
                    <div className="ps-item flex orange">
                        <motion.div
                            className="ps-icon centered-block rounded-full bg-orange"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/ps-05.svg' alt="System Setup & Migration" width={17.78} height={16} priority />
                        </motion.div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">System Setup & Migration</h3>
                            <p className="h6 text-grey mb-0">Seamless integration with your systems</p>
                        </div>
                    </div>
                    <div className="ps-item flex bluish-purple">
                        <motion.div
                            className="ps-icon centered-block rounded-full bg-bluish-purple"
                            variants={iconVariants}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <Image src='/images/pricingpage/ps-06.svg' alt="Inspection Support" width={16.9} height={17.78} priority />
                        </motion.div>
                        <div className="ps-content">
                            <h3 className="h5 text-md">Inspection Support</h3>
                            <p className="h6 text-grey mb-0">On-demand assistance for health authority inspections</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}