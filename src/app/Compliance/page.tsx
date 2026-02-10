'use client';

import ComplianceHero from "@/components/Compliancepage/ComplianceHero";
import ComplianceInspectionReadiness from "@/components/Compliancepage/ComplianceInspectionReadiness";
import ComplianceStepsValidation from "@/components/Compliancepage/ComplianceStepsValidation";
import ComplianceValidationSupport from "@/components/Compliancepage/ComplianceValidationSupport";
import ComplianceImmutableTrials from "@/components/Compliancepage/ComplianceImmutableTrials";
import ComplianceSecureConnectivity from "@/components/Compliancepage/ComplianceSecureConnectivity";
import ComplianceFlexibleOperations from "@/components/Compliancepage/ComplianceFlexibleOperations";
import Header from "@/components/Header";

export default function Compliance() {
    return (
        <>
            <Header />

            <ComplianceHero />

            <ComplianceInspectionReadiness />

            <ComplianceStepsValidation />

            <ComplianceValidationSupport />

            <ComplianceImmutableTrials />

            <ComplianceSecureConnectivity />
            
            <ComplianceFlexibleOperations />
        </>
    );
}