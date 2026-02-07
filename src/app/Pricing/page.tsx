'use client';

import PricingHero from "@/components/Pricingpage/PricingHero";
import PricingPlans from "@/components/Pricingpage/PricingPlans";
import HomeFAQ from "@/components/Homepage/HomeFAQ";
import PricingPlanFeatures from "@/components/Pricingpage/PricingPlanFeatures";
import PricingComparison from '@/components/Pricingpage/PricingComparison';
import PricingServices from '@/components/Pricingpage/PricingServices';
import Header from "@/components/Header";

export default function Pricing() {
    return (
        <>
            <Header />

            <PricingHero />
            <PricingPlans/>
            <PricingPlanFeatures/>
            <PricingComparison/>
            <PricingServices/>
            <HomeFAQ/>           
        </>
    );
}