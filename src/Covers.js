import React from 'react';

import Cover from './Cover';

export default function Covers(props) {
  const sortedCovers = sortMainFirst(props.covers);
  const insuranceCovers = sortedCovers.filter(cover => cover.assistance)
  const travelCovers = sortedCovers.filter(cover => !cover.assistance)
  return (
    <div>
      <Cover type='Voyage' covers={travelCovers} />
      <Cover type='Assitance' covers={insuranceCovers} />
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