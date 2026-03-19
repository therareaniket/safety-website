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
import { fetchGraphQL } from "@/lib/graphql";

type HomepageData = {
    page: {
        homepage: {
            homeHeroTitle: string;
            homeHeroSubtitle: string;
            homeHeroLink: {
                title: string;
                url: string;
            }
            homeStatsTitle: string;
            homeStatsSubtitle: string;
            homeStatsCard1Numeric: string;
            homeStatsCard1Description: string;
            homeStatsCard2Numeric: string;
            homeStatsCard2Description: string;
            homeStatsCard3Numeric: string;
            homeStatsCard3Description: string;

            homeToolsTitle: string;
            homeToolsSubtitle: string;
            homeToolsCards : {
                homeToolsIcsrCardTitle: string;
                homeToolsIcsrCardSubtitle: string;
                homeToolsSignalDetectionCardTitle: string;
                homeToolsSignalDetectionCardSubtitle : string;
                homeToolsRegulatoryReportingCardTitle : string;
                homeToolsRegulatoryReportingCardSubtitle : string;
                homeToolsDataIntakeCardTitle : string;
                homeToolsDataIntakeCardSubtitle : string;
            }

            homeAiSafetyTitle : string;
            homeAiSafetySubtitle : string;

            homeSafetyOperationTitle : string;
            homeSafetyOperationSubtitle : string;

            safetyOperationWrapper : {
                safetyOperation1Title : string;
                safetyOperation1Description : string;
                safetyOperation2Title : string;
                safetyOperation2Description : string;
                safetyOperation3Title : string;
                safetyOperation3Description : string;
                safetyOperation4Title : string;
                safetyOperation4Description : string;
            }

            homeSafetyEcosystemTitle : string;
            homeSafetyEcosystemSubtitle : string;

            homeEcosystemCards : {
                homeEcosystemCard1Title : string;
                homeEcosystemCard1Description : string;
                homeEcosystemCard2Title : string;
                homeEcosystemCard2Description : string;
                homeEcosystemCard3Title : string;
                homeEcosystemCard3Description : string;
                homeEcosystemCard4Title : string;
                homeEcosystemCard4Description : string;
            }

            homePricingTitle : string;
            homePricingSubtitle : string;

            homePricingCards : {
                standardTitle : string;
                standardPrice : string;
                standardPricePerMonth : string;
                standardPlanDescription : string;
                homePricingStandardLink : {
                    title : string;
                    url : string;   
                }
                enterpriseTitle : string;
                enterprisePrice : string;
                enterprisePricePerMonth : string;
                enterprisePlanDescription : string;
                homePricingEnterpriseLink : {
                    title : string;
                    url : string;
                }
            }

            homeBlogTitle : string;
            homeBlogSubtitle : string;

            homeBlogCardWrapper : {
                blogCard1Title : string;
                blogCard1Description : string;
                blogCard2Title : string;
                blogCard2Description : string;
                blogCard3Title : string;
                blogCard3Description : string;
                blogCard4Title : string;
                blogCard4Description : string;
            }

            homeTestimonialTitle : string;
            homeTestimonialSubtitle : string;
            homeTestimonialTagline : string;

            homeTestimonialCards : {
                homeClient1Name : string;
                homeClient1Designation : string;
                homeClient1Description : string;
                homeClient2Name : string;
                homeClient2Designation : string;
                homeClient2Description : string;
            }

            homeFaqTitle : string;
            homeFaqSubtitle : string;

            homeFaqWrapper :{
                question1 : string;
                answer1 : string;
                question2 : string;
                answer2 : string;
                question3 : string;
                answer3 : string;
                question4 : string;
                answer4 : string;
                question5 : string;
                answer5 : string;
            }
        }
    }
}

export default async function Home() {

    const Home = await fetchGraphQL<HomepageData>(`
    query {
        page (id : "home" , idType : URI) {
            homepage {
                homeHeroTitle
                homeHeroSubtitle
                homeHeroLink {
                    title
                    url
                }

                homeStatsTitle
                homeStatsSubtitle
                homeStatsCard1Numeric
                homeStatsCard1Description
                homeStatsCard2Numeric
                homeStatsCard2Description
                homeStatsCard3Numeric
                homeStatsCard3Description

                homeToolsTitle
                homeToolsSubtitle
                homeToolsCards {
                    homeToolsIcsrCardTitle
                    homeToolsIcsrCardSubtitle
                    homeToolsSignalDetectionCardTitle
                    homeToolsSignalDetectionCardSubtitle
                    homeToolsRegulatoryReportingCardTitle
                    homeToolsRegulatoryReportingCardSubtitle    
                    homeToolsDataIntakeCardTitle
                    homeToolsDataIntakeCardSubtitle
                }

                homeAiSafetyTitle
                homeAiSafetySubtitle

                homeSafetyOperationTitle
                homeSafetyOperationSubtitle

                safetyOperationWrapper {
                    safetyOperation1Title
                    safetyOperation1Description
                    safetyOperation2Title
                    safetyOperation2Description
                    safetyOperation3Title
                    safetyOperation3Description
                    safetyOperation4Title
                    safetyOperation4Description
                }

                homeSafetyEcosystemTitle
                homeSafetyEcosystemSubtitle

                homeEcosystemCards {
                    homeEcosystemCard1Title
                    homeEcosystemCard1Description
                    homeEcosystemCard2Title
                    homeEcosystemCard2Description
                    homeEcosystemCard3Title
                    homeEcosystemCard3Description
                    homeEcosystemCard4Title
                    homeEcosystemCard4Description
                }
                
                homePricingTitle
                homePricingSubtitle

                homePricingCards {
                    standardTitle
                    standardPrice
                    standardPricePerMonth
                    standardPlanDescription
                    homePricingStandardLink {
                        title
                        url
                    }
                    enterpriseTitle
                    enterprisePrice
                    enterprisePricePerMonth
                    enterprisePlanDescription
                    homePricingEnterpriseLink {
                        title
                        url
                    }
                }

                homeBlogTitle
                homeBlogSubtitle

                homeBlogCardWrapper {
                    blogCard1Title
                    blogCard1Description
                    blogCard2Title
                    blogCard2Description
                    blogCard3Title
                    blogCard3Description
                    blogCard4Title
                    blogCard4Description
                }

                homeTestimonialTitle
                homeTestimonialSubtitle
                homeTestimonialTagline

                homeTestimonialCards {
                    homeClient1Name
                    homeClient1Designation
                    homeClient1Description
                    homeClient2Name
                    homeClient2Designation
                    homeClient2Description
                }

                homeFaqTitle
                homeFaqSubtitle

                homeFaqWrapper {
                    question1
                    answer1
                    question2
                    answer2
                    question3
                    answer3
                    question4
                    answer4
                    question5
                    answer5
                }
            }
        }
    }
    `);

    const HomeFetch = Home.page.homepage;

    return (
        <>
            <Header />

            <HomeHero 
            homeHeroTitle={HomeFetch.homeHeroTitle} homeHeroSubtitle={HomeFetch.homeHeroSubtitle} 
            homeHeroLink={HomeFetch.homeHeroLink} />

            <HomeStatistics homeStatsTitle={HomeFetch.homeStatsTitle}
                homeStatsSubtitle={HomeFetch.homeStatsSubtitle}
                homeStatsCard1Numeric={HomeFetch.homeStatsCard1Numeric}
                homeStatsCard1Description={HomeFetch.homeStatsCard1Description}
                homeStatsCard2Numeric={HomeFetch.homeStatsCard2Numeric}
                homeStatsCard2Description={HomeFetch.homeStatsCard2Description}
                homeStatsCard3Numeric={HomeFetch.homeStatsCard3Numeric}
                homeStatsCard3Description={HomeFetch.homeStatsCard3Description} />

            <HomeTools homeToolsTitle={HomeFetch.homeToolsTitle} homeToolsSubtitle={HomeFetch.homeToolsSubtitle} homeToolsCards={HomeFetch.homeToolsCards} />

            <HomeModals homeAiSafetyTitle={HomeFetch.homeAiSafetyTitle} homeAiSafetySubtitle={HomeFetch.homeAiSafetySubtitle} />

            <HomeOperations 
                homeSafetyOperationTitle={HomeFetch.homeSafetyOperationTitle} 
                homeSafetyOperationSubtitle={HomeFetch.homeSafetyOperationSubtitle} 
                safetyOperationWrapper={HomeFetch.safetyOperationWrapper}
                />

            <HomeEcosystem 
                homeSafetyEcosystemTitle={HomeFetch.homeSafetyEcosystemTitle} 
                homeSafetyEcosystemSubtitle={HomeFetch.homeSafetyEcosystemSubtitle} 
                homeEcosystemCards={HomeFetch.homeEcosystemCards} />

            <HomePlans 
                homePricingTitle={HomeFetch.homePricingTitle} 
                homePricingSubtitle={HomeFetch.homePricingSubtitle} 
                homePricingCards={HomeFetch.homePricingCards} />

            <HomeBlog homeBlogTitle={HomeFetch.homeBlogTitle} homeBlogSubtitle={HomeFetch.homeBlogSubtitle} homeBlogCardWrapper={HomeFetch.homeBlogCardWrapper} />

            <HomeTestimonials 
                homeTestimonialTitle={HomeFetch.homeTestimonialTitle} 
                homeTestimonialSubtitle={HomeFetch.homeTestimonialSubtitle} 
                homeTestimonialTagline={HomeFetch.homeTestimonialTagline}  
                homeTestimonialCards={HomeFetch.homeTestimonialCards}
            />

            <HomeFAQ homeFaqTitle={HomeFetch.homeFaqTitle} homeFaqSubtitle={HomeFetch.homeFaqSubtitle} homeFaqWrapper={HomeFetch.homeFaqWrapper} />
        </>
    );
}
