import React from "react";
import styles from "./Pets.module.scss";
import pets from "./Pets.json";
import Card from "../Card/Card";
import Button from "../Button/Button";
import "./Pets.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import ButtonPrev from "./ButtonPrev";
import ButtonNext from "./ButtonNext";

const Pets = () => {
  const data = [...pets, ...pets.reverse()];
  return (
    <section className={styles.pets}>
      <div className={styles.pets__container}>
        <h2 className={styles.pets__title}>Pets in zoo</h2>
        <div className={styles["pets__swiper-container"]}>
          <ButtonPrev className={styles["pets__button-prev"]} />

          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation={{
              prevEl: ".button-prev",
              nextEl: ".button-next",
            }}
            grid={{
              rows: 2,
              fill: "row",
            }}
            rewind={true}
            modules={[Grid, Navigation]}
            className={styles.pets__swiper}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className={styles.pets__slide}>
                <Card name={item.name} image={item.image} />
              </SwiperSlide>
            ))}
          </Swiper>
          <ButtonNext className={styles["pets__button-next"]} />
        </div>

        <div className={styles.pets__button}>
          <Button text={"Choose your favorite"} />
        </div>
      </div>
    </section>
  );
};

export default Pets;
