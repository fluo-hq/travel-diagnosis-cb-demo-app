import React from 'react';
import Cover from './Cover';

export default function Covers(props) {
  const sortedCovers = sortMainFirst(props.covers);
  const insuranceCovers = sortedCovers.filter(cover => cover.assistance);
  const travelCovers = sortedCovers.filter(cover => !cover.assistance);
  const {
    insurance: travelDuration,
    assistance: assistanceDuration,
  } = props.coverageDuration;

  return (
    <div>
      <Cover type="Voyage" covers={travelCovers} duration={travelDuration} />
      <Cover
        type="Assitance"
        covers={insuranceCovers}
        duration={assistanceDuration}
      />
    </div>
  );
}

function sortMainFirst(covers) {
  return [...covers].sort(cover => {
    if (cover.isMain) {
      return -1;
    } else {
      return 1;
    }
  });
}
