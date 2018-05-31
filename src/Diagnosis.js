import React from 'react';
import Typography from '@material-ui/core/Typography';

import CoveredTravallers from './CoveredTravellers';
import Covers from './Covers';
import ImportantInformation from './ImportantInformations';
import NotCoveredTravallers from './NotCoveredTravellers';

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
  } = props.diagnosis;
  return (
    <div>
      <Typography variant="headline" component="h1">Diagnostique de la carte pour la destination : {props.destination.usualName}</Typography>
      <h3>{getCoverageDescription(coverage)}</h3>
      <ImportantInformation paymentTerms={paymentTerms} tripType={tripType} />
      <Covers covers={covers} coverageDuration={coverageDuration} />
      <CoveredTravallers
        coveredPersons={coveredPersons}
        coveredPersonsLimits={coveredPersonsLimits}
      />
      <NotCoveredTravallers notCoveredPersons={notCoveredPersons} />
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
