import Image from "next/image";
import Link from "next/link";
import Star from '../../assets/images/star.svg'
import GraphOne from '../../assets/images/graph-01.webp'
import GraphTwo from '../../assets/images/graph-02.webp'
import GraphThree from '../../assets/images/graph-03.webp'

export default function HomeHero() {
    return (
        <>
            <section className="hero-wrapper centered-block">
                <div className="container">
                    <div className="hero-row flex items-center">
                        <div className="hero-col-one">
                            <h1 className="text-md">Central Hub for Patient Safety Intelligence</h1>
                            <p className="h6 hero-desc">Track patient cases, analyze clinical details, and detect safety signals all from one unified, trusted platform.</p>
                            <div className="book-demo-inner flex">
                                <span className="flex">
                                    <span className="book-btn-icon bg-white centered-block"><svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.209996 10.1677C-0.0420067 10.3829 -0.0718591 10.7616 0.143319 11.0136C0.358496 11.2656 0.73722 11.2955 0.989223 11.0803L0.599609 10.624L0.209996 10.1677ZM12.4407 1.07116C12.4667 0.740812 12.22 0.451905 11.8897 0.425866L6.50638 0.00153416C6.17604 -0.0245046 5.88713 0.222185 5.86109 0.552531C5.83505 0.882877 6.08174 1.17178 6.41209 1.19782L11.1972 1.57501L10.8201 6.36017C10.794 6.69051 11.0407 6.97942 11.3711 7.00546C11.7014 7.0315 11.9903 6.78481 12.0164 6.45446L12.4407 1.07116ZM0.599609 10.624L0.989223 11.0803L12.2322 1.4803L11.8425 1.02401L11.4529 0.56772L0.209996 10.1677L0.599609 10.624Z" fill="#B8B8B8"/>
</svg></span><span className="book-btn-icon bg-purple centered-block"><Image className="" src={Star} alt="star" width={50} height={50} priority /></span>
                                </span>
                                <div className=""><p className="text-18">Explore Products</p><p className="text-18 text-purple text-md">Book Demo</p></div>
                            </div>
                        </div>
                         <div className="hero-col-two">
                            <div className="recent-activity-circle relative centered-block">
                                <div className="ra-circle-mini centered-block">
                                    <div className="ra-graph-images relative">
                                        <Image className="graph-one" src={GraphOne} alt="graph" width={386} height={273} priority />
                                        <Image className="graph-two absolute" src={GraphTwo} alt="graph" width={444} height={319} priority />
                                        <Image className="graph-three absolute" src={GraphThree} alt="graph" width={430} height={318} priority />
                                    </div>
                                </div>
                                <span className="ra-circle-lg bg-black rounded-radius centered-block"><svg width="61" height="51" viewBox="0 0 61 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M61 0C40.2 12 11.6667 5 0 0C11.2 13.6 4.66667 39.3333 0 50.5C18.4 43.3 48.3333 47.5 61 50.5C50.6 34.9 56.6667 10.3333 61 0Z" fill="#C7B0D8"/>
</svg></span>
                                <span className="ra-shapes diamond one bg-black"></span>
                                <span className="ra-shapes circle left bg-lavender"></span>
                                <span className="ra-shapes diamond two bg-black"></span>
                                <span className="ra-shapes circle right bg-black"></span>
                            </div>
                         </div>
                    </div>
                </div>
            </section>
        </>
    )
}