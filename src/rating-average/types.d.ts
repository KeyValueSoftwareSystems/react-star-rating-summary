import {
  CustomAverageFn,
  CustomStyles,
  IRatings,
  RatingAverageIconProps,
  RatingRanks
} from '../rating-summary/types';

export interface IRatingAverageProp {
  ratings: IRatings;
  ranks?: RatingRanks;
  customAverageFn?: CustomAverageFn;
  averageRatingPrecision: number;
  iconProps?: RatingAverageIconProps;
  styles?: CustomStyles;
  thousandsSeparator?: string;
  ratingAverageSubText: string;
}
