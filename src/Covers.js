import React from 'react';
import Cover from './Cover';

export default function Covers(props) {
  const mainInsuranceCovers = extractMainCovers(props.covers).filter(cover => cover.assistance);
  const insuranceCovers = extractStandardCovers(props.covers).filter(cover => cover.assistance);

  const mainTravelCovers = extractMainCovers(props.covers).filter(cover => !cover.assistance);
  const travelCovers = extractStandardCovers(props.covers).filter(cover => !cover.assistance);
  
  const {
    insurance: travelDuration,
    assistance: assistanceDuration,
  } = props.coverageDuration;

  return (
    <div>
      <Cover type="Voyage" mainCovers={mainTravelCovers} covers={travelCovers} duration={travelDuration} />
      <Cover
        type="Assitance"
        mainCovers={mainInsuranceCovers}
        covers={insuranceCovers}
        duration={assistanceDuration}
      />
    </div>
  );
}

// Main covers are, usually, the more important to show to end-user
function extractMainCovers(covers) {
  return covers.filter(cover => cover.isMain);
}

function extractStandardCovers(covers) {
  return covers.filter(cover => !cover.isMain);
}
