import React from 'react';
import Cover from './Cover';

export default function Covers(props) {
  const mainCovers = extractMainCovers(props.covers);
  if (mainCovers.length !== 0){
    return null;
  }
  const standardCovers = extractStandardCovers(props.covers);
  
  const mainInsuranceCovers = mainCovers.filter(cover => cover.assistance);
  const insuranceCovers = standardCovers.filter(cover => cover.assistance);

  const mainTravelCovers = mainCovers.filter(cover => !cover.assistance);
  const travelCovers = standardCovers.filter(cover => !cover.assistance);
  
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
