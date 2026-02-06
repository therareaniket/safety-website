'use client'   ;

import ResourceHeading from "@/components/Resourcepage/ResourceHeading";
import ResourceListingCards from "@/components/Resourcepage/ResourceListingCards";
import ResourceTrendingPost from "@/components/Resourcepage/ResourceTrendingPost";

export default function Resource() {
    return (
        <>
            <ResourceHeading/>

            <ResourceTrendingPost />

            <ResourceListingCards />
        </>
    )
}