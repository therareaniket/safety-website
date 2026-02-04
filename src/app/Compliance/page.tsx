'use client';

import ComplianceHero from "@/components/Compliancepage/ComplianceHero";
import ComplianceInspectionReadiness from "@/components/Compliancepage/ComplianceInspectionReadiness";
// import ComplianceStepsValidation from "@/components/Compliancepage/ComplianceStepsValidation";
import ComplianceValidationSupport from "@/components/Compliancepage/ComplianceValidationSupport";
import ComplianceImmutableTrials from "@/components/Compliancepage/ComplianceImmutableTrials";
import ComplianceFlexibleOperations from "@/components/Compliancepage/ComplianceFlexibleOperations";

export default function Compliance() {
    return (
        <>
            <ComplianceHero />

            <ComplianceInspectionReadiness />

             {/* <ComplianceStepsValidation /> */}

             <ComplianceValidationSupport />

             <ComplianceImmutableTrials />

             <ComplianceFlexibleOperations />
        </>
    );
}