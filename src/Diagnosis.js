import React from 'react';
import Typography from '@material-ui/core/Typography';

import CoveredTravellers from './CoveredTravellers';
import Covers from './Covers';
import ImportantInformation from './ImportantInformations';
import NotCoveredTravellers from './NotCoveredTravellers';

export default function Diagnosis(props) {
  const {
    coverage,
    covers,
    coveredPersons,
    coveredPersonsLimits,
    paymentTerms,
    tripType,
    notCoveredPersons,
    coverageDuration,
    majorInsuranceCriteria,
  } = props.diagnosis;
  return (
    <div>
      <Typography variant="headline" component="h1" id="diagnosis-title">Diagnostique de la carte pour la destination : {props.destination.usualName}</Typography>
      <h3>{getCoverageDescription(coverage)}</h3>
      <ImportantInformation paymentTerms={paymentTerms} tripType={tripType} majorInsuranceCriteria={majorInsuranceCriteria} />
      <Covers covers={covers} coverageDuration={coverageDuration} />
      {coveredPersons.items.length !== 0 && <CoveredTravellers
        coveredPersons={coveredPersons}
        coveredPersonsLimits={coveredPersonsLimits}
      />}
      {coveredPersons.items.length !== 0 && <NotCoveredTravellers notCoveredPersons={notCoveredPersons} />}
    </div>
  );
}

function getCoverageDescription(coverage) {
  const descriptionByCoverage = {
    PARTIALLY_COVERED:
      'Votre carte couvre votre destination avec des limitations',
    NOT_COVERED: 'Votre carte ne couvre pas votre destination',
    COVERED: 'Votre carte couvre votre destination',
  };

  const description = descriptionByCoverage[coverage];
  if (!description) {
    throw new Error(`Unknown coverage : ${coverage}`);
  }

  return description;
}
