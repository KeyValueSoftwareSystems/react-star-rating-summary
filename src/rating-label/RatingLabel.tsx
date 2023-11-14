import React, { FC } from 'react';

import { IRatingLabelProp } from './types';
import starImg from '../assets/star-grey.svg';
import { getStyles } from '../utils';
import { Elements } from '../constants';
import classes from './styles.module.scss';

const RatingLabel: FC<IRatingLabelProp> = (props) => {
  const { ratingId, styles } = props;

  return (
    <div
      className={classes.label}
      id={`${ratingId}-label`}
      style={{
        ...getStyles(styles, Elements.Label, ratingId)
      }}
    >
      <img
        className={classes.starImage}
        style={{
          ...getStyles(styles, Elements.LabelStarIcon, ratingId)
        }}
        src={starImg}
        alt=""
      />
      {ratingId}
    </div>
  );
};

export default RatingLabel;
