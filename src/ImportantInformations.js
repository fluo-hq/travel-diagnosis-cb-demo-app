import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function ImportantInformation(props) {
  return (
    <div>
      <Typography variant="headline" component="h2">Informations importantes</Typography>
      <ul>
        <li key={0}>{props.paymentTerms.label}</li>
        <li key={1}>{props.tripType.label}</li>
      </ul>
    </div>
  )
}