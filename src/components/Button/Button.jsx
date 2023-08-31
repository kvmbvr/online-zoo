import React from "react";
import styles from './Button.module.scss'

const Button = ({size, icon, text}) => {
  const buttonSizes = {
    width: size === 'small' ? '170px' : '285px',
  };
  return (
    <button style={buttonSizes} className={styles.button}>
      {icon && <img src={icon} alt="playIcon" />}
      {text}
    </button>
  );
};

export default Button;
