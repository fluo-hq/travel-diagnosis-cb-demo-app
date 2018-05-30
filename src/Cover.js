import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import CoverDeductibles from './CoverDeductibles';
import CoverLimits from './CoverLimits';
import Ko from './Ko';
import Ok from './Ok';
import Warning from './Warning';

export default function Cover(props) {
  return (
    <div>
      <Typography  variant="headline" component="h1">{props.type}</Typography>
      <Paper elevation={1}>
      <Typography  variant="headline" component="h3">Garanties principales</Typography>
        <ul>
          <InnerCover covers={props.mainCovers} duration={props.duration}/>
        </ul>
      </Paper>
      <Typography  variant="headline" component="h3">Autres garanties</Typography>
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
        {getCoverageTitleFrom(cover)} 
        {getCoverageDescriptionFrom(cover, props.duration)}
      </li>
    );
  });
}

function getCoverageTitleFrom(cover) {
  const descriptionByCoverage = {
    PARTIALLY_COVERED: <Warning />,
    NOT_COVERED: <Ko />,
    COVERED: <Ok />
  };

  return (
    <span>
      {descriptionByCoverage[cover.coverage]} {cover.name};
    </span>
  );
}

function getCoverageDescriptionFrom(cover, duration) {

  if (cover.coverage !== 'NOT_COVERED') {
    return (
      <div>
        <br />
        <br />
        <CoverageDuration duration={duration} />
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
      </div>
      );
  }

  return (
    <div>
      <br />
      <br />
    </div>
  );
}

function CoverageDuration(props) {
  const { duration } = props;
  if (duration.type === 'LIMITED') {
    return `Durée de garantie : ${duration.periodInDays} jours.`;
  } else if(duration.type === 'UNLIMITED') {
    return `Durée de garantie : sans limite.`;
  }
}