import React from 'react';

export default function Covers(props) {
  return (
    <ul>
        {props.covers.map(cover => {
          return (
            <li key={cover.typeId}>
              {getCoverageFrom(cover.coverage)} - {cover.name}
              <br />
              {cover.coverageReason ? 'A savoir : ' + cover.coverageReason.label : null}
              {cover.coverageReason && <br />}
              <em>{cover.description}</em>
            </li>
          );
        })}
    </ul>
  );
}

function getCoverageFrom(coverage) {
  const descriptionByCoverage = {
    'PARTIALLY_COVERED': "Partiellement couvert",
    'NOT_COVERED': "Non couvert",
    'COVERED': "Couvert"
  }
  return descriptionByCoverage[coverage];
}