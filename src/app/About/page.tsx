import AboutHero from '@/components/Aboutpage/AboutHero'
import AboutBuildToAdvance from '@/components/Aboutpage/AboutBuildToAdvance'
import AboutEfficiencyCaseHandling from '@/components/Aboutpage/AboutEfficiencyCaseHandling'
import AboutDataMeetsMedical from '@/components/Aboutpage/AboutDataMeetsMedical'
import AboutSignalManagement from '@/components/Aboutpage/AboutSignalManagement'
import AboutReportingSubmissionCompliance from '@/components/Aboutpage/AboutReportingSubmissionCompliance'
import Header from '@/components/Header'
import { fetchGraphQL } from '@/lib/graphql';

type AboutpageData = {
  page: {
    aboutpage: {
      aboutHeroTitle: string;
      aboutHeroSubtitle: string;

      aboutBuildTitle: string;
      aboutBuildSubtitle: string;

      aboutBuildToAdvanceCardWrapper: {
        detail1Title: string;
        detail1Description: string;

        detail2Title: string;
        detail2Description: string;
      }

      aboutComplianceStepsTitle: string;
      aboutComplianceStepsSubtitle: string;

      aboutStepCard1: {
        span: string;
        title: string;
        point1: string;
        point2: string;
        point3: string;
        point4: string;
      }

      aboutStepCard2: {
        span: string;
        title: string;
        point1: string;
        point2: string;
        point3: string;
        point4: string;
      }

      aboutStepCard3: {
        span: string;
        title: string;
        point1: string;
        point2: string;
        point3: string;
        point4: string;
      }

      aboutStepCard4: {
        span: string;
        title: string;
        point1: string;
        point2: string;
        point3: string;
        point4: string;
      }

      aboutDataMeetsMedicalTitle: string;
      aboutDataMeetsMedicalSubtitle: string;

      aboutDataMeetsCard1: {
        title: string;
        description: string;
      }

      aboutDataMeetsCard2: {
        title: string;
        description: string;
      }

      aboutDataMeetsCard3: {
        title: string;
        description: string;
      }

      aboutDataMeetsCard4: {
        title: string;
        description: string;
      }

      aboutIntegrationCard: {
        title: string;
        description: string;
      }

      aboutCodingCard: {
        title: string;
        description: string;
      }

      aboutAuditCard: {
        title: string;
        description: string;
      }

      aboutSignalMangementTitle: string;
      aboutSignalManagementSubtitle: string;

      aboutReportingComplianceTitle: string;
      aboutReportingComplianceSubtitle: string;

      aboutExpeditedReportingCard: {
        title: string;
        description: string;
      }

      aboutAggregateReportingCard: {
        title: string;
        description: string;
      }

      aboutSubmissionMonitoringCard: {
        title: string;
        description: string;
      }
    }
  }
}


export default async function About() {

  const About = await fetchGraphQL<AboutpageData>(`
      query {
          page (id : "/about" , idType : URI) {
              aboutpage {
                  aboutHeroTitle
                  aboutHeroSubtitle

                  aboutBuildTitle
                  aboutBuildSubtitle

                  aboutBuildToAdvanceCardWrapper {
                      detail1Title
                      detail1Description

                      detail2Title
                      detail2Description
                  }

                  aboutComplianceStepsTitle
                  aboutComplianceStepsSubtitle

                  aboutStepCard1 {
                      span
                      title
                      point1
                      point2
                      point3
                      point4
                  }

                  aboutStepCard2 {
                      span
                      title
                      point1
                      point2
                      point3
                      point4
                  }

                  aboutStepCard3 {
                      span
                      title
                      point1
                      point2
                      point3
                      point4
                  }

                  aboutStepCard4 {
                      span
                      title
                      point1
                      point2
                      point3
                      point4
                  }

                  aboutDataMeetsMedicalTitle
                  aboutDataMeetsMedicalSubtitle

                  aboutDataMeetsCard1 {
                      title
                      description
                  }

                  aboutDataMeetsCard2 {
                      title
                      description
                  }

                  aboutDataMeetsCard3 {
                      title
                      description
                  }

                  aboutDataMeetsCard4 {
                      title
                      description
                  }

                  aboutIntegrationCard {
                      title
                      description
                  }

                  aboutCodingCard {
                      title
                      description
                  }

                  aboutAuditCard {
                      title
                      description
                  }

                  aboutSignalMangementTitle
                  aboutSignalManagementSubtitle

                  aboutReportingComplianceTitle
                  aboutReportingComplianceSubtitle

                  aboutExpeditedReportingCard {
                      title
                      description
                  }

                  aboutAggregateReportingCard {
                      title
                      description
                  }

                  aboutSubmissionMonitoringCard {
                      title
                      description
                  }
              }
          }
      }
      `);


  const AboutFetch = About.page.aboutpage;
  return (
    <>
      <Header />

      <AboutHero aboutHeroTitle={AboutFetch.aboutHeroTitle} aboutHeroSubtitle={AboutFetch.aboutHeroSubtitle} />

      <AboutBuildToAdvance aboutBuildTitle={AboutFetch.aboutBuildTitle} aboutBuildSubtitle={AboutFetch.aboutBuildSubtitle} aboutBuildToAdvanceCardWrapper={AboutFetch.aboutBuildToAdvanceCardWrapper} />

      <AboutEfficiencyCaseHandling
        aboutComplianceStepsTitle={AboutFetch.aboutComplianceStepsTitle}
        aboutComplianceStepsSubtitle={AboutFetch.aboutComplianceStepsSubtitle}
        aboutStepCard1={AboutFetch.aboutStepCard1}
        aboutStepCard2={AboutFetch.aboutStepCard2}
        aboutStepCard3={AboutFetch.aboutStepCard3}
        aboutStepCard4={AboutFetch.aboutStepCard4}
      />

      <AboutDataMeetsMedical
        aboutDataMeetsMedicalTitle={AboutFetch.aboutDataMeetsMedicalTitle}
        aboutDataMeetsMedicalSubtitle={AboutFetch.aboutDataMeetsMedicalSubtitle}
        aboutDataMeetsCard1={AboutFetch.aboutDataMeetsCard1}
        aboutDataMeetsCard2={AboutFetch.aboutDataMeetsCard2}
        aboutDataMeetsCard3={AboutFetch.aboutDataMeetsCard3}
        aboutDataMeetsCard4={AboutFetch.aboutDataMeetsCard4}  
        aboutIntegrationCard={AboutFetch.aboutIntegrationCard}
        aboutCodingCard={AboutFetch.aboutCodingCard}
        aboutAuditCard={AboutFetch.aboutAuditCard}
      />

      <AboutSignalManagement 
        aboutSignalMangementTitle={AboutFetch.aboutSignalMangementTitle}
        aboutSignalManagementSubtitle={AboutFetch.aboutSignalManagementSubtitle}
        />

      <AboutReportingSubmissionCompliance 
        aboutReportingComplianceTitle={AboutFetch.aboutReportingComplianceTitle}
        aboutReportingComplianceSubtitle={AboutFetch.aboutReportingComplianceSubtitle}
        aboutExpeditedReportingCard={AboutFetch.aboutExpeditedReportingCard}
        aboutAggregateReportingCard={AboutFetch.aboutAggregateReportingCard}
        aboutSubmissionMonitoringCard={AboutFetch.aboutSubmissionMonitoringCard}
      />
    </>
  )
}

