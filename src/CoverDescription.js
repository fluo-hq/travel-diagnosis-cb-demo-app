import React from 'react';

export default function CoverDescription(props) {
  return (
    <li>
      {props.description}: <strong>{props.value}</strong>
    </li>
  );
}