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
    thousandsSeparator: {
      options: [',', '.'],
      control: { type: 'select' }
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
    console.log('🚀 ~ ratingId:', ratingId);
  }
};

export const VariantWithCustomBarColors = Template.bind({});
VariantWithCustomBarColors.args = {
  ...Default.args,
  chartColors: {
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
  renderLabel: (ratingId: string) => ratingId
};

const REVIEW_COUNT_COLOR = ['', 'white', 'black', 'red', 'blue', 'lightgreen'];

export const VariantWithCustomStyle = Template.bind({});
VariantWithCustomStyle.args = {
  ...Default.args,
  styles: {
    Root: { padding: '20px', fontSize: '14px' },
    Average: { color: 'purple' },
    AverageStarIcon: {
      width: '20px',
      height: '20px'
    },
    LabelStarIcon: () => ({
      width: '15px',
      height: '15px'
    }),
    Label: () => ({ fontSize: '12px' }),
    Count: (ratingId: number) =>
      REVIEW_COUNT_COLOR[ratingId] && { color: REVIEW_COUNT_COLOR[ratingId] },
    Chart: () => ({ borderRadius: 10 })
  }
};

export const VariantWithCustomRanks = Template.bind({});
VariantWithCustomRanks.args = {
  ...Default.args,
  ratings: {
    good: 200,
    bad: 200,
    excellent: 200
  }
};
