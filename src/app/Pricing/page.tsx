import PricingHero from "@/components/Pricingpage/PricingHero";
import PricingPlans from "@/components/Pricingpage/PricingPlans";
// import HomeFAQ from "@/components/Homepage/HomeFAQ";
import PricingPlanFeatures from "@/components/Pricingpage/PricingPlanFeatures";
import PricingComparison from '@/components/Pricingpage/PricingComparison';
import PricingServices from '@/components/Pricingpage/PricingServices';
import Header from "@/components/Header";
import PricingFAQ from "@/components/Pricingpage/PricingFAQ";
import { fetchGraphQL } from '@/lib/graphql';


type PricingpageData = {
    page: {
        pricingpage: {
            pricingHeroTitle: string;
            pricingHeroSubtitle: string;

            pricingPlanTitle: string;

            pricingStandardPlan :{
                title: string;
                price: string;
                month: string;
                description: string;
                pricingStandardLink :{
                    title: string;
                    url: string;
                }
                pointer1: string;
                pointer2: string;
                pointer3: string;
                pointer4: string;
            }

            pricingEnterprisePlan :{
                title: string;
                price: string;
                month: string;
                description: string;
                pricingEnterpriseLink :{
                    title: string;
                    url: string;
                }
                pointer1: string;
                pointer2: string;
                pointer3: string;
                pointer4: string;
            }

            planIncludesTitle : string;
            planIncludesSubtitle : string;

            planIncludesCard1 :{
                title: string;
                description: string;
            }

            planIncludesCard2 :{
                title: string;
                description: string;
            }

            planIncludesCard3 :{
                title: string;
                description: string;
            }

            planIncludesCard4 :{
                title: string;
                description: string;
            }

            planIncludesCard5 :{
                title: string;
                description: string;
            }

            pricingComparisonTitle : string;
            pricingComparisonSubtitle : string;

            pricingComparisonRow1 :{
                pointer1: string;
                pointer2: string;
                pointer3: string;
                pointer4: string;
                pointer5: string;
                pointer6: string;
            }

            pricingComparisonRow2 :{
                pointer1: string;
                pointer2: string;
                pointer3: string;
                pointer4: string;
                pointer5: string;
                pointer6: string;
            }

            pricingComparisonRow3 :{
                pointer1: string;
                pointer2: string;
                pointer3: string;
                pointer4: string;
                pointer5: string;
                pointer6: string;
            }

            pricingOptionalServiceTitle : string;
            pricingOptionalServiceSubtitle : string;

            pricingOptionalServiceCard1 :{
                title: string;
                description: string;
            }

            pricingOptionalServiceCard2 :{
                title: string;
                description: string;
            }

            pricingOptionalServiceCard3 :{
                title: string;
                description: string;
            }

            pricingOptionalServiceCard4 :{
                title: string;
                description: string;
            }

            pricingOptionalServiceCard5 :{
                title: string;
                description: string;
            }
            
            pricingOptionalServiceCard6 :{
                title: string;
                description: string;
            }

            pricingFaqTitle : string;
            pricingFaqSubtitle : string;
            pricingFaqWrapper :{
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

export default async function Pricing() {

        const Pricing = await fetchGraphQL<PricingpageData>(`
          query {
              page (id : "/pricing" , idType : URI) {
                  pricingpage {
                      pricingHeroTitle
                      pricingHeroSubtitle

                      pricingPlanTitle
                      
                      pricingStandardPlan {
                          title
                          price
                          month
                          description
                          pricingStandardLink { 
                          title 
                          url 
                        }
                          pointer1
                          pointer2
                          pointer3
                          pointer4
                      }

                      pricingEnterprisePlan {
                          title
                          price
                          month
                          description
                          pricingEnterpriseLink { 
                          title 
                          url 
                        }
                          pointer1
                          pointer2
                          pointer3
                          pointer4
                      }

                      planIncludesTitle
                      planIncludesSubtitle

                      planIncludesCard1 {
                          title
                          description
                      }

                      planIncludesCard2 {
                          title
                          description
                      }

                      planIncludesCard3 {
                          title
                          description
                      }

                      planIncludesCard4 {
                          title
                          description
                      }

                      planIncludesCard5 {
                          title
                          description
                      }

                      pricingComparisonTitle
                      pricingComparisonSubtitle

                      pricingComparisonRow1 {
                          pointer1
                          pointer2
                          pointer3
                          pointer4
                          pointer5
                          pointer6
                      }

                      pricingComparisonRow2 {
                          pointer1
                          pointer2
                          pointer3
                          pointer4
                          pointer5
                          pointer6
                      }

                      pricingComparisonRow3 {
                          pointer1
                          pointer2
                          pointer3
                          pointer4
                          pointer5
                          pointer6
                      }

                      pricingOptionalServiceTitle
                      pricingOptionalServiceSubtitle

                      pricingOptionalServiceCard1 {
                          title
                          description
                      }

                      pricingOptionalServiceCard2 {
                          title
                          description
                      }

                      pricingOptionalServiceCard3 {
                          title
                          description
                      }

                      pricingOptionalServiceCard4 {
                          title
                          description
                      }

                      pricingOptionalServiceCard5 {
                          title
                          description
                      }

                      pricingOptionalServiceCard6 {
                          title
                          description
                      }

                      pricingFaqTitle
                      pricingFaqSubtitle

                      pricingFaqWrapper {
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
    
        const PricingFetch = Pricing.page.pricingpage;

    return (
        <>
            <Header />

            <PricingHero pricingHeroTitle={PricingFetch.pricingHeroTitle} pricingHeroSubtitle={PricingFetch.pricingHeroSubtitle} />

            <PricingPlans
                pricingPlanTitle={PricingFetch.pricingPlanTitle}
                pricingStandardPlan={PricingFetch.pricingStandardPlan}
                pricingEnterprisePlan={PricingFetch.pricingEnterprisePlan}
            />

            <PricingPlanFeatures
            planIncludesTitle={PricingFetch.planIncludesTitle}
            planIncludesSubtitle={PricingFetch.planIncludesSubtitle}
            planIncludesCard1={PricingFetch.planIncludesCard1}
            planIncludesCard2={PricingFetch.planIncludesCard2}
            planIncludesCard3={PricingFetch.planIncludesCard3}
            planIncludesCard4={PricingFetch.planIncludesCard4}
            planIncludesCard5={PricingFetch.planIncludesCard5}
            />

            <PricingComparison 
                pricingComparisonTitle={PricingFetch.pricingComparisonTitle} 
                pricingComparisonSubtitle={PricingFetch.pricingComparisonSubtitle}
                pricingComparisonRow1={PricingFetch.pricingComparisonRow1}
                pricingComparisonRow2={PricingFetch.pricingComparisonRow2}
                pricingComparisonRow3={PricingFetch.pricingComparisonRow3}
            />

            <PricingServices
                pricingOptionalServiceTitle={PricingFetch.pricingOptionalServiceTitle}
                pricingOptionalServiceSubtitle={PricingFetch.pricingOptionalServiceSubtitle}
                pricingOptionalServiceCard1={PricingFetch.pricingOptionalServiceCard1}
                pricingOptionalServiceCard2={PricingFetch.pricingOptionalServiceCard2}
                pricingOptionalServiceCard3={PricingFetch.pricingOptionalServiceCard3}
                pricingOptionalServiceCard4={PricingFetch.pricingOptionalServiceCard4}
                pricingOptionalServiceCard5={PricingFetch.pricingOptionalServiceCard5}
                pricingOptionalServiceCard6={PricingFetch.pricingOptionalServiceCard6}
            />
            <PricingFAQ 
                pricingFaqTitle={PricingFetch.pricingFaqTitle}
                pricingFaqSubtitle={PricingFetch.pricingFaqSubtitle}
                pricingFaqWrapper={PricingFetch.pricingFaqWrapper}  
            />
        </>
    );
}