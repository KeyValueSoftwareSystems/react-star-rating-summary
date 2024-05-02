import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Component from '../rating-summary';

export default {
  title: 'Example/RatingSummary',
  component: Component,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  },
  argTypes: {
    showAnimation: {
      defaultValue: true,
      control: { type: 'boolean' }
    },
    showCount: {
      defaultValue: true,
      control: { type: 'boolean' }
    },
    showAverageRating: {
      defaultValue: true,
      control: { type: 'boolean' }
    },
    averageRatingPrecision: {
      defaultValue: 1,
      control: { type: 'number' }
    },
    ratingAverageSubText: {
      defaultValue: 'reviews',
      control: { type: 'text' }
    },
    ratingAverageIconProps: {
      control: 'object',
      fillColor: {
        control: { type: 'color' }
      },
      bgColor: {
        control: { type: 'color' }
      },
      defaultValue: {
        fillColor: '#5D5FEF',
        bgColor: '#FFFFFF'
      }
    },
    order: {
      control: { type: 'radio' },
      options: ['ORIGINAL', 'REVERSE']
    }
  }
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ratings: {
    5: 114845,
    4: 365957,
    3: 141135,
    2: 57472,
    1: 134055
  },
  onBarClick: (ratingId: string) => {
    alert(`clicked on bar with rating-id: ${ratingId}`);
  }
};

export const DefaultFixedWidthContainer = Template.bind({});
DefaultFixedWidthContainer.args = {
  ratings: {
    5: 400,
    4: 300,
    3: 350,
    2: 200,
    1: 250
  },
  styles: {
    Root: {
      width: '500px',
      padding: '20px'
    },
    BarContainer: () => ({
      backgroundColor: '#F2F2F2',
      borderRadius: '20px',
      overflow: 'hidden'
    }),
    Bar: () => ({
      height: '20px'
    })
  }
};

export const VariantWithThousandsSeparator = Template.bind({});
VariantWithThousandsSeparator.args = {
  ...Default.args,
  thousandsSeparator: ","
};

export const VariantWithCustomBarColors = Template.bind({});
VariantWithCustomBarColors.args = {
  ...Default.args,
  barColors: {
    5: '#F5BFD9',
    4: 'yellow',
    3: 'orange',
    2: 'blue',
    1: 'green'
  }
};

export const VariantWithoutAnimations = Template.bind({});
VariantWithoutAnimations.args = {
  ...Default.args,
  ratings: {
    10: 11,
    27: 15,
    42: 20,
    55: 15
  },
  showAnimation: false
};

export const VariantWithoutCount = Template.bind({});
VariantWithoutCount.args = {
  ...Default.args,
  showCount: false
};

export const VariantWithCustomLabel = Template.bind({});
VariantWithCustomLabel.args = {
  ...Default.args,
  renderLabel: (ratingId: string) => (
    <div
      style={{
        paddingRight: '8px'
      }}
    >
      {ratingId}
    </div>
  )
};

const REVIEW_COUNT_COLOR = {
  100: 'white',
  200: 'black',
  300: 'red',
  400: 'blue',
  500: 'lightgreen'
};

export const VariantWithCustomStyle = Template.bind({});
VariantWithCustomStyle.args = {
  ...Default.args,
  ratings: {
    100: 100,
    200: 150,
    300: 200,
    400: 80,
    500: 200
  },
  styles: {
    Root: { padding: '20px', fontSize: '14px' },
    Average: { color: 'purple' },
    AverageStarIcon: {
      width: '20px',
      height: '20px'
    },
    Label: () => ({ fontSize: '12px' }),
    Count: (ratingId: number) =>
      REVIEW_COUNT_COLOR[ratingId] && { color: REVIEW_COUNT_COLOR[ratingId] },
    Bar: () => ({ borderRadius: 10 })
  }
};

export const VariantWithStringBasedRatings = Template.bind({});
VariantWithStringBasedRatings.args = {
  ...Default.args,
  ratings: {
    good: 200,
    bad: 200,
    excellent: 200
  }
};

export const VariantWithCustomRanks = Template.bind({});
VariantWithCustomRanks.args = {
  ...Default.args,
  ratings: {
    good: 200,
    okay: 500,
    poor: 100,
    excellent: 300,
    great: 700
  },
  ratingRanks: {
    good: 3,
    okay: 2,
    poor: 1,
    excellent: 5,
    great: 4
  },
  averageRatingPrecision: 2,
  ratingAverageIconProps: {
    fillColor: 'green',
    bgColor: 'red'
  },
  ratingAverageSubText: 'total'
};

export const VariantWithOriginalOrder = Template.bind({});
VariantWithOriginalOrder.args = {
  ...VariantWithStringBasedRatings.args,
  order: 'ORIGINAL'
};
