import React from 'react';
import Cover from './Cover';

export default function Covers(props) {
  const mainCovers = extractMainCovers(props.covers);
  // We don't want to display covers when there is no main covers
  if (mainCovers.length !== 0){ 
    return null;
  }
  const standardCovers = extractStandardCovers(props.covers);
  
  const mainInsuranceCovers = extractInsuranceCovers(mainCovers);
  const insuranceCovers = extractInsuranceCovers(standardCovers);

  const mainTravelCovers = extractTravelCovers(mainCovers);
  const travelCovers = extractTravelCovers(standardCovers);
  
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
  return covers.filter(cover => cover.isMain === true);
}

function extractStandardCovers(covers) {
  return covers.filter(cover => cover.isMain === false);
}

function extractInsuranceCovers(covers){
  return covers.filter(cover => cover.assistance === true);
}

function extractTravelCovers(covers){
  return covers.filter(cover => cover.assistance === false);
}