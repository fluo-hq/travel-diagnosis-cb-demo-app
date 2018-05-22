import React from 'react';

export default function Destinations(props) {
  return (
    <ul>
        {props.destinations.map(destination => {
          return (
            <li key={destination.numericCode}>
              <button onClick={() => props.onDestinationClick(destination)}>{destination.usualName}
              </button>
            </li>
          );
        })}
    </ul>
  );
}