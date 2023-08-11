import styles from './BurgerIcon.module.scss'
import React, { useState } from 'react';

const BurgerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.icon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
      <div className={styles.bar}></div>
    </div>
  );
};

export default BurgerIcon;