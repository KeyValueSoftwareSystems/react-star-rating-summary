import React, { FC } from 'react';

import { PartiallyFilledStarProp } from './types';

const PartiallyFilledStar: FC<PartiallyFilledStarProp> = (props) => {
  const { fillColor, bgColor, colorFilledFraction = 50 } = props;

  return (
    <svg
      width="100%"
      height="auto"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad" shapeRendering="crispEdges">
          <stop offset={colorFilledFraction} stopColor={fillColor} />
          <stop offset="0%" stopColor={bgColor} />
        </linearGradient>
      </defs>
      <path
        fill="url(#grad)"
        d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
  l11.547-1.2L16.026,0.6L20.388,10.918z"
      />
    </svg>
  );
};

export default PartiallyFilledStar;