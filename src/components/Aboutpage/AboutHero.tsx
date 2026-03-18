'Use Client';


type AboutHeroProps = {
  aboutHeroTitle: string,
  aboutHeroSubtitle: string
}

export default function AboutHero( { aboutHeroTitle, aboutHeroSubtitle }: AboutHeroProps ) {
  return (
    <>
      <section className="site-hero-wrapper about-hero-wrapper section">
        <div className="container">
          <div className="site-hero-text about-hero-text">
            <h1 className="text-md">{aboutHeroTitle}</h1>

            <p className="text-rg h6">{aboutHeroSubtitle}</p>
          </div>
        </div>
      </section>
    </>
  )
}