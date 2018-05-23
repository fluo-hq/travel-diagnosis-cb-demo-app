import React from 'react';

import Limits from './Limits'

export default function CoveredTravaller(props) {
  const limits = getLimitsForCoveredPerson(props.coveredPersonsLimits, props.coveredPerson)
  return (
    <span>
      {props.coveredPerson.name}
      <Limits limits={limits}/>
    </span>
  );
}

function getLimitsForCoveredPerson(coveredPersonsLimits, coveredPerson) {
  return coveredPersonsLimits.filter(coveredPersonsLimit => coveredPersonsLimit.limitedPersonId === coveredPerson.id);
}