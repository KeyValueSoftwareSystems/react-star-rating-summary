import {
  CustomStyles,
  IRatings,
  RatingAverageIconProps
} from '../rating-summary/types';

export interface IRatingAverageProp {
  ratings: IRatings;
  customAverageFn?: (ratings: IRatings) => number;
  averageRatingPrecision?: number;
  iconProps?: RatingAverageIconProps;
  styles?: CustomStyles;
}
