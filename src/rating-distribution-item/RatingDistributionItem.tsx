import React, { FC } from 'react';

import { IRatingDistributionProp } from './types';
import { Elements, DEFAULT_COLOR } from '../constants';
import { formatNumber, getStyles, isValidNumber, } from '../utils';
import classes from './styles.module.scss';

const RatingDistributionItem: FC<IRatingDistributionProp> = (props) => {
  const {
    currentRatingId,
    currentRatingValue,
    totalRatingCount,
    showCount,
    showAnimation,
    styles = {},
    barColors,
    onBarClick,
    thousandsSeparator
  } = props;

  // bar-width in percentage
  const barWidth = ((currentRatingValue || 0) / totalRatingCount) * 100;

  const getBarBgColor = (): string => {
    if (barColors?.[currentRatingId]) return barColors[currentRatingId];

    return DEFAULT_COLOR;
  };

  return (
    <>
    <div
      className={classes.barContainer}
      style={getStyles(styles, Elements.BarContainer, currentRatingId)}
    >
      <div
        style={{
          width: `${barWidth}%`,
          ...getStyles(styles, Elements.FilledBarContainer, currentRatingId)
        }}
        className={`${classes.filledBarContainer}
              ${showAnimation && classes.transitions}
              ${onBarClick && classes.cursorPointer}`}
        id={`${currentRatingId}-bar`}
        {...(onBarClick && {
          role: 'presentation',
          onClick: (): void => onBarClick(currentRatingId)
        })}
      >
        <div
          id={`${currentRatingId}-inner-bar`}
          style={{
            backgroundColor: getBarBgColor(),
            ...getStyles(styles, Elements.Bar, currentRatingId)
          }}
          className={`${classes.filledBar} ${
            showAnimation && classes.animations
          }`}
        >
        </div>
      </div>
      </div>
    {showCount && (
            <span
              className={classes.countContainer}
              style={getStyles(styles, Elements.Count, currentRatingId)}
              id={`${currentRatingId}-count`}
            >
              {formatNumber(currentRatingValue, thousandsSeparator)}
            </span>
          )}
    </>
  );
};

export default RatingDistributionItem;
