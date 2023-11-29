
# React Star Rating Summary

<a  href="https://www.npmjs.com/package/@keyvaluesystems/react-star-rating-summary"><img  src="https://badgen.net/npm/v/@keyvaluesystems/react-star-rating-summary?color=blue"  alt="npm version"></a>  <a  href="https://www.npmjs.com/package/@keyvaluesystems/react-star-rating-summary"  ><img  src="https://img.shields.io/npm/dw/@keyvaluesystems/react-star-rating-summary?label=Downloads"  /></a>  <a  href="https://github.com/KeyValueSoftwareSystems/react-vertical-stepper"><img  src="https://github.com/KeyValueSoftwareSystems/react-star-rating-summary/actions/workflows/update-and-publish.yml/badge.svg" alt=""  /></a>

<div  align="center">
  <img  src="./src/assets/rating-summary-example.png"  alt=""  width="400"  height="170"/>
</div>

A ready to use star rating summary UI package on 5 star rating concept for React.

Try tweaking a rating summary component using this code sandbox link <a  href="https://codesandbox.io/s/star-rating-summary-x96m8d"  >here</a>

## Installation

```bash
npm install @keyvaluesystems/react-star-rating-summary
```

You’ll need to install React separately since it isn't included in the package.

## Usage

React Star Rating Summary can be directly used in your project  by just providing the `ratings`  props like this:

```jsx
import React, { useState } from 'react';
import RatingSummary from '@keyvaluesystems/react-star-rating-summary';

function App() {
  const ratingValues = {
    5: 100,
    4: 200,
    3: 300,
    2: 1000,
    1: 400
  };

  return (
    <RatingSummary
      ratings={ratingValues}
    />
  );
};

export default App;
```
The `ratings` prop expects an object with star rating-id as key (ideally 1, 2, 3, 4 and 5) and count of the respective ratings as the value, encapsulating the distribution of user feedback for different ratings.

>Note: The total rating count will be calculated by the package and bar length for each rating will be considered with respect to total count.


## v1.0.0 (Major Version Change)

This release includes breaking changes and feature updates. Please read this document carefully before upgrading

### Breaking Changes

- The `chartColors` prop has been renamed to `barColors`
- The key `Chart` within `styles` prop to override the style of bar in the chart has been renamed to `Bar`.
- Feature improvements have been made.<br>
Please take note of these changes during the upgrade

### Migration Steps

- Update Prop names:<br>
a. Rename the prop `chartColors` to `barColors`.<br>
b. Rename the style key `Chart` to `Bar` within `styles` prop.

<b>Before</b>

```jsx
 <RatingSummary
    ratings={ratingValues}
    chartColors={{
      5: '#000',
      4: 'yellow',
      3: 'orange',
      2: 'blue',
      1: 'green'
    }}
    styles={{
      Chart: (ratingId) => ({...styles}),
      Count: (ratingId) => ({...styles})
    }}
  />
```

<b>After</b>

```jsx
 <RatingSummary
    ratings={ratingValues}
    barColors={{
      5: '#000',
      4: 'yellow',
      3: 'orange',
      2: 'blue',
      1: 'green'
    }}
    styles={{
      Bar: (ratingId) => ({...styles}),
      Count: (ratingId) => ({...styles})
    }}
  />
```

## Props

Props that can be passed to the component are listed below:

<table>
	<thead>
		<tr>
			<th>Prop</th>
			<th>Description</th>
			<th>Default</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code><b>ratings:</b> object</code></td>
			<td>An object where each key is a unique rating id serving as a label, and the corresponding value indicates the number of user reviews received for the respective rating id.</td>
			<td><code>undefined</code></td>
		</tr>
		<tr>
			<td><code><b>barColors?:</b> object</code></td>
			<td>An object with ratingIds as key and respective bar color as value.</td>
			<td><code>undefined</code></td>
		</tr>
		<tr>
			<td><code><b>renderLabel?:</b> (ratingId: string): ReactElement</code></td>
			<td>A render function to customize your ratings label with your own element.</td>
			<td><code>undefined</code></td>
		</tr>
		<tr>
			<td><code><b>showCount?:</b> boolean</code></td>
			<td>Boolean to enable and disable showing count on the bar in summary section.</td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td><code><b>showAnimation?:</b> boolean</code></td>
			<td>Boolean to enable and disable showing animations and transitions on the bars in chart.</td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td><code><b>styles?:</b> object</code></td>
			<td>Provides you with a bunch of style objects and callback functions to override the default styles.(refer 
			<a href="#style-customizations">Style Customizations</a>)
			<td><code>undefined</code></td>
		</tr>
		<tr>
			<td><code><b>onBarClick?:</b> (ratingId: string): void</code></td>
			<td>Click handler for each rating bar in chart</td>
			<td><code>undefined</code></td>
		</tr>
		<tr>
			<td><code><b>ratingRanks?:</b> object</code></td>
			<td>An object where each key represents a rating ID, and the associated value indicates the rank or weightage assigned to that specific rating. This ranking is taken into account when computing the average of ratings.</td>
			<td><code>undefined</code></td>
		</tr>
		<tr>
			<td><code><b>showAverageRating?:</b> boolean</code></td>
			<td>Boolean to enable and disable showing average rating section.</td>
			<td><code>true</code></td>
		</tr>
		<tr>
			<td><code><b>customAverageFn?:</b> (ratings: object, ranks: object) => number</code></td>
			<td>A function that allows customization of the average computation for ratings, in order to override the default behavior.</td>
			<td><code>undefined</code></td>
		</tr>
		<tr>
			<td><code><b>averageRatingPrecision?:</b> number</code></td>
			<td>Determines the number of decimal places for displaying the average of ratings.</td>
			<td><code>1</code></td>
		</tr>
		<tr>
			<td><code><b>ratingAverageIconProps?:</b> object</code></td>
			<td>An object defining the fill color and background color for customizing the appearance of star icon in the average rating section.</td>
			<td><code>undefined</code></td>
		</tr>
		<tr>
			<td><code><b>thousandsSeparator?:</b> string</code></td>
			<td>A string specifying the custom thousands separator for formatting a numerical value.</td>
			<td><code>','</code></td>
		</tr>
		<tr>
			<td><code><b>ratingAverageSubText?:</b> string</code></td>
			<td>A string used to customize the text accompanying the star rating average which provides additional information about the total number of reviews.</td>
			<td><code>'reviews'</code></td>
		</tr>
	</tbody>
</table>

>Note: The numbers from 1 to 5 are the ideal values for `ratingIds`. RatingIds are considered as labels and a value of index + 1 is used when computing rating average if rank of each rating-id is not explicitly passed through ratingRanks prop.
<a name="style-customizations"></a>
## Style Customizations

Basic customization like changing the bar color for each ratings can be done using the `barColors` prop:

```jsx
  <RatingSummary
    ratings={ratingValues}
    barColors={{
      5: '#000',
      4: 'yellow',
      3: 'orange',
      2: 'blue',
      1: 'green'
    }}
  />
```
Further customizations can by done by overriding default styles using the `styles` prop,
the below code shows all the overridable styles:

```jsx
<RatingSummary
  ratings={ratingValues}
  styles={{
    Root?: {...styles},
    SummaryContainer?: {...styles},
    AverageContainer?: {...styles},
    Average?: {...styles},
    AverageIconsWrapper?: {...styles},
    AverageStarIcon?: {...styles},
    AverageSubTextContainer?: {...styles},
    AverageSubText?: {...styles},
    AverageTotalReviews?: {...styles},
    SummaryItemContainer?: (id) => ({...styles}),
    BarContainer?: (id) => ({...styles}),
    FilledBarContainer?: (id) => ({...styles}),
    Bar?: (id) => ({...styles}),
    Count?: (id) => ({...styles}),
    Label?: (id) => ({...styles}),
    LabelStarIcon?: (id) => ({...styles}),
  }}
/>

```

For a more specific example, please refer the following:

```jsx
import React from 'react';
import RatingSummary from '@keyvaluesystems/react-star-rating-summary';

function App() {

  const countColors = {
		1: 'red',
		2: 'yellow',
		3: 'blue',
		4: 'orange',
		5: 'white'
  };

  return (
    <RatingSummary
      ratings={{
		    1: 100,
		    2: 200,
		    3: 300,
		    4: 400,
		    5: 500
	    }}
      styles={{
        Average: { color: 'purple' },
        AverageStarIcon: {
          width: '20px',
          height: '20px'
        },
        LabelStarIcon: () => ({
          width: '15px',
          height: '15px'
        }),
        Label: (ratingId) => ({ fontSize: '12px' }),
        Count: (ratingId) => ({color: countColors[ratingId]})
      }}
    />
  );
}

export default App;
```

Within the `styles` prop, following keys accept a style object:

- `Root` - overrides the style of outermost container.
- `SummaryContainer` - overrides the style of summary container.
- `AverageContainer` - overrides the style of average section.
- `Average` - overrides the style of average value.
- `AverageIconsWrapper` - overrides the style of icons container in the average section.
- `AverageStarIcon` - overrides the style of every individual star icon in the average section
- `AverageSubTextContainer` - overrides the style of sub-text container in the average section.
- `AverageTotalReviews` - overrides the style of total no. of review's value in the average section.
- `AverageSubText` - overrides the style of the sub-text adjacent to total no. of review in the average section.

Within the `styles` prop, following keys accept a function that returns the desired style for each element:

- `SummaryItemContainer` - overrides the style of summary item container, which consist of the label and bar in the chart for each rating.
- `Label` - overrides the Label container style for each rating.
- `LabelStarIcon` - overrides the style of the star icon in the label of each rating.
- `BarContainer` - overrides the style of bar container for each rating.
- `FilledBarContainer` - overrides the style of filled part of bar for each rating.
- `Bar` - overrides the bar style in the chart for each rating.
- `Count` - overrides the rating count style for each rating.

>Note: if you provides both `barColors` prop and overrides `Bar` style using `styles` prop, the customizations via `Bar` in `styles` prop are given more priority.

Example with the usage of other props
```jsx
import React from 'react';
import RatingSummary from '@keyvaluesystems/react-star-rating-summary';

function App() {

  return (
    <RatingSummary
      ratings={ratingValues}
      showAnimation={false}
      showCount={false}
      averageRatingPrecision={2}
      ratingAverageIconProps={{
        fillColor: 'green',
        bgColor: 'red'
      }}
      ratingAverageSubText="total"
      renderLabel={(ratingId) => ratingId}
    />
  );
}

export default App;
```
