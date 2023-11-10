import React, { FC } from 'react';

import { ISummaryProp } from './types';
import RatingLabel from '../rating-label';
import RatingDistributionItem from '../rating-distribution-item';
import { GenericElements, RatingValue } from '../constants';
import { getTotalRatingCount } from '../utils';
import RatingAverage from '../rating-average';
import classes from './styles.module.scss';

const RatingSummary: FC<ISummaryProp> = (props) => {
  const {
    ratings,
    renderLabel,
    showCount = true,
    showAnimation = true,
    styles = {},
    chartColors,
    onChartClick,
    showAverageRating = true,
    customAverageFn,
    averageRatingPrecision,
    ratingAverageIconProps = {}
  } = props;

  return (
    <div
      className={classes.container}
      style={{ ...styles[GenericElements.Root] }}
    >
      {showAverageRating && (
        <RatingAverage
          ratings={ratings}
          customAverageFn={customAverageFn}
          averageRatingPrecision={averageRatingPrecision}
          iconProps={ratingAverageIconProps}
          styles={styles}
        />
      )}
      <div
        className={classes.ratingsWrapper}
        style={{ ...styles[GenericElements.SummaryContainer] }}
        id="ratings-container"
      >
        {Object.keys(ratings)
          .reverse()
          .map((ratingId) => (
            <div key={ratingId} className={classes.ratingWrapper}>
              {(renderLabel && <>{renderLabel(ratingId)}</>) || (
                <RatingLabel ratingId={ratingId} styles={styles} />
              )}
              <RatingDistributionItem
                currentRatingId={ratingId as unknown as RatingValue}
                currentRatingValue={ratings[ratingId]}
                totalRatingCount={getTotalRatingCount(ratings)}
                showCount={showCount}
                showAnimation={showAnimation}
                styles={styles}
                chartColors={chartColors}
                onChartClick={onChartClick}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
export default RatingSummary;
