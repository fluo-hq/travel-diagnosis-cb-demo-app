import React from 'react';

import NotCoveredTraveller from './NotCoveredTraveller';
import { formatLimit } from './limits';

export default function NotCoveredTravellers(props) {
  return (
    <div>
      <h3>Voyageurs non couverts</h3>
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