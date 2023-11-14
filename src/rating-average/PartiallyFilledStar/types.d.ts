import { RatingAverageIconProps } from '../../rating-summary/types';

export interface PartiallyFilledStarProp extends RatingAverageIconProps {
  colorFilledFraction: number;
  id: string;
}
