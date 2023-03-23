import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from '../rating-summary';

export default {
  title: 'Example/RatingSummary',
  component: Component,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Component>;


const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;

export const RatingSummary = Template.bind({});
RatingSummary.args = {
  ratings: {
    five: 100,
    four: 200,
    three: 300,
    two: 1000,
    one: 400
  },
  // renderLabel: (ratingId: string) => ((ratingId === 'one' && (<>now</>) || <>{ratingId}</>)),
  showCount: true,
  showAnimation: true,
  styles: {
    Chart: (ratingId: string) => (ratingId === 'four' && { backgroundColor: 'purple' }),
    Count: (ratingId: string) => (ratingId === "three" && { color: "white" })
  }
};