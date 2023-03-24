import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RatingSummary from '../rating-summary';
import { IRatings } from '../rating-summary/types';

const getById = queryByAttribute.bind(null, 'id');
describe('RatingSummary', () => {
  const ratings: IRatings = {
    one: 50,
    two: 75,
    three: 100,
    four: 150,
    five: 200,
  };
  const total = 575;
  it('should render the RatingSummary component', () => {
    const { container } = render(<RatingSummary ratings={ratings} />);
    const ratingSummaryComponent = getById(container, 'ratings-container');
    if (!ratingSummaryComponent) throw Error('No Component present');
  });

  it('should display the rating count for each rating ID when showCount is true', () => {
    const { container } = render(<RatingSummary ratings={ratings} />);
    const oneStarRatingCount = getById(container, 'one-count');
    const twoStarRatingCount = getById(container, 'two-count');
    const threeStarRatingCount = getById(container, 'three-count');
    const fourStarRatingCount = getById(container, 'four-count');
    const fiveStarRatingCount = getById(container, 'five-count');
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
    const oneStarRatingCount = getById(container, 'one-count');
    const twoStarRatingCount = getById(container, 'two-count');
    const threeStarRatingCount = getById(container, 'three-count');
    const fourStarRatingCount = getById(container, 'four-count');
    const fiveStarRatingCount = getById(container, 'five-count');
    expect(oneStarRatingCount).toBeNull();
    expect(twoStarRatingCount).toBeNull();
    expect(threeStarRatingCount).toBeNull();
    expect(fourStarRatingCount).toBeNull();
    expect(fiveStarRatingCount).toBeNull();
  });

  it('should display the correct label for each rating ID', () => {
    const { container } = render(<RatingSummary ratings={ratings} />);
    const oneStarRatingLabel = getById(container, 'one-label');
    const twoStarRatingLabel = getById(container, 'two-label');
    const threeStarRatingLabel = getById(container, 'three-label');
    const fourStarRatingLabel = getById(container, 'four-label');
    const fiveStarRatingLabel = getById(container, 'five-label');
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

  it('should display the chart with correct width based on the number of ratings', () => {
    const { container } = render(<RatingSummary ratings={ratings} />);

    const oneStarBar = getById(container, 'one-bar');
    const twoStarBar = getById(container, 'two-bar');
    const threeStarBar = getById(container, 'three-bar');
    const fourStarBar = getById(container, 'four-bar');
    const fiveStarBar = getById(container, 'five-bar');

    expect(oneStarBar.style._values.width).toBe(
      `${(ratings.one / total) * 100}%`
    );
    expect(twoStarBar.style._values.width).toBe(
      `${(ratings.two / total) * 100}%`
    );
    expect(threeStarBar.style._values.width).toBe(
      `${(ratings.three / total) * 100}%`
    );
    expect(fourStarBar.style._values.width).toBe(
      `${(ratings.four / total) * 100}%`
    );
    expect(fiveStarBar.style._values.width).toBe(
      `${(ratings.five / total) * 100}%`
    );
  });
});
