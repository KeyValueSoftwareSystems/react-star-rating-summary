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

export const DEFAULT_BAR_COLORS = {
  1: '#ff8b5a',
  2: '#ffb337',
  3: '#ffd834',
  4: '#add633',
  5: '#9fc05a'
};

export const RATING_AVERAGE_DEFAULTS = {
  icon: {
    fillColor: '#919191',
    bgColor: '#F2F2F2'
  }
};
