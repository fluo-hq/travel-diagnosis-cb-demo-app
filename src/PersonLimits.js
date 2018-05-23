import React from 'react';
import { formatLimit } from './limits';

export default function PersonLimits(props) {
  return (
    <span>
      {props.limits.map((limit, index) => {
        return <i key={index}><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {formatLimit(limit)}</i>
      })} 
    </span>
  )
}