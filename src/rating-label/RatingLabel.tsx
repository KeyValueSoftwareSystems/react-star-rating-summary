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
        ...getStyles(styles, Elements.Label, Number(ratingId))
      }}
    >
      <img
        className={classes.starImage}
        src={starImg}
        alt=""
        width="10"
        height="10"
      />
      {ratingId}
    </div>
  );
};

export default RatingLabel;
