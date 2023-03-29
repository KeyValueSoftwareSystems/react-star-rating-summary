import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from '../rating-summary';

export default {
  title: 'Example/RatingSummary',
  component: Component,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const RatingSummary = Template.bind({});
RatingSummary.args = {
  ratings: {
    5: 1148459,
    4: 365957,
    3: 141135,
    2: 57472,
    1: 134055
  },
  // renderLabel: (ratingId: string) => ((ratingId === '1' && (<>now</>) || <>{ratingId}</>)),
  // showCount: true,
  // showAnimation: true,
  // styles: {
  //   Count: (ratingId: number) => ratingId === 3 && { color: 'white' },
  // },
  // chartColors: {
  //   5: '#000',
  //   4: 'yellow',
  //   3: 'orange',
  //   2: 'blue',
  //   1: 'green'
  // },
  onBarClick: (ratingId: string) => {
    console.log("🚀 ~ ratingId:", ratingId)
  }
};
