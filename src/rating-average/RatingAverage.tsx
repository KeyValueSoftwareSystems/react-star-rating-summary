import React, { FC } from 'react';

import {
  adjustDecimalPrecision,
  formatNumber,
  getTotalRatingCount,
  getWeightedAverage
} from '../utils';
import { IRatingAverageProp } from './types';
import Star from './star';
import { GenericElements, RATING_AVERAGE_DEFAULTS } from '../constants';
import classes from './styles.module.scss';

const { icon } = RATING_AVERAGE_DEFAULTS;

const RatingAverage: FC<IRatingAverageProp> = (props) => {
  const {
    ratings,
    ranks = {},
    customAverageFn = getWeightedAverage,
    averageRatingPrecision,
    iconProps,
    styles = {},
    thousandsSeparator,
    ratingAverageSubText
  } = props;
  const { fillColor = icon.fillColor, bgColor = icon.bgColor } =
    iconProps || {};

  const extractStarInfo = (average: number): [number, number, number] => {
    const maxRank = Math.max(...Object.values(ranks));
    const wholePart = Number(average.toString().split('.')[0]);
    const decimalPart = average - wholePart;
    return [maxRank - Math.ceil(average), wholePart, decimalPart];
  };

  const average = customAverageFn(ratings, ranks);
  const totalRatingCount = getTotalRatingCount(ratings);
  const [noOfEmptyStars, noOfCompleteStars, visibleStarFraction] =
    extractStarInfo(average);

  return (
    <div
      className={classes.container}
      style={styles[GenericElements.AverageContainer]}
    >
      <div
        className={classes.averageRatingValue}
        style={styles[GenericElements.Average]}
      >
        {adjustDecimalPrecision(average, averageRatingPrecision)}
      </div>
      <div
        className={classes.iconsWrapper}
        style={styles[GenericElements.AverageIconsWrapper]}
      >
        {Array(noOfCompleteStars)
          .fill(0)
          .map((_item, index) => (
            <div
              key={`completely-filled-star-${index}`}
              className={classes.starImage}
              style={styles[GenericElements.AverageStarIcon]}
            >
              <Star
                fillColor={fillColor}
                bgColor={bgColor}
                colorFilledFraction={1}
                id={`completely-filled-star-${index}`}
              />
            </div>
          ))}
        {Boolean(visibleStarFraction) && (
          <div
            key="fraction-filled-star"
            className={classes.starImage}
            style={styles[GenericElements.AverageStarIcon]}
          >
            <Star
              fillColor={fillColor}
              bgColor={bgColor}
              colorFilledFraction={visibleStarFraction}
              id="fraction-filled-star"
            />
          </div>
        )}
        {Array(noOfEmptyStars)
          .fill(0)
          .map((_item, index) => (
            <div
              key={`unfilled-star-${index}`}
              className={classes.starImage}
              style={styles[GenericElements.AverageStarIcon]}
            >
              <Star
                fillColor={fillColor}
                bgColor={bgColor}
                colorFilledFraction={0}
                id={`unfilled-star-${index}`}
              />
            </div>
          ))}
      </div>
      <div
        className={classes.subTextContainer}
        style={styles[GenericElements.AverageSubTextContainer]}
      >
        <div style={styles[GenericElements.AverageTotalReviews]}>
          {formatNumber(totalRatingCount, thousandsSeparator)}
        </div>
        <div style={styles[GenericElements.AverageSubText]}>
          {ratingAverageSubText}
        </div>
      </div>
    </div>
  );
};

export default RatingAverage;
