import React, { FC } from 'react';

import { IRatingLabelProp } from './types';
import { getStyles } from '../utils';
import {
  Elements,
  RATING_AVERAGE_DEFAULTS
} from '../constants';
import classes from './styles.module.scss';
import Star from '../rating-average/star';

const RatingLabel: FC<IRatingLabelProp> = (props) => {
  const { ratingId, styles, iconProps } = props;
  const { icon } = RATING_AVERAGE_DEFAULTS;
  const { fillColor = icon.fillColor, bgColor } = iconProps || {};

  return (
    <div
      className={classes.label}
      id={`${ratingId}-label`}
      style={getStyles(styles, Elements.Label, ratingId)}
    >
      <div
        className={classes.starImage}
        style={getStyles(styles, Elements.LabelStarIcon, ratingId)}
      >
        <Star
          fillColor={fillColor}
          colorFilledFraction={1}
          id={`label-star-${ratingId}`}
        />
      </div>
      {ratingId}
    </div>
  );
};

export default RatingLabel;
