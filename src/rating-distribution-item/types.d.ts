import { BarColors, CustomStyles, IRatings } from '../rating-summary/types';

export interface IRatingDistributionProp {
  currentRatingId: string;
  currentRatingValue: number;
  totalRatingCount: number;
  showCount?: boolean;
  showAnimation?: boolean;
  styles?: CustomStyles;
  barColors?: BarColors;
  onBarClick?: (ratingId: string) => void;
  thousandsSeparator?: string;
}
