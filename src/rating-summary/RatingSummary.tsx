import React, { FC, useMemo } from 'react';
import { ISummaryProp } from './types';
import classes from './styles.module.scss';
import RatingLabel from '../rating-label';

import { defaultChartColors, Elements, RatingValue } from '../constants';
import { formatToNumberWithCommas } from '../utils';

const RatingSummary: FC<ISummaryProp> = (props) => {
  const {
    ratings,
    renderLabel,
    showCount = true,
    showAnimation = true,
    styles = {},
    chartColors
  } = props;

  const totalRatingCount = useMemo(
    (): number => Object.values(ratings).reduce((sum, num) => sum + (num || 0)),
    [ratings]
  );

  const getBarWidth = (ratingId: RatingValue): number =>
    (ratings[ratingId] || 0) / totalRatingCount;

  const getStyles = (element: Elements, ratingId: RatingValue): object => {
    const getElementStyle = styles[element];
    if (getElementStyle) return getElementStyle(ratingId);
    return {};
  };

  return (
    <div className={classes.ratingsWrapper} id="ratings-container">
      {Object.keys(ratings)
        .reverse()
        .map((ratingId) => (
          <div key={ratingId} className={classes.ratingWrapper}>
            {(renderLabel && <>{renderLabel(ratingId)}</>) || (
              <RatingLabel ratingId={ratingId} />
            )}
            <div
              style={{ width: `${getBarWidth(Number(ratingId)) * 100}%` }}
              className={classes.barWrapper}
              id={`${ratingId}-bar`}
            >
              <div
                style={{
                  ...((defaultChartColors[ratingId] && {
                    backgroundColor: defaultChartColors[ratingId]
                  }) ||
                    {}),
                  ...((chartColors &&
                    chartColors[ratingId] && {
                    backgroundColor: chartColors[ratingId]
                  }) ||
                    {}),
                  ...getStyles(Elements.Chart, Number(ratingId))
                }}
                className={`${classes.barContainer}
              ${showAnimation && classes.transitions}`}
              >
                {showCount && (
                  <span
                    className={classes.countContainer}
                    style={{ ...getStyles(Elements.Count, Number(ratingId)) }}
                    id={`${ratingId}-count`}
                  >
                    {formatToNumberWithCommas(ratings[ratingId])}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default RatingSummary;
