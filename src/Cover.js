import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CoverDeductibles from './CoverDeductibles';
import CoverLimits from './CoverLimits';

export default function Cover(props) {
  return (
    <div>
      <h1>{props.type}</h1>
        <Paper elevation={1}>
        <Typography  variant="headline" component="h2">Garanties principales</Typography>
          <ul>
            <InnerCover covers={props.mainCovers} duration={props.duration}/>
          </ul>
        </Paper>
        <Typography  variant="headline" component="h2">Autres garanties</Typography>
        <ul>
          <InnerCover covers={props.covers} duration={props.duration} />
        </ul>
    </div>
  );
}

function InnerCover(props) {
  return props.covers.map(cover => {
    return (
      <li key={cover.typeId}>
        {getCoverageFrom(cover.coverage)} - {cover.name}
        <br />
        <br />
        <CoverageDuration duration={props.duration} />
        <br />
        <br />
        {cover.coverageReason
          ? 'A savoir : ' + cover.coverageReason.label
          : null}
        {cover.coverageReason && <br />}
        <CoverLimits limits={cover.limits} />
        <CoverDeductibles deductibles={cover.deductibles} />
        <br />
        <br />
        <div dangerouslySetInnerHTML={{ __html: cover.description }} />
        <br />
        <br />
      </li>
    );
  });
}

function getCoverageFrom(coverage) {
  const descriptionByCoverage = {
    PARTIALLY_COVERED: 'Partiellement couvert',
    NOT_COVERED: 'Non couvert',
    COVERED: 'Couvert',
  };
  return descriptionByCoverage[coverage];
}

function CoverageDuration(props) {
  const { duration } = props;
  if (duration.type === 'LIMITED') {
    return `Durée de garantie : ${duration.periodInDays} jours.`;
  } else if(duration.type === 'UNLIMITED') {
    return `Durée de garantie : sans limite.`;
  }
}