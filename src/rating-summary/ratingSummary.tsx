import React, { FC, ReactElement, useMemo } from 'react';
import { ISummaryProp } from './types';
import classes from './styles.module.scss';
import starImg from '../assets/star-grey.svg';
import { Elements, RatingIds } from '../constants';

const RatingSummary: FC<ISummaryProp> = (props): JSX.Element => {
  const { ratings,
    renderLabel,
    showCount = true,
    showAnimation = true,
    styles={}
  } =props;

  const getRatingLabelFromRatingId = (ratingId: string): ReactElement => {
    if (renderLabel) return (renderLabel(ratingId));
    let defaultLabel = '';
    switch (ratingId) {
    case RatingIds.one:
      defaultLabel = '1'
      break;
    case RatingIds.two:
      defaultLabel = '2'
      break;
    case RatingIds.three:

      defaultLabel = '3'
      break;
    case RatingIds.four:
      defaultLabel = '4'
      break;
    case RatingIds.five:
      defaultLabel = '5'
      break;
    default:
    }
    return (
      <div
        className={classes.label}
        id={`${ratingId}-label`}
      >
        <img src={starImg} alt="" width="10" height="10" />
        {defaultLabel}
      </div>
    );
  };

  const formatToNumberWithCommas = (num: number): string => (num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

  const getTotalRatingsCount = useMemo((): number => (
    Object.values(ratings).reduce((sum, num) => sum + (num || 0))), [ratings]);

  const getBarWidth = (ratingId: RatingIds): number => {
    const totalRatingCount = getTotalRatingsCount;
    return ((ratings[ratingId] || 0) / totalRatingCount);
  };

  const getStyles = (element: Elements, ratingId: RatingIds): object => {
    const getElementStyle = styles[element];
    if (getElementStyle) {
      return getElementStyle(ratingId);
    }
    return {};
  };

  return(
    <div className={classes.ratingsWrapper} id="ratings-container">
      {Object.keys(ratings).map((ratingId: RatingIds) => (
        <div
          key={ratingId}
          className={classes.ratingWrapper}
        >
          {getRatingLabelFromRatingId(ratingId)}
          <div
            style={{width: `${getBarWidth(ratingId)*100}%`}}
            className={classes.barWrapper}
            id={`${ratingId}-bar`}
          >
            <div
              style={{ ...getStyles(Elements.Chart, ratingId)}}
              className={`${classes.barContainer}
              ${classes[ratingId]}
              ${showAnimation && classes.transitions}`}
            >
              {showCount && (
                <span
                  className={classes.countContainer}
                  style={{ ...getStyles(Elements.Count, ratingId)}}
                  id={`${ratingId}-count`}
                >
                  {formatToNumberWithCommas(ratings[ratingId])}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RatingSummary;
