import {
  COMMA_SEPARATED_NUMBER_REGEX,
  Elements,
  RatingValue
} from './constants';
import { CustomStyles, IRatings } from './rating-summary/types';

export const formatToNumberWithCommas = (num: number): string =>
  num.toString().replace(COMMA_SEPARATED_NUMBER_REGEX, ',');

export const getStyles = (
  allStyles: CustomStyles,
  element: Elements,
  ratingId: RatingValue
): object => {
  const getElementStyle = allStyles[element];
  if (getElementStyle) return getElementStyle(ratingId);
  return {};
};

export const getTotalRatingCount = (ratings: IRatings): number =>
  Object.values(ratings).reduce((sum, num) => sum + (num || 0));

export const adjustDecimalPrecision = (
  value: number,
  precision: number
): string => value.toFixed(precision);

export const getWeightedAverage = (data: IRatings): number => {
  const weightedSum = Object.entries(data).reduce((sum, item) => {
    const [key, value] = item;
    return sum + Number(key) * Number(value);
  }, 0);
  const sumOfNumbers = getTotalRatingCount(data);
  return sumOfNumbers ? weightedSum / sumOfNumbers : 0;
};
