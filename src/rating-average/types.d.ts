import {
  CustomAverageFn,
  CustomStyles,
  IRatings,
  RatingIconProps,
  RatingRanks
} from '../rating-summary/types';

export interface IRatingAverageProp {
  ratings: IRatings;
  ranks?: RatingRanks;
  customAverageFn?: CustomAverageFn;
  averageRatingPrecision: number;
  iconProps?: RatingIconProps;
  styles?: CustomStyles;
  thousandsSeparator?: string;
  ratingAverageSubText: string;
}
