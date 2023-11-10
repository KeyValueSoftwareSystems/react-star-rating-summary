import React, { FC } from 'react';

import {
  adjustDecimalPrecision,
  formatToNumberWithCommas,
  getTotalRatingCount,
  getWeightedAverage
} from '../utils';
import { IRatingAverageProp } from './types';
import starImg from '../assets/star-grey.svg';
import PartiallyFilledStar from './PartiallyFilledStar';
import { RATING_AVERAGE_DEFAULTS } from '../constants';
import classes from './styles.module.scss';

const { icon } = RATING_AVERAGE_DEFAULTS;

const RatingAverage: FC<IRatingAverageProp> = (props) => {
  const {
    ratings,
    customAverageFn,
    averageRatingPrecision = 1,
    iconProps
  } = props;
  const {
    width = icon.width,
    height = icon.height,
    fillColor = icon.fillColor,
    bgColor = icon.bgColor
  } = iconProps || {};

  const computeAverage = (): number => {
    if (customAverageFn) return customAverageFn(ratings) || 0;
    return getWeightedAverage(ratings);
  };

  const extractStarInfo = (average: number): [number, number] => {
    const wholePart = Number(average.toString().split('.')[0]);
    const decimalPart = average - wholePart;
    return [wholePart, decimalPart];
  };

  const average = computeAverage();
  const totalRatingCount = getTotalRatingCount(ratings);
  const [noOfCompleteStars, visibleStarFraction] = extractStarInfo(average);

  return (
    <div className={classes.container}>
      <div className={classes.averageRatingValue}>
        {adjustDecimalPrecision(average, averageRatingPrecision)}
      </div>
      <div className={classes.imgWrapper}>
        {Array(noOfCompleteStars)
          .fill(0)
          .map((_item, index) => (
            <img
              key={index}
              className={classes.starImage}
              src={starImg}
              alt=""
              width={width}
              height={height}
            />
          ))}
        <PartiallyFilledStar
          width={width}
          height={height}
          fillColor={fillColor}
          bgColor={bgColor}
          colorFilledFraction={visibleStarFraction}
        />
      </div>
      <div className={classes.subtext}>
        {formatToNumberWithCommas(totalRatingCount)} reviews
      </div>
    </div>
  );
};

export default RatingAverage;
