import React, { FC } from 'react';

import { IRatingDistributionProp } from './types';
import { DEFAULT_CHART_COLORS, Elements } from '../constants';
import { formatToNumberWithCommas, getStyles } from '../utils';
import classes from './styles.module.scss';

const RatingDistributionItem: FC<IRatingDistributionProp> = (props) => {
  const {
    currentRatingId,
    currentRatingValue,
    totalRatingCount,
    showCount,
    showAnimation,
    styles = {},
    chartColors,
    onChartClick
  } = props;

  // bar-width in percentage
  const barWidth = ((currentRatingValue || 0) / totalRatingCount) * 100;

  return (
    <div
      style={{ width: `${barWidth}%` }}
      className={`${classes.barWrapper}
              ${showAnimation && classes.transitions}
              ${onChartClick && classes.cursorPointer}`}
      id={`${currentRatingId}-bar`}
      {...(onChartClick && {
        role: 'presentation',
        onClick: (): void => onChartClick(currentRatingId)
      })}
    >
      <div
        style={{
          ...((DEFAULT_CHART_COLORS[currentRatingId] && {
            backgroundColor: DEFAULT_CHART_COLORS[currentRatingId]
          }) ||
            {}),
          ...((chartColors &&
            chartColors[currentRatingId] && {
              backgroundColor: chartColors[currentRatingId]
            }) ||
            {}),
          ...getStyles(styles, Elements.Chart, Number(currentRatingId))
        }}
        className={`${classes.barContainer} ${
          showAnimation && classes.animations
        }`}
      >
        {showCount && (
          <span
            className={classes.countContainer}
            style={{
              ...getStyles(styles, Elements.Count, Number(currentRatingId))
            }}
            id={`${currentRatingId}-count`}
          >
            {formatToNumberWithCommas(currentRatingValue)}
          </span>
        )}
      </div>
    </div>
  );
};

export default RatingDistributionItem;
