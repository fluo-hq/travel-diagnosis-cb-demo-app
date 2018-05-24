import React from 'react';

import CoveredTravallers from './CoveredTravellers'; 
import NotCoveredTravallers from './NotCoveredTravellers'; 
import ImportantInformation from './ImportantInformations';
import Covers from './Covers';

export default function Diagnosis(props) {
  const { coverage, covers, coveredPersons, coveredPersonsLimits, paymentTerms, tripType, notCoveredPersons } = props.diagnosis
  return (
    <div>
      <h2>Diagnosis</h2>
      <h3>{getCoverageDescription(coverage)}</h3>
      <Covers covers={covers}/>
      <ImportantInformation paymentTerms={paymentTerms} tripType={tripType} />
      <CoveredTravallers coveredPersons={coveredPersons} coveredPersonsLimits={coveredPersonsLimits} />
      <NotCoveredTravallers notCoveredPersons={notCoveredPersons} />
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