import React from "react";
import styles from "./Pay.module.scss";
import cards from "../../assets/icons/card.svg";
import panda from '../../assets/icons/panda.svg'
import zoo from '../../assets/icons/zoo.svg'

const Pay = () => {
  return (
    <section className={styles.pay}>
      <div className={styles.pay__container}>
        <h2 className={styles.pay__title}>Pay and feed</h2>
        <div className={styles.pay__wrapper}>
          <div className={styles.pay__item}>
            <div className={styles["pay__item-image"]}>
              <img src={cards} alt="cards" />
            </div>
            <p className={styles["pay__item-text"]}>
              You can pay for a donation to any animal using your Credit/Debit
              card
            </p>
          </div>

          <div className={styles.pay__item}>
            <div className={styles["pay__item-image"]}>
              <img src={zoo} alt="cards" />
            </div>
            <p className={styles["pay__item-text"]}>
              You can pay for a donation to any animal using your Credit/Debit
              card
            </p>
          </div>

          <div className={styles.pay__item}>
            <div className={styles["pay__item-image"]}>
              <img src={panda} alt="cards" />
            </div>
            <p className={styles["pay__item-text"]}>
              You can pay for a donation to any animal using your Credit/Debit
              card
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pay;
