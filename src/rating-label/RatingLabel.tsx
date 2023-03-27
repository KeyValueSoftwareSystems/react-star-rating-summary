import React, { FC } from 'react';
import classes from './styles.module.scss';
import { IRatingLabelProp } from './types';
import starImg from '../assets/star-grey.svg';

const RatingLabel: FC<IRatingLabelProp> = (props) => {
  const { ratingId } = props;
  return (
    <div className={classes.label} id={`${ratingId}-label`}>
      <img className={classes.starImage} src={starImg} alt="" width="10" height="10" />
      {ratingId}
    </div>
  );
};

export default RatingLabel;
