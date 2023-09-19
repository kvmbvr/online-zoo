import React from "react";

import styles from './Card.module.scss'

const Card = ({avatar, name, money, text}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.card__image}>
          <img src={avatar} alt="avatar" />
        </div>
        <div className={styles["card__header-info"]}>
          <p className={styles.card__name}>{name}</p>
          <div className={styles.card__money}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
                fill="#FFB600"
              />
              <path
                d="M5.53847 9.23031C7.57767 9.23031 9.23077 7.57721 9.23077 5.53801C9.23077 3.4988 7.57767 1.8457 5.53847 1.8457C3.49926 1.8457 1.84616 3.4988 1.84616 5.53801C1.84616 7.57721 3.49926 9.23031 5.53847 9.23031Z"
                fill="#FFB600"
              />
              <path
                d="M6.00001 10.1534C8.29046 10.1534 10.1539 8.29001 10.1539 5.99951C10.1539 3.70908 8.29046 1.8457 6.00001 1.8457C3.70956 1.8457 1.84616 3.70908 1.84616 5.99951C1.84616 8.29001 3.70956 10.1534 6.00001 10.1534ZM6.00001 3.11224C7.59213 3.11224 8.88739 4.40749 8.88739 5.99959C8.88739 7.59169 7.59213 8.88702 6.00001 8.88702C4.40789 8.88702 3.11263 7.59178 3.11263 5.99959C3.11263 4.40749 4.40789 3.11224 6.00001 3.11224Z"
                fill="black"
              />
            </svg>

            <span>{money}</span>
          </div>
        </div>
      </div>

      <p className={styles.card__text}>
        {text}
      </p>
    </div>
  );
};

export default Card;
