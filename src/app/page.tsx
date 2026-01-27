import HomeHero from "@/components/Homepage/HomeHero";
import HomeStatistics from "@/components/Homepage/HomeStatistics";
import HomeTools from "@/components/Homepage/HomeTools";
import HomeModals from "@/components/Homepage/HomeModals";

export default function Home() {
    return(
        <>
            <HomeHero />
            <HomeStatistics />
            <HomeTools/>
            <HomeModals/>
        </>
    );
}
