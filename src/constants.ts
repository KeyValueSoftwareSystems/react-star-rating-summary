export enum GenericElements {
  Root = 'Root',
  SummaryContainer = 'SummaryContainer',
  AverageContainer = 'AverageContainer',
  Average = 'Average',
  AverageIconsWrapper = 'AverageIconsWrapper',
  AverageStarIcon = 'AverageStarIcon',
  AverageSubTextContainer = 'AverageSubTextContainer',
  AverageTotalReviews = 'AverageTotalReviews',
  AverageSubText = 'AverageSubText'
}

export enum Elements {
  SummaryItemContainer = 'SummaryItemContainer',
  BarContainer = 'BarContainer',
  FilledBarContainer = 'FilledBarContainer',
  Bar = 'Bar',
  Count = 'Count',
  Label = 'Label',
  LabelStarIcon = 'LabelStarIcon'
}

export enum ORDER {
  ORIGINAL = 'ORIGINAL',
  REVERSE = 'REVERSE'
}

export const INTERNATIONAL_NUMBER_SYSTEM_REGEX = /\B(?=(\d{3})+(?!\d))/g;

export const DEFAULT_COLOR = "#5D5FEF";

export const RATING_AVERAGE_DEFAULTS = {
  icon: {
    fillColor: DEFAULT_COLOR,
    bgColor: '#FFFFFF'
  }
};
