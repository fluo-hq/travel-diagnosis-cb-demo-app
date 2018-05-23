import React from 'react';

import CoveredTravallers from './CoveredTravellers'; 
import ImportantInformation from './ImportantInformations';
import Covers from './Covers';

export default function Diagnosis(props) {
  const { coverage, covers, coveredPersons, coveredPersonsLimits, paymentTerms, tripType } = props.diagnosis
  return (
    <div>
      <h2>Diagnosis</h2>
      <h3>{getCoverageDescription(coverage)}</h3>
      <Covers covers={covers}/>
      <ImportantInformation paymentTerms={paymentTerms} tripType={tripType} />
      <CoveredTravallers coveredPersons={coveredPersons} coveredPersonsLimits={coveredPersonsLimits} />
    </div>
  );
}

function getCoverageDescription(coverage) {
  const descriptionByCoverage = {
    'PARTIALLY_COVERED': "Votre carte couvre votre destination avec des limitations",
    'NOT_COVERED': "Votre carte ne couvre pas votre destination",
    'COVERED': "Votre carte couvre votre destination"
  }
  return descriptionByCoverage[coverage];
}