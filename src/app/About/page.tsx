"Use Client"

import AboutHero from '@/components/Aboutpage/AboutHero'
import AboutBuildToAdvance from '@/components/Aboutpage/AboutBuildToAdvance'
import AboutEfficiencyCaseHandling from '@/components/Aboutpage/AboutEfficiencyCaseHandling'
import AboutDataMeetsMedical from '@/components/Aboutpage/AboutDataMeetsMedical'
import AboutSignalManagement from '@/components/Aboutpage/AboutSignalManagement'
import AboutReportingSubmissionCompliance from '@/components/Aboutpage/AboutReportingSubmissionCompliance'
import Header from '@/components/Header'

export default function About() {
  return (
    <>
      <Header />
  
      <AboutHero />
      
      <AboutBuildToAdvance />

      <AboutEfficiencyCaseHandling />

      <AboutDataMeetsMedical />

      <AboutSignalManagement />

      <AboutReportingSubmissionCompliance/>
    </>
  )
}

