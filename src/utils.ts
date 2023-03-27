import { COMMA_SEPARATED_NUMBER_REGEX } from './constants';

export const formatToNumberWithCommas = (num: number): string =>
  num.toString().replace(COMMA_SEPARATED_NUMBER_REGEX, ',');
