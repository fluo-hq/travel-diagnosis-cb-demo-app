import React from 'react';

export default function Limits(props) {
  return (
    <span>
      {props.limits.map((limit, index) => {
        return <i key={index}><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {formatLimit(limit)}</i>
      })} 
    </span>
  )
}

export function formatLimit(limit) {
  const text = getComparatorText(limit.comparator);
  const included = getInclutionText(limit.included);

  return ` - (${included} ${limit.name} ${text} ${limit.value} ${limit.unit})`;
}

export function getComparatorText (comparator) {
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
      alert('Unknown comparator :' + comparator)
  }
}
export function getInclutionText(included) {
  if (included) {
    return '[INCLUS] ';
  } else {
    return '[EXCLUS] ';
  }
}
