import React, { FC } from 'react';

import { ISummaryProp, RatingRanks } from './types';
import RatingLabel from '../rating-label';
import RatingDistributionItem from '../rating-distribution-item';
import { Elements, GenericElements, ORDER } from '../constants';
import { getStyles, getTotalRatingCount } from '../utils';
import RatingAverage from '../rating-average';
import classes from './styles.module.scss';

const RatingSummary: FC<ISummaryProp> = (props) => {
  const {
    ratings,
    ratingRanks = {},
    renderLabel,
    showCount = true,
    showAnimation = true,
    styles = {},
    barColors,
    onBarClick,
    showAverageRating = true,
    customAverageFn,
    averageRatingPrecision = 1,
    ratingAverageIconProps = {},
    thousandsSeparator,
    ratingAverageSubText = 'reviews',
    order = ORDER.REVERSE
  } = props;

  const getRatingRanks = (): RatingRanks => {
    if (Object.keys(ratingRanks).length) return ratingRanks;
    return Object.keys(ratings).reduce(
      (accumulator, ratingId, index) => ({
        ...accumulator,
        [ratingId]: index + 1
      }),
      {}
    );
  };

  const ranks: RatingRanks = getRatingRanks();

  const ratingKeys =
    order === ORDER.REVERSE
      ? Object.keys(ratings).reverse()
      : Object.keys(ratings);

  return (
    <div className={classes.container} style={styles[GenericElements.Root]}>
      {showAverageRating && (
        <RatingAverage
          ratings={ratings}
          ranks={ranks}
          customAverageFn={customAverageFn}
          averageRatingPrecision={averageRatingPrecision}
          iconProps={ratingAverageIconProps}
          styles={styles}
          thousandsSeparator={thousandsSeparator}
          ratingAverageSubText={ratingAverageSubText}
        />
      )}
      <div
        className={classes.ratingsWrapper}
        style={styles[GenericElements.SummaryContainer]}
        id="ratings-container"
      >
        {ratingKeys.map((ratingId) => (
          <div
            key={ratingId}
            className={classes.ratingWrapper}
            style={getStyles(styles, Elements.SummaryItemContainer, ratingId)}
          >
            {(renderLabel && <>{renderLabel(ratingId)}</>) || (
              <RatingLabel ratingId={ratingId} styles={styles} />
            )}
            <RatingDistributionItem
              currentRatingId={ratingId}
              currentRatingValue={ratings[ratingId]}
              totalRatingCount={getTotalRatingCount(ratings)}
              showCount={showCount}
              showAnimation={showAnimation}
              styles={styles}
              barColors={barColors}
              onBarClick={onBarClick}
              thousandsSeparator={thousandsSeparator}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default RatingSummary;
