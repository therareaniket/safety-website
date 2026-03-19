'use client';

type ContactHerprops = {
    contactHeroTitle: string;
    contactHeroSubtitle: string;
}


export default function ContactHero( { contactHeroTitle, contactHeroSubtitle }: ContactHerprops ) {
    return (
        <>
            <section className="section contact-hero-section" style={{ paddingTop : 0 }}>
                <div className="container">
                    <div className="text-center">
                        <h1 className="h2 text-md">{contactHeroTitle}</h1>

                        <p className="text-rg h6">{contactHeroSubtitle}</p>
                    </div>
                </div>
            </section>  
        </>
    );
}
