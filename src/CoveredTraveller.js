import React from 'react';

import PersonLimits from './PersonLimits'

export default function CoveredTraveller(props) {
  const limits = getLimitsForCoveredPerson(props.coveredPersonsLimits, props.coveredPerson)
  return (
    <span>
      {props.coveredPerson.name}
      <PersonLimits limits={limits}/>
    </span>
  );
}

function getLimitsForCoveredPerson(coveredPersonsLimits, coveredPerson) {
  return coveredPersonsLimits.filter(coveredPersonsLimit => coveredPersonsLimit.limitedPersonId === coveredPerson.id);
}