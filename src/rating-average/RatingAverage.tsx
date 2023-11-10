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
import { GenericElements, RATING_AVERAGE_DEFAULTS } from '../constants';
import classes from './styles.module.scss';

const { icon } = RATING_AVERAGE_DEFAULTS;

const RatingAverage: FC<IRatingAverageProp> = (props) => {
  const {
    ratings,
    customAverageFn,
    averageRatingPrecision = 1,
    iconProps,
    styles = {}
  } = props;
  const { fillColor = icon.fillColor, bgColor = icon.bgColor } =
    iconProps || {};

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
    <div
      className={classes.container}
      style={{ ...styles[GenericElements.AverageContainer] }}
    >
      <div
        className={classes.averageRatingValue}
        style={{ ...styles[GenericElements.Average] }}
      >
        {adjustDecimalPrecision(average, averageRatingPrecision)}
      </div>
      <div
        className={classes.iconsWrapper}
        style={{
          ...styles[GenericElements.AverageIconsWrapper]
        }}
      >
        {Array(noOfCompleteStars)
          .fill(0)
          .map((_item, index) => (
            <img
              key={index}
              className={classes.starImage}
              style={{ ...styles[GenericElements.AverageStarIcon] }}
              src={starImg}
              alt=""
            />
          ))}
        <div
          className={classes.starImage}
          style={{ ...styles[GenericElements.AverageStarIcon] }}
        >
          <PartiallyFilledStar
            fillColor={fillColor}
            bgColor={bgColor}
            colorFilledFraction={visibleStarFraction}
          />
        </div>
      </div>
      <div
        className={classes.subText}
        style={{ ...styles[GenericElements.AverageSubText] }}
      >
        {formatToNumberWithCommas(totalRatingCount)} reviews
      </div>
    </div>
  );
};

export default RatingAverage;
