import { ReactElement } from 'react';

import { RatingValue, Elements } from '../constants';

export type CustomStyles = { [value in Elements]?: IStyleFunction };

export type ChartColors = { [value in RatingValue]: string };

export type ISummaryProp = {
  ratings: IRatings;
  renderLabel?: (ratingId: string) => ReactElement;
  showCount?: boolean;
  showAnimation?: boolean;
  styles?: CustomStyles;
  chartColors?: ChartColors;
  onChartClick?: (ratingId: RatingValue) => void;
};

export type IRatings = {
  [value in RatingValue]: number;
};

export type IStyleFunction = (ratingId: RatingValue) => object;
