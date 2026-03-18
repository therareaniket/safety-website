'use client';
import { useEffect, useRef, useState } from "react";


type HomeStatsProps = {
  homeStatsTitle: string;
  homeStatsSubtitle: string;
  homeStatsCard1Numeric: string;
  homeStatsCard1Description: string;
  homeStatsCard2Numeric: string;
  homeStatsCard2Description: string;
  homeStatsCard3Numeric: string;
  homeStatsCard3Description: string;
}


export default function HomeStatistics({ homeStatsTitle, homeStatsSubtitle, homeStatsCard1Numeric, homeStatsCard1Description, homeStatsCard2Numeric, homeStatsCard2Description, homeStatsCard3Numeric, homeStatsCard3Description }: HomeStatsProps) {

  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return ( 
    <section ref={ref} className={`statistic-wrapper section ${show ? "show" : ""}`}>
      <div className="container">
        <div className="stats-row flex">
          <div className="stats-col-one">
            {/* <h2 className="text-md">Empowering the Future of Patient Safety</h2> */}
            <h2 className="text-md">{homeStatsTitle}</h2>
          </div>

          <div className="stats-col-two">
            {/* <p className="h6 text-black">DhatuSafety brings together clinical expertise and intelligent technology to simplify case management and strengthen signal detection, ensuring teams can identify risks faster, maintain regulatory confidence, and deliver safer outcomes throughout the entire product lifecycle.</p> */}
            <p className="h6 text-black">{homeStatsSubtitle}</p>
          </div>
        </div>

        <div className="stats-count-row">
          <div className="stats-list flex">
            <div className="stats-item one bg-dark-grey">
              <div className="stats-count flex flex-col">
                <h3 className="h2 text-md text-white">{homeStatsCard1Numeric}</h3>
                <p className="h6 text-white">{homeStatsCard1Description}</p>
              </div>
            </div>

            <div className="stats-item two bg-lavender">
              <div className="stats-count flex flex-col">
                <h3 className="h2 text-md text-black">{homeStatsCard2Numeric}</h3>
                <p className="h6 text-black">{homeStatsCard2Description}</p>
              </div>
            </div>

            <div className="stats-item three bg-dark-grey">
              <div className="stats-count flex flex-col">
                <h3 className="h2 text-md text-white">{homeStatsCard3Numeric}</h3>
                <p className="h6 text-white">{homeStatsCard3Description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}