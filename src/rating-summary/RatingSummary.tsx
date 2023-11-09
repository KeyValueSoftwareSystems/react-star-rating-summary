import React, { FC } from 'react';

import { ISummaryProp } from './types';
import RatingLabel from '../rating-label';
import RatingDistributionItem from '../rating-distribution-item';
import { RatingValue } from '../constants';
import classes from './styles.module.scss';

const RatingSummary: FC<ISummaryProp> = (props) => {
  const {
    ratings,
    renderLabel,
    showCount = true,
    showAnimation = true,
    styles = {},
    chartColors,
    onChartClick
  } = props;

  const totalRatingCount = Object.values(ratings).reduce(
    (sum, num) => sum + (num || 0)
  );

  return (
    <div className={classes.ratingsWrapper} id="ratings-container">
      {Object.keys(ratings)
        .reverse()
        .map((ratingId) => (
          <div key={ratingId} className={classes.ratingWrapper}>
            {(renderLabel && <>{renderLabel(ratingId)}</>) || (
              <RatingLabel ratingId={ratingId} />
            )}
            <RatingDistributionItem
              currentRatingId={ratingId as unknown as RatingValue}
              currentRatingValue={ratings[ratingId]}
              totalRatingCount={totalRatingCount}
              showCount={showCount}
              showAnimation={showAnimation}
              styles={styles}
              chartColors={chartColors}
              onChartClick={onChartClick}
            />
          </div>
        ))}
    </div>
  );
};
export default RatingSummary;
