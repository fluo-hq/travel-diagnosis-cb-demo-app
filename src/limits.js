export function formatLimit(limit) {
  const text = getComparatorText(limit.comparator);
  const included = getInclutionText(limit.included);

  return ` - (${included} ${limit.name} ${text} ${limit.value} ${limit.unit})`;
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
      alert('Unknown comparator :' + comparator)
  }
}

function getInclutionText(included) {
  if (included) {
    return '[INCLUS] ';
  } else {
    return '[EXCLUS] ';
  }
}