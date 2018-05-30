import React from 'react';

import CoverDescription from './CoverDescription';

export default function CoverLimits(props) {
  return (
    <ul>
      {props.limits.map((limit, index) => {
        if (limit.isActualCosts === true) {
          return <PartnerLimitBasedOnActualCosts limit={limit} key={index} />
        } else if (limit.isActualCosts === false) {
          return <PartnerLimitBasedOnLimitedCosts limit={limit} key={index} />
        } else if (limit.type === 'LIMITED') {
          return <PartnerLimitBaseOnLimitedDuration limit={limit} key={index} />          
        } else if (limit.type === 'UNLIMITED') {
          return <PartnerLimitBaseOnUnlimitedDuration limit={limit} key={index} />          
        } else {
          throw new Error(`The limit ${JSON.stringify(limit)} cannot be displayed`)
        }
      })}
    </ul>
  );
}

function PartnerLimitBasedOnActualCosts(props) {
  const { limit } = props;

  return (<CoverDescription description={limit.description} value="frais réels" />)
}

function PartnerLimitBasedOnLimitedCosts(props) {
  const { limit } = props;
  const recommanded = limit.recommendedValue ? ` (valeur recommandée: ${limit.recommendedValue} ${limit.currency.sign})` : '';
  const value = `${limit.value} ${limit.currency.sign}${recommanded}`

  return (<CoverDescription description={limit.description} value={value} />)
}

function PartnerLimitBaseOnLimitedDuration(props) {
  const { limit } = props;
  const value = `${limit.value} ${getUnit(limit.unit)}`;

  return (
    <CoverDescription description={limit.description} value={value} />
  )
}

function PartnerLimitBaseOnUnlimitedDuration(props) {
  return (
    <CoverDescription description={props.limit.description} value="" />
  )
}

function getUnit(unit) {
  switch(unit) {
    case 'DAY': return 'jour(s)';
    case 'MONTH': return 'mois';
    default: throw new Error(`Unit ${unit} is not handled`);
  }
}