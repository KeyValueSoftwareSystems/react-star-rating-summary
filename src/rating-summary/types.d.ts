import { ReactElement } from 'react';
import { RatingIds, Elements } from '../constants';

export type ISummaryProp = {
  ratings: IRatings;
  renderLabel?: (ratingId: string) => ReactElement;
  showCount?: boolean;
  showAnimation?: boolean;
  styles?: { [value in Elements]: IStyleFunction };
  chartColors?: { [value in RatingIds]: string };
};

export type IRatings = {
  [value in RatingIds]: number;
};

export type IStyleFunction = (ratingId: RatingIds) => object;
