import HomeHero from "@/components/Homepage/HomeHero";
import HomeStatistics from "@/components/Homepage/HomeStatistics";
import HomeTools from "@/components/Homepage/HomeTools";
import HomeModals from "@/components/Homepage/HomeModals";
import HomeOperations from "@/components/Homepage/HomeOperations";
import HomeEcosystem from "@/components/Homepage/HomeEcosystem";
import HomePlans from "@/components/Homepage/HomePlans";
import HomeBlog from "@/components/Homepage/HomeBlog";
import HomeTestimonials from "@/components/Homepage/HomeTestimonials";
import HomeFAQ from "@/components/Homepage/HomeFAQ";
import Header from "@/components/Header";

export default function Home() {
    return(
        <>
            <Header />

            <HomeHero />
            <HomeStatistics />
            <HomeTools/>
            <HomeModals/>
            <HomeOperations/>
            <HomeEcosystem/>
            <HomePlans/>
            <HomeBlog/>
            <HomeTestimonials/>
            <HomeFAQ/>
        </>
    );
}
