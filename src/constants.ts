export enum RatingValue {
  Five = 5,
  Four = 4,
  Three = 3,
  Two = 2,
  One = 1
}

export enum GenericElements {
  Root = 'Root',
  SummaryContainer = 'SummaryContainer',
  AverageContainer = 'AverageContainer',
  Average = 'Average',
  AverageIconsWrapper = 'AverageIconsWrapper',
  AverageStarIcon = 'AverageStarIcon',
  AverageSubText = 'AverageSubText'
}

export enum Elements {
  Chart = 'Chart',
  Count = 'Count',
  Label = 'Label',
  LabelStarIcon = 'LabelStarIcon'
}
export const COMMA_SEPARATED_NUMBER_REGEX = /\B(?=(\d{3})+(?!\d))/g;

export const DEFAULT_CHART_COLORS = {
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
