import React from "react";
import pets from "./Pets.json";
import styles from "./PetsSlider.module.scss";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const PetsSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{
        nextEl: '.next__arrow',
        prevEl: '.prev__arrow',
      }}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <PrevArrow className='prev__arrow'/>

      <SwiperSlide>
        <div className={styles.pets__slide}>
          {pets.map((pet, index) => (
            <div key={index} className={styles.pets__card}>
              <h3 className={styles.pets__title}>{pet.title}</h3>
              <img
                src={require(`../../assets/img/${pet.img}`)}
                alt="img"
                className={styles.pets__img}
              />
            </div>
          ))}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.pets__slide}>
          {pets.map((pet, index) => (
            <div key={index} className={styles.pets__card}>
              <h3 className={styles.pets__title}>{pet.title}</h3>
              <img
                src={require(`../../assets/img/${pet.img}`)}
                alt="img"
                className={styles.pets__img}
              />
            </div>
          ))}
        </div>
      </SwiperSlide>

      <NextArrow className='next__arrow'/>
    </Swiper>
  );
};

export default PetsSlider;
