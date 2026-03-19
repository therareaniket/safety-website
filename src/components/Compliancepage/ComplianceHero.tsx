'use client';


type ComplianceHeroProps = {
  complianceHeroTitle: string
  complianceHeroSubtitle: string


}
export default function ComplianceHero({
  complianceHeroTitle,
  complianceHeroSubtitle,

}: ComplianceHeroProps) {
  return (
    <>
      <section className="site-hero-wrapper compliance-hero-wrapper section">
        <div className="container">
          <div className="site-hero-text compliance-hero-text">
            <h1 className="text-md">{complianceHeroTitle}</h1>
            {/* <h1 className="text-md">Designed for Regulators Trusted by Teams</h1> */}

            <p className="text-rg h6">{complianceHeroSubtitle}</p>
            {/* <p className="text-rg h6">Built to support inspections, audits, and global pharmacovigilance compliance with complete transparency and control.</p> */}
          </div>
        </div>
      </section>
    </>
  );
}