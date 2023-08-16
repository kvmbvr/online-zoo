import React from "react";
import arrow from "../../assets/icons/Arrow.svg";
import styles from './PrevArrow.module.scss'

const PrevArrow = ({className}) => {
  return (
    <div className={`${className} ${styles.prev}`}>
      <img src={arrow} alt="icon" />
    </div>
  );
};

export default PrevArrow;
