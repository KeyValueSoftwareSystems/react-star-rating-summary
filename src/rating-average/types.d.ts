import {
  CustomStyles,
  IRatings,
  RatingAverageIconProps,
  RatingRanks
} from '../rating-summary/types';

export interface IRatingAverageProp {
  ratings: IRatings;
  ranks?: RatingRanks;
  customAverageFn?: (ratings: IRatings, ranks: RatingRanks) => number;
  averageRatingPrecision?: number;
  iconProps?: RatingAverageIconProps;
  styles?: CustomStyles;
  thousandsSeparator?: string;
  ratingAverageSubText?: string;
}
