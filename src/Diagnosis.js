import React from 'react';

export default function Diagnosis(props) {
  return (
    <div>
      <h2>Diagnosis</h2>
      {JSON.stringify(props.diagnosis)}
    </div>
  );
}