
    type PricingHeroProps = {
        pricingHeroTitle: string;
        pricingHeroSubtitle: string;
    }
export default function PricingHero( { pricingHeroTitle, pricingHeroSubtitle }: PricingHeroProps  ) {


    return (

        <section className="pricing-hero-wrapper">
            <div className="container">
                <div className="pricing-title-row flex">
                    <div className="pr-col-one">
                        <h2 className="text-md">{pricingHeroTitle}</h2>
                    </div>
                    <div className="pr-col-two">
                        <p className="h6 text-black pr-desc mb-0">{pricingHeroSubtitle}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}