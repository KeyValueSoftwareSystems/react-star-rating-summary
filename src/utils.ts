import {
  COMMA_SEPARATED_NUMBER_REGEX,
  Elements,
  RatingValue
} from './constants';
import { CustomStyles } from './rating-summary/types';

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
