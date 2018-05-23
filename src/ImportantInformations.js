import React from 'react';

export default function ImportantInformation(props) {
  return (
    <div>
      <h3>Informations importantes</h3>
      <ul>
        <li key={0}>{props.paymentTerms.label}</li>
        <li key={1}>{props.tripType.label}</li>
      </ul>
    </div>
  )
}