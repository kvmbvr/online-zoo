import React from "react";
import PetsSlider from "../PetsSlider/PetsSlider";
import styles from "./Pets.module.scss";

const Pets = () => {
  return (
    <section className={styles.pets}>
      <div className={styles.pets__container}>
        <h2 className={styles.pets__title}>Pets in zoo</h2>
        <PetsSlider />
        <button className={styles.pets__btn}>Choose your favorite</button>
      </div>
    </section>
  );
};

export default Pets;
