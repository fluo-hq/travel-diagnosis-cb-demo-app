import React from 'react';

export default function NotCoveredTraveller(props) {
  return (
    <span>
      {props.notCoveredPerson.name}
    </span>
  );
}