import React from 'react';
import Typography from '@material-ui/core/Typography';

import CoveredTraveller from './CoveredTraveller';
import { formatLimit } from './limits';

export default function CoveredTravellers(props) {
  return (
    <div>
      <Typography variant="headline" component="h2">Voyageurs couverts</Typography>
      {getGlobalLimits(props.coveredPersonsLimits).map((globalLimit, index) => {
          return <em key={index}>{formatLimit(globalLimit)}<br/></em>
        })}
      <ul>
        {props.coveredPersons.items.map(coveredPerson => {
          return (
            <li key={coveredPerson.id}>
              <CoveredTraveller coveredPerson={coveredPerson} coveredPersonsLimits={props.coveredPersonsLimits} />
            </li>
          )
        })}
      </ul>
    </div>
  );
}

function getGlobalLimits(coveredPersonsLimits) {
  return coveredPersonsLimits.filter(coveredPersonsLimit => coveredPersonsLimit.limitedPersonId === undefined)
}