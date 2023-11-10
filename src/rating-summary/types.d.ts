import { ReactElement } from 'react';

import { RatingValue, Elements, GenericElements } from '../constants';

export type StyleObjectType = React.CSSProperties;

export type IStyleFunction = (ratingId: RatingValue) => React.CSSProperties;

type GenericCustomStyles = {
  [value in GenericElements]?: StyleObjectType;
};

type SpecificCustomStyles = {
  [value in Elements]?: IStyleFunction;
};

export type CustomStyles = GenericCustomStyles | SpecificCustomStyles;

export type ChartColors = { [value in RatingValue]: string };

export interface RatingAverageIconProps {
  width?: string;
  height?: string;
  fillColor?: string;
  bgColor?: string;
}

export type ISummaryProp = {
  ratings: IRatings;
  renderLabel?: (ratingId: string) => ReactElement;
  showCount?: boolean;
  showAnimation?: boolean;
  styles?: CustomStyles;
  chartColors?: ChartColors;
  onChartClick?: (ratingId: RatingValue) => void;
  showAverageRating?: boolean;
  customAverageFn?: (ratings: IRatings) => number;
  averageRatingPrecision?: number;
  ratingAverageIconProps?: RatingAverageIconProps;
};

export type IRatings = {
  [value in RatingValue]: number;
};
