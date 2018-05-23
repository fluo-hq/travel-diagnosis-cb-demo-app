import React from 'react';

import CoveredTravallers from './CoveredTravellers'; 
import ImportantInformation from './ImportantInformations';

export default function Diagnosis(props) {
  const { coverage, covers, coveredPersons, coveredPersonsLimits, paymentTerms, tripType } = props.diagnosis
  return (
    <div>
      <h2>Diagnosis</h2>
      <h3>{getCoverageDescription(coverage)}</h3>
      <ul>{getCoversDescription(covers)}</ul>
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

function getCoversDescription(covers) {
  return covers.map(cover => {
    return (
      <li key={cover.typeId}>
        {getCoverageFrom(cover.coverage)} - {cover.name}
        <br /><em>{cover.description}</em>
      </li>
    )
  });
}

function getCoverageFrom(coverage) {
  const descriptionByCoverage = {
    'PARTIALLY_COVERED': "Partiellement couvert",
    'NOT_COVERED': "Non couvert",
    'COVERED': "Couvert"
  }
  return descriptionByCoverage[coverage];
}