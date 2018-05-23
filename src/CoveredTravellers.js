import React from 'react';

import CoveredTravaller from './CoveredTraveller';
import { formatLimit } from './Limits';

export default function CoveredTravallers(props) {
  return (
    <div>
      <h3>Voyageurs couverts</h3>
      <h4>{props.coveredPersons.label}</h4>
      <p>{getGlobalLimits(props.coveredPersonsLimits).map((globalLimit, index) => {
          return <em key={index}>{formatLimit(globalLimit)}<br/></em>
        })}</p>
      {props.coveredPersons.items.map(coveredPerson => {
        return (
          <li key={coveredPerson.id}>
            <CoveredTravaller coveredPerson={coveredPerson} coveredPersonsLimits={props.coveredPersonsLimits} />
          </li>
        )
      })}
    </div>
  );
}

function getGlobalLimits(coveredPersonsLimits) {
  return coveredPersonsLimits.filter(coveredPersonsLimit => coveredPersonsLimit.limitedPersonId === undefined)
}