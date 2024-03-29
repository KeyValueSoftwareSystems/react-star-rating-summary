import { INTERNATIONAL_NUMBER_SYSTEM_REGEX, Elements } from './constants';
import { CustomStyles, IRatings, RatingRanks } from './rating-summary/types';

export const formatNumber = (num: number, thousandsSeparator = ','): string =>
  num.toString().replace(INTERNATIONAL_NUMBER_SYSTEM_REGEX, thousandsSeparator);

export const getStyles = (
  allStyles: CustomStyles,
  element: Elements,
  ratingId: string
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

export const getWeightedAverage = (
  data: IRatings,
  ranks: RatingRanks
): number => {
  const weightedSum = Object.entries(data).reduce(
    (sum, [key, value]) => sum + (ranks[key] || 0) * Number(value),
    0
  );
  const sumOfNumbers = getTotalRatingCount(data);
  return sumOfNumbers ? weightedSum / sumOfNumbers : 0;
};

export const isValidNumber = (value: string): boolean =>
  !isNaN(parseFloat(value));
