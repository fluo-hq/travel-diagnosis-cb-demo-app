import React from 'react';
import Typography from '@material-ui/core/Typography';

import NotCoveredTraveller from './NotCoveredTraveller';

export default function NotCoveredTravellers(props) {
  return (
    <div>
      <Typography variant="headline" component="h2">Voyageurs non couverts</Typography>
      <ul>
        {props.notCoveredPersons.items.map(notCoveredPerson => {
          return (
            <li key={notCoveredPerson.id}>
              <NotCoveredTraveller notCoveredPerson={notCoveredPerson} />
            </li>
          )
        })}
      </ul>
    </div>
  );
}