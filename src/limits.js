import React from 'react';

import Ko from './Ko';
import Ok from './Ok';

export function formatLimit(limit) {
  const text = getComparatorText(limit.comparator);
  const included = getInclutionText(limit.included);

  return (
    <span>
      {included} {limit.name} {text} {limit.value} {limit.unit}
    </span>
  );
}

function getComparatorText (comparator) {
  switch(comparator) {
    case 'LESS':
      return 'moins de';
    case 'EQUAL':
      return'égal à';
    case 'MORE':
      return'plus de';
    case 'NA':
      return '';
    default:
      throw new Error(`Unknown comparator : ${comparator}`);
  }
}

function getInclutionText(included) {
  if (included === true) {
    return <Ok />;
  } else if (included === false) {
    return <Ko />;
  }

  throw new Error(`Unknown included value : ${included}`);
}