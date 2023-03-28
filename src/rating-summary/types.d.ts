import { ReactElement } from 'react';
import { RatingValue, Elements } from '../constants';

export type ISummaryProp = {
  ratings: IRatings;
  renderLabel?: (ratingId: string) => ReactElement;
  showCount?: boolean;
  showAnimation?: boolean;
  styles?: { [value in Elements]: IStyleFunction };
  chartColors?: { [value in RatingValue]: string };
};

export type IRatings = {
  [value in RatingValue]: number;
};

export type IStyleFunction = (ratingId: RatingValue) => object;
