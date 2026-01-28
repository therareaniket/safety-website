import HomeHero from "@/components/Homepage/HomeHero";
import HomeStatistics from "@/components/Homepage/HomeStatistics";
import HomeTools from "@/components/Homepage/HomeTools";
import HomeModals from "@/components/Homepage/HomeModals";
import HomeOperations from "@/components/Homepage/HomeOperations";
import HomeEcosystem from "@/components/Homepage/HomeEcosystem";
import HomePlans from "@/components/Homepage/HomePlans";

export default function Home() {
    return(
        <>
            <HomeHero />
            <HomeStatistics />
            <HomeTools/>
            <HomeModals/>
            <HomeOperations/>
            <HomeEcosystem/>
            <HomePlans/>
        </>
    );
}
