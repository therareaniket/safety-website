import HomeHero from "@/components/Homepage/HomeHero";
import HomeStatistics from "@/components/Homepage/HomeStatistics";
import Image from "next/image";

export default function Home() {
    return(
        <>
            <HomeHero />
            <HomeStatistics />
        </>
    );
}
