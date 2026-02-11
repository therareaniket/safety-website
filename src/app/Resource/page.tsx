'use client'   ;

import Header from "@/components/Header";
import ResourceHeading from "@/components/Resourcepage/ResourceHeading";
import ResourceListingCards from "@/components/Resourcepage/ResourceListingCards";
import ResourceTrendingPost from "@/components/Resourcepage/ResourceTrendingPost";

export default function Resource() {
    return (
        <>
            <Header />

            <ResourceHeading/>

            <ResourceTrendingPost />

            <ResourceListingCards />
        </>
    )
}