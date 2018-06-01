import React from 'react';
import Typography from '@material-ui/core/Typography';

import Ko from './Ko';
import Ok from './Ok';

export default function ImportantInformation(props) {
  return (
    <div>
      <Typography variant="headline" component="h2">
        Informations importantes
      </Typography>
      <ul>
        {props.paymentTerms && <li key={0}>{props.paymentTerms.label}</li>}
        {props.tripType && <li key={1}>{props.tripType.label}</li>}
        {props.majorInsuranceCriteria && props.majorInsuranceCriteria.length > 0 ? (
          <li key={2}>
            <Major majorInsuranceCriteria={props.majorInsuranceCriteria} />
          </li>
        ) : (
          undefined
        )}
      </ul>
    </div>
  );
}

function Major(props) {
  const majorInsuranceCriteria = props.majorInsuranceCriteria;

  return (
    <div>
      {props.majorInsuranceCriteria.map(criterion => {
        return (
          <span key={criterion.name}>
            {criterion.included ? <Ok /> : <Ko />} {criterion.name}
          </span>
        );
      })}
    </div>
  );
}
