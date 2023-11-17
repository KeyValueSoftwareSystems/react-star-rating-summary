import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RatingSummary from '../rating-summary';
import { IRatings } from '../rating-summary/types';

const getById = queryByAttribute.bind(null, 'id');
describe('RatingSummary', () => {
  const ratings: IRatings = {
    5: 200,
    4: 150,
    3: 100,
    2: 75,
    1: 50
  };
  const total = 575;
  it('should render the RatingSummary component', () => {
    const { container } = render(<RatingSummary ratings={ratings} />);
    const ratingSummaryComponent = getById(container, 'ratings-container');
    if (!ratingSummaryComponent) throw Error('No Component present');
  });

  it('should display the rating count for each rating ID when showCount is true', () => {
    const { container } = render(<RatingSummary ratings={ratings} />);
    const oneStarRatingCount = getById(container, '1-count');
    const twoStarRatingCount = getById(container, '2-count');
    const threeStarRatingCount = getById(container, '3-count');
    const fourStarRatingCount = getById(container, '4-count');
    const fiveStarRatingCount = getById(container, '5-count');
    expect(oneStarRatingCount?.textContent).toEqual('50');
    expect(twoStarRatingCount?.textContent).toEqual('75');
    expect(threeStarRatingCount?.textContent).toEqual('100');
    expect(fourStarRatingCount?.textContent).toEqual('150');
    expect(fiveStarRatingCount?.textContent).toEqual('200');
  });

  it('should not display the rating count for each rating ID when showCount is false', () => {
    const { container } = render(
      <RatingSummary ratings={ratings} showCount={false} />
    );
    const oneStarRatingCount = getById(container, '1-count');
    const twoStarRatingCount = getById(container, '2-count');
    const threeStarRatingCount = getById(container, '3-count');
    const fourStarRatingCount = getById(container, '4-count');
    const fiveStarRatingCount = getById(container, '5-count');
    expect(oneStarRatingCount).toBeNull();
    expect(twoStarRatingCount).toBeNull();
    expect(threeStarRatingCount).toBeNull();
    expect(fourStarRatingCount).toBeNull();
    expect(fiveStarRatingCount).toBeNull();
  });

  it('should display the correct label for each rating ID', () => {
    const { container } = render(<RatingSummary ratings={ratings} />);
    const oneStarRatingLabel = getById(container, '1-label');
    const twoStarRatingLabel = getById(container, '2-label');
    const threeStarRatingLabel = getById(container, '3-label');
    const fourStarRatingLabel = getById(container, '4-label');
    const fiveStarRatingLabel = getById(container, '5-label');
    expect(oneStarRatingLabel?.textContent).toEqual('1');
    expect(oneStarRatingLabel?.textContent).toEqual('1');
    expect(twoStarRatingLabel?.textContent).toEqual('2');
    expect(threeStarRatingLabel?.textContent).toEqual('3');
    expect(fourStarRatingLabel?.textContent).toEqual('4');
    expect(fiveStarRatingLabel?.textContent).toEqual('5');
  });

  it('should call the renderLabel function when provided', () => {
    const mockRenderLabel = jest.fn(() => <div>Custom label</div>);
    render(<RatingSummary ratings={ratings} renderLabel={mockRenderLabel} />);
    expect(mockRenderLabel).toHaveBeenCalledTimes(5);
  });

  it('should display the bars in chart with correct width based on the number of ratings', () => {
    const { container } = render(<RatingSummary ratings={ratings} />);

    const oneStarBar = getById(container, '1-bar');
    const twoStarBar = getById(container, '2-bar');
    const threeStarBar = getById(container, '3-bar');
    const fourStarBar = getById(container, '4-bar');
    const fiveStarBar = getById(container, '5-bar');

    expect(oneStarBar.style._values.width).toBe(
      `${(ratings[1] / total) * 100}%`
    );
    expect(twoStarBar.style._values.width).toBe(
      `${(ratings[2] / total) * 100}%`
    );
    expect(threeStarBar.style._values.width).toBe(
      `${(ratings[3] / total) * 100}%`
    );
    expect(fourStarBar.style._values.width).toBe(
      `${(ratings[4] / total) * 100}%`
    );
    expect(fiveStarBar.style._values.width).toBe(
      `${(ratings[5] / total) * 100}%`
    );
  });

  it('should be able to pass string based ratingIds', () => {
    const stringBasedRatings = {
      poor: 100,
      okay: 100,
      good: 100,
      great: 100,
      excellent: 100
    };
    const { container } = render(
      <RatingSummary ratings={stringBasedRatings} />
    );

    const oneStarRatingLabel = getById(container, 'poor-label');
    const twoStarRatingLabel = getById(container, 'okay-label');
    const threeStarRatingLabel = getById(container, 'good-label');
    const fourStarRatingLabel = getById(container, 'great-label');
    const fiveStarRatingLabel = getById(container, 'excellent-label');
    expect(oneStarRatingLabel?.textContent).toEqual('poor');
    expect(twoStarRatingLabel?.textContent).toEqual('okay');
    expect(threeStarRatingLabel?.textContent).toEqual('good');
    expect(fourStarRatingLabel?.textContent).toEqual('great');
    expect(fiveStarRatingLabel?.textContent).toEqual('excellent');
  });

  it('should be able to pass custom ranks', () => {
    const ratings = {
      poor: 100,
      good: 200,
      excellent: 300
    };
    const ratingRanks = {
      poor: 1,
      good: 2,
      excellent: 3
    };
    const { container } = render(
      <RatingSummary ratings={ratings} ratingRanks={ratingRanks} />
    );

    const oneStarRatingLabel = getById(container, 'poor-label');
    const twoStarRatingLabel = getById(container, 'good-label');
    const threeStarRatingLabel = getById(container, 'excellent-label');
    expect(oneStarRatingLabel?.textContent).toEqual('poor');
    expect(twoStarRatingLabel?.textContent).toEqual('good');
    expect(threeStarRatingLabel?.textContent).toEqual('excellent');
  });

  it('should be able to pass custom styles', () => {
    const sampleCustomStyle = {
      SummaryContainer: { color: 'purple' },
      Label: () => ({ fontSize: '10px' })
    };
    const { container } = render(
      <RatingSummary ratings={ratings} styles={sampleCustomStyle} />
    );

    const summaryContainer = getById(container, 'ratings-container');
    expect(summaryContainer).toHaveStyle('color: purple');

    const oneStarLabel = getById(container, '1-label');
    expect(oneStarLabel).toHaveStyle('font-size: 10px');
  });

  it('should be able to pass custom bar colors', () => {
    const customBarColors = {
      1: 'purple',
      2: 'blue'
    };
    const { container } = render(
      <RatingSummary ratings={ratings} barColors={customBarColors} />
    );

    const oneStarRatingBar = getById(container, '1-inner-bar');
    expect(oneStarRatingBar).toHaveStyle('background-color: purple');
    const twoStarRatingBar = getById(container, '2-inner-bar');
    expect(twoStarRatingBar).toHaveStyle('background-color: blue');
  });

  it('should be able to pass onBarClick handler', () => {
    const onBarClick = jest.fn();
    const { container } = render(
      <RatingSummary ratings={ratings} onBarClick={onBarClick} />
    );

    const oneStarRatingBar = getById(container, '1-bar');
    oneStarRatingBar.click();
    expect(onBarClick).toHaveBeenCalled();
  });
});
