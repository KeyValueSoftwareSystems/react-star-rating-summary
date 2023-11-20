import { ReactElement } from 'react';

import { Elements, GenericElements } from '../constants';

export type StyleObjectType = React.CSSProperties;

export type IRatings = {
  [value: string]: number;
};

export type RatingRanks = {
  [value: keyof IRatings]: number;
};

export type IStyleFunction = (ratingId: keyof IRatings) => React.CSSProperties;

type GenericCustomStyles = {
  [value in GenericElements]?: StyleObjectType;
};

type SpecificCustomStyles = {
  [value in Elements]?: IStyleFunction;
};

export type CustomStyles = GenericCustomStyles | SpecificCustomStyles;

export type BarColors = { [value in keyof IRatings]: string };

export interface RatingAverageIconProps {
  fillColor?: string;
  bgColor?: string;
}

export type CustomAverageFn = (ratings: IRatings, ranks: RatingRanks) => number;

export type ISummaryProp = {
  ratings: IRatings;
  ratingRanks?: RatingRanks;
  renderLabel?: (ratingId: string) => ReactElement;
  showCount?: boolean;
  showAnimation?: boolean;
  styles?: CustomStyles;
  barColors?: BarColors;
  onBarClick?: (ratingId: keyof IRatings) => void;
  showAverageRating?: boolean;
  customAverageFn?: CustomAverageFn;
  averageRatingPrecision?: number;
  ratingAverageIconProps?: RatingAverageIconProps;
  thousandsSeparator?: string;
  ratingAverageSubText?: string;
};
