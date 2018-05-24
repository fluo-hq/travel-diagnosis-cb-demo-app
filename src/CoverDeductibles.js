import React from 'react';

import CoverDescription from './CoverDescription';

export default function CoverDeductibles(props) {
  return (
    <ul>
      {props.deductibles.map((deductible, index) => {
        if (deductible.value === undefined) {
          return <PartnerVariableDeductible deductible={deductible} key={index} />
        } else {
          return <PartnerFixedDeductible deductible={deductible} key={index} />
        }
      })}
    </ul>
  );
}

function PartnerVariableDeductible(props) {
  const { deductible } = props;

  const value = `${deductible.percentage}% ${deductible.percentageUnit.label}`
  return (<CoverDescription description={deductible.description} value={value} />)
}

function PartnerFixedDeductible(props) {
  const { deductible } = props;

  const value = `${deductible.value} ${deductible.unit.label}`
  return (<CoverDescription description={deductible.description} value={value} />)
}