import { ChartColors, CustomStyles, IRatings } from '../rating-summary/types';

export interface IRatingDistributionProp {
  currentRatingId: string;
  currentRatingValue: number;
  totalRatingCount: number;
  showCount?: boolean;
  showAnimation?: boolean;
  styles?: CustomStyles;
  chartColors?: ChartColors;
  onChartClick?: (ratingId: string) => void;
  thousandsSeparator?: string;
}
