import ComplianceHero from "@/components/Compliancepage/ComplianceHero";
import ComplianceInspectionReadiness from "@/components/Compliancepage/ComplianceInspectionReadiness";
import ComplianceStepsValidation from "@/components/Compliancepage/ComplianceStepsValidation";
import ComplianceValidationSupport from "@/components/Compliancepage/ComplianceValidationSupport";
import ComplianceImmutableTrials from "@/components/Compliancepage/ComplianceImmutableTrials";
import ComplianceSecureConnectivity from "@/components/Compliancepage/ComplianceSecureConnectivity";
import ComplianceFlexibleOperations from "@/components/Compliancepage/ComplianceFlexibleOperations";
import Header from "@/components/Header";
import { fetchGraphQL } from '@/lib/graphql';


type CompliancepageData = {
    page: {
        compliancepage: {
            complianceHeroTitle: string
            complianceHeroSubtitle: string

            complianceRegulatoryTitle: string
            complianceRegulatorySubtitle: string
            complianceRegulatoryCard1: {
                title: string
                subtitle: string
            }
            complianceRegulatoryCard2: {
                title: string
                subtitle: string
            }
            complianceRegulatoryCard3: {
                title: string
                subtitle: string
            }
            complianceRegulatoryCard4: {
                title: string
                subtitle: string
            }
            complianceRegulatoryCard5: {
                title: string
                subtitle: string
            }
            complianceRegulatoryCard6: {
                title: string
                subtitle: string
            }

            complianceValidationTitle: string
            complianceValidationSubtitle: string

            complianceValidationCard1: {
                title: string
                description: string
            }
            complianceValidationCard2: {
                title: string
                description: string
            }
            complianceValidationCard3: {
                title: string
                description: string
            }
            complianceValidationCard4: {
                title: string
                description: string
            }
            complianceValidationCard5: {
                title: string
                description: string
            }
            complianceValidationCard6: {
                title: string
                description: string
            }

            complianceImplementationTitle: string
            complianceImplementationSubtitle: string

            complianceImplementationCard1: {
                title: string
                description: string
            }
            complianceImplementationCard2: {
                title: string
                description: string
            }
            complianceImplementationCard3: {
                title: string
                description: string
            }
            complianceImplementationCard4: {
                title: string
                description: string
            }

            complianceImmutableTitle: string
            complianceImmutableSubtitle: string

            complianceImmutableCard1: {
                title: string
                description: string
            }

            complianceImmutableCard2: {
                title: string
                description: string
            }

            complianceControlledAccessTitle: string
            complianceControlledAccessSubtitle: string

            complianceControlledAccessCard1: {
                title: string
                subtitle: string
            }
            complianceControlledAccessCard2: {
                title: string
                subtitle: string
            }

            complianceSecureConnectivityTitle: string
            complianceSecureConnectivitySubtitle: string

            complianceSecureConnectivityWrapper : {
                accordion1Title: string
                accordion1Description: string
                accordion2Title: string
                accordion2Description: string
                accordion3Title: string
                accordion3Description: string
                accordion4Title: string
                accordion4Description: string
                accordion5Title: string
                accordion5Description: string
                accordion6Title: string
                accordion6Description: string
            }

            complianceFlexibleOperationTitle : string
            complianceFlexibleOperationSubtitle : string

            statsNumericDescription1: string
            statsNumericDescription2: string

            complianceConfigWorkflowCard: {
                title: string
                description: string
            }

            complianceSlaManagementCard: {
                title: string
                description: string
            }

            complianceCaseLifecycleCard: {
                title: string
                description: string
            }
        }
    }
}

export default async function Compliance() {

    const Compliance = await fetchGraphQL<CompliancepageData>(`
      query {
          page (id : "/compliance" , idType : URI) {
              compliancepage {
                 complianceHeroTitle
                 complianceHeroSubtitle

                 complianceRegulatoryTitle
                 complianceRegulatorySubtitle
                 complianceRegulatoryCard1 {
                     title
                     subtitle
                 }
                 complianceRegulatoryCard2 {
                     title
                     subtitle
                 }
                 complianceRegulatoryCard3 {
                     title
                     subtitle
                 }
                 complianceRegulatoryCard4 {
                     title
                     subtitle
                 }
                 complianceRegulatoryCard5 {
                     title
                     subtitle
                 }
                 complianceRegulatoryCard6 {
                     title
                     subtitle
                 }

                 complianceValidationTitle
                 complianceValidationSubtitle

                 complianceValidationCard1 {
                     title
                     description
                 }
                 complianceValidationCard2 {
                     title
                     description
                 }
                 complianceValidationCard3 {
                     title
                     description
                 }
                 complianceValidationCard4 {
                     title
                     description
                 }
                 complianceValidationCard5 {
                     title
                     description
                 }
                 complianceValidationCard6 {
                     title
                     description
                 }

                 complianceImplementationTitle
                 complianceImplementationSubtitle

                 complianceImplementationCard1 {
                     title
                     description
                 }
                 complianceImplementationCard2 {
                     title
                     description
                 }
                 complianceImplementationCard3 {
                     title
                     description
                 }
                 complianceImplementationCard4 {
                     title
                     description
                 }

                 complianceImmutableTitle
                 complianceImmutableSubtitle

                 complianceImmutableCard1 {
                     title
                     description
                 }
                 complianceImmutableCard2 {
                     title
                     description
                 }

                 complianceControlledAccessTitle
                 complianceControlledAccessSubtitle

                 complianceControlledAccessCard1 {
                     title
                     subtitle
                 }
                 complianceControlledAccessCard2 {
                     title
                     subtitle
                }

                complianceSecureConnectivityTitle
                complianceSecureConnectivitySubtitle

                complianceSecureConnectivityWrapper {
                    accordion1Title
                    accordion1Description
                    accordion2Title 
                    accordion2Description
                    accordion3Title
                    accordion3Description
                    accordion4Title
                    accordion4Description   
                    accordion5Title
                    accordion5Description
                    accordion6Title
                    accordion6Description
                }

                complianceFlexibleOperationTitle
                complianceFlexibleOperationSubtitle
                statsNumericDescription1
                statsNumericDescription2

                            complianceConfigWorkflowCard {
                title
                description
            }

            complianceSlaManagementCard {
                title
                description
            }

            complianceCaseLifecycleCard {
                title
                description
            }
                }
          }
      }
      `);

    const ComplianceFetch = Compliance.page.compliancepage;
    return (
        <>
            <Header />

            <ComplianceHero complianceHeroTitle={ComplianceFetch.complianceHeroTitle} complianceHeroSubtitle={ComplianceFetch.complianceHeroSubtitle} />

            <ComplianceInspectionReadiness
                complianceRegulatoryTitle={ComplianceFetch.complianceRegulatoryTitle}
                complianceRegulatorySubtitle={ComplianceFetch.complianceRegulatorySubtitle}
                complianceRegulatoryCard1={ComplianceFetch.complianceRegulatoryCard1}
                complianceRegulatoryCard2={ComplianceFetch.complianceRegulatoryCard2}
                complianceRegulatoryCard3={ComplianceFetch.complianceRegulatoryCard3}
                complianceRegulatoryCard4={ComplianceFetch.complianceRegulatoryCard4}
                complianceRegulatoryCard5={ComplianceFetch.complianceRegulatoryCard5}
                complianceRegulatoryCard6={ComplianceFetch.complianceRegulatoryCard6}
            />

            <ComplianceStepsValidation
                complianceValidationTitle={ComplianceFetch.complianceValidationTitle}
                complianceValidationSubtitle={ComplianceFetch.complianceValidationSubtitle}
                complianceValidationCard1={ComplianceFetch.complianceValidationCard1}
                complianceValidationCard2={ComplianceFetch.complianceValidationCard2}
                complianceValidationCard3={ComplianceFetch.complianceValidationCard3}
                complianceValidationCard4={ComplianceFetch.complianceValidationCard4}
                complianceValidationCard5={ComplianceFetch.complianceValidationCard5}
                complianceValidationCard6={ComplianceFetch.complianceValidationCard6}
            />

            <ComplianceValidationSupport
                complianceImplementationTitle={ComplianceFetch.complianceImplementationTitle}
                complianceImplementationSubtitle={ComplianceFetch.complianceImplementationSubtitle}
                complianceImplementationCard1={ComplianceFetch.complianceImplementationCard1}
                complianceImplementationCard2={ComplianceFetch.complianceImplementationCard2}
                complianceImplementationCard3={ComplianceFetch.complianceImplementationCard3}
                complianceImplementationCard4={ComplianceFetch.complianceImplementationCard4}
            />

            <ComplianceImmutableTrials
                complianceImmutableTitle={ComplianceFetch.complianceImmutableTitle}
                complianceImmutableSubtitle={ComplianceFetch.complianceImmutableSubtitle}
                complianceImmutableCard1={ComplianceFetch.complianceImmutableCard1}
                complianceImmutableCard2={ComplianceFetch.complianceImmutableCard2}

                complianceControlledAccessTitle={ComplianceFetch.complianceControlledAccessTitle}
                complianceControlledAccessSubtitle={ComplianceFetch.complianceControlledAccessSubtitle}
                complianceControlledAccessCard1={ComplianceFetch.complianceControlledAccessCard1}
                complianceControlledAccessCard2={ComplianceFetch.complianceControlledAccessCard2}
            />

            <ComplianceSecureConnectivity 
                complianceSecureConnectivityTitle={ComplianceFetch.complianceSecureConnectivityTitle}
                complianceSecureConnectivitySubtitle={ComplianceFetch.complianceSecureConnectivitySubtitle}
                complianceSecureConnectivityWrapper={ComplianceFetch.complianceSecureConnectivityWrapper}
            />

            <ComplianceFlexibleOperations 
                complianceFlexibleOperationTitle={ComplianceFetch.complianceFlexibleOperationTitle}
                complianceFlexibleOperationSubtitle={ComplianceFetch.complianceFlexibleOperationSubtitle}
                statsNumericDescription1={ComplianceFetch.statsNumericDescription1}
                statsNumericDescription2={ComplianceFetch.statsNumericDescription2}
                complianceConfigWorkflowCard={ComplianceFetch.complianceConfigWorkflowCard}
                complianceSlaManagementCard={ComplianceFetch.complianceSlaManagementCard}
                complianceCaseLifecycleCard={ComplianceFetch.complianceCaseLifecycleCard}
            />
        </>
    );
}