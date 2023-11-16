import React, { FC } from 'react';

import { IRatingDistributionProp } from './types';
import { DEFAULT_CHART_COLORS, Elements } from '../constants';
import { formatNumber, getStyles, isValidNumber } from '../utils';
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
    onChartClick,
    thousandsSeparator
  } = props;

  // bar-width in percentage
  const barWidth = ((currentRatingValue || 0) / totalRatingCount) * 100;

  const getBgChartColor = (): string => {
    if (chartColors?.[currentRatingId]) return chartColors[currentRatingId];

    return isValidNumber(currentRatingId) &&
      DEFAULT_CHART_COLORS[Number(currentRatingId)]
      ? DEFAULT_CHART_COLORS[Number(currentRatingId)]
      : DEFAULT_CHART_COLORS[1];
  };

  return (
    <div
      className={classes.barContainer}
      style={getStyles(styles, Elements.ChartContainer, currentRatingId)}
    >
      <div
        style={{
          width: `${barWidth}%`,
          ...getStyles(styles, Elements.FilledChartContainer, currentRatingId)
        }}
        className={`${classes.filledBarContainer}
              ${showAnimation && classes.transitions}
              ${onChartClick && classes.cursorPointer}`}
        id={`${currentRatingId}-bar`}
        {...(onChartClick && {
          role: 'presentation',
          onClick: (): void => onChartClick(currentRatingId)
        })}
      >
        <div
          id={`${currentRatingId}-inner-bar`}
          style={{
            backgroundColor: getBgChartColor(),
            ...getStyles(styles, Elements.Chart, currentRatingId)
          }}
          className={`${classes.filledBar} ${
            showAnimation && classes.animations
          }`}
        >
          {showCount && (
            <span
              className={classes.countContainer}
              style={getStyles(styles, Elements.Count, currentRatingId)}
              id={`${currentRatingId}-count`}
            >
              {formatNumber(currentRatingValue, thousandsSeparator)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RatingDistributionItem;
