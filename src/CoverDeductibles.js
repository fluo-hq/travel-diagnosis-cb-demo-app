import React from 'react';

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

  const text = `${deductible.description}: ${deductible.percentage}% ${deductible.percentageUnit.label}`
  return (
    <li>{text}</li>
  );
}

function PartnerFixedDeductible(props) {
  const { deductible } = props;

  const text = `${deductible.description}: ${deductible.value} ${deductible.unit.label}`
  return (
    <li>{text}</li>
  );
}