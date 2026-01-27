import Image from "next/image";
import Link from "next/link";

export default function HomeStatistics() {
    return (

        <section className="statistic-wrapper section">
            <div className="container">
                <div className="stats-row flex">
                    <div className="stats-col-one">
                        <h2 className="text-md">Empowering the Future of Patient Safety</h2>
                    </div>
                    <div className="stats-col-two">
                        <p className="h6 text-black">DhatuSafety brings together clinical expertise and intelligent technology to simplify case management and strengthen signal detection, ensuring teams can identify risks faster, maintain regulatory confidence, and deliver safer outcomes throughout the entire product lifecycle.</p>
                    </div>
                </div>
                <div className="stats-count-row">
                    <div className="stats-list flex">
                        <div className="stats-item one bg-dark-grey">
                            <div className="stats-count flex flex-col">
                                <h3 className="h1 text-md text-white">40%</h3>
                                <p className="h6 text-white">Faster Case Processing</p>
                            </div>
                        </div>
                        <div className="stats-item two bg-lavender">
                            <div className="stats-count flex flex-col">
                                <h3 className="h1 text-md text-white">60%</h3>
                                <p className="h6 text-white">Boost In Signal Case</p>
                            </div>
                        </div>
                        <div className="stats-item three bg-dark-grey">
                            <div className="stats-count flex flex-col">
                                <h3 className="h1 text-md text-white">99.2%</h3>
                                <p className="h6 text-white">Accuracy in Case Processing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}