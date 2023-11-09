import { RatingValue } from '../constants';
import { ChartColors, CustomStyles, IRatings } from '../rating-summary/types';

export interface IRatingDistributionProp {
  currentRatingId: RatingValue;
  currentRatingValue: number;
  totalRatingCount: number;
  showCount?: boolean;
  showAnimation?: boolean;
  styles?: CustomStyles;
  chartColors?: ChartColors;
  onChartClick?: (ratingId: RatingValue) => void;
}
