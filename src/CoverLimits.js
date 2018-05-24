import React from 'react';

import CoverDescription from './CoverDescription';

export default function CoverLimits(props) {
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

  return (<CoverDescription description={limit.description} value="frais réels" />)
}

function PartnerLimitBasedOnLimitedCost(props) {
  const { limit } = props;
  const recommanded = limit.recommendedValue ? ` (valeur recommandée: ${limit.recommendedValue} ${limit.currency.sign})` : '';
  const value = `${limit.value} ${limit.currency.sign}${recommanded}`

  return (<CoverDescription description={limit.description} value={value} />)
}