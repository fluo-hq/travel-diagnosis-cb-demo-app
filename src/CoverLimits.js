import React from 'react';

export default function CoverLimits(props) {
  // TODO: check cover limits data
  return (
    <ul>
      {props.limits.map((limit, index) => {
        if (limit.isActualCosts) {
          return <PartnerLimitBasedOnActualCosts limit={limit} key={index} />
        } else {
          return <PartnerLimitBasedOnLimitedCost limit={limit} key={index} />
        }
      })}
    </ul>
  );
}

function PartnerLimitBasedOnActualCosts(props) {
  const { limit } = props;

  return (
    <li>{limit.description}: frais réels</li>
  );
}

function PartnerLimitBasedOnLimitedCost(props) {
  const { limit } = props;
  const recommanded = limit.recommendedValue ? ` (valeur recommandée: ${limit.recommendedValue} ${limit.currency.sign})` : '';

  const text = `${limit.description}: ${limit.value} ${limit.currency.sign}${recommanded}`
  return (
    <li>{text}</li>
  );
}