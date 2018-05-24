import React from 'react';

import CoverLimits from './CoverLimits';
import CoverDeductibles from './CoverDeductibles';

export default function Cover(props) {
  return (
    <div>
      <h1>{props.type}</h1>
      <ul>
        {props.covers.map(cover => {
          return (
            <li key={cover.typeId}>
              {getCoverageFrom(cover.coverage)} - {cover.name}
              <br />
              {cover.coverageReason ? 'A savoir : ' + cover.coverageReason.label : null}
              {cover.coverageReason && <br />}
              <CoverLimits limits={cover.limits} />
              <CoverDeductibles deductibles={cover.deductibles} />
              <br />
              <div dangerouslySetInnerHTML={{__html: cover.description}}></div>
              <br />
            </li>
          );
        })}
    </ul>
    </div>
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