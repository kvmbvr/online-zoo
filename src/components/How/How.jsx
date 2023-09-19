import howPanda from "../../assets/img/how-panda.png";
import howEagle from "../../assets/img/how-eagle.png";
import howElephant from "../../assets/img/how-elephant.png";
import howMonkey from "../../assets/img/how-monkey.png";
import howTiger from "../../assets/img/how-tiger.png";
import styles from "./How.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation } from "swiper/modules";

const How = () => {
  return (
    <section className={styles.how}>
      <div className={styles.how__container}>
        <h2 className={styles.how__title}>How it works</h2>
        <div className={styles["how__swiper-container"]}>
          <Swiper
            className={styles.how__swiper}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
            }}
            modules={[EffectCoverflow, Navigation]}
          >
            <SwiperSlide className={styles.how__slide}>
              <img src={howPanda} alt="img" className={styles.how__image} />
            </SwiperSlide>
            <SwiperSlide className={styles.how__slide}>
              <img src={howTiger} alt="img" className={styles.how__image} />
            </SwiperSlide>
            <SwiperSlide className={styles.how__slide}>
              <img src={howEagle} alt="img" className={styles.how__image} />
            </SwiperSlide>
            <SwiperSlide className={styles.how__slide}>
              <img src={howMonkey} alt="img" className={styles.how__image} />
            </SwiperSlide>
            <SwiperSlide className={styles.how__slide}>
              <img src={howElephant} alt="img" className={styles.how__image} />
            </SwiperSlide>
            <SwiperSlide className={styles.how__slide}>
              <img src={howPanda} alt="img" className={styles.how__image} />
            </SwiperSlide>
            <SwiperSlide className={styles.how__slide}>
              <img src={howTiger} alt="img" className={styles.how__image} />
            </SwiperSlide>
            <SwiperSlide className={styles.how__slide}>
              <img src={howEagle} alt="img" className={styles.how__image} />
            </SwiperSlide>
            <SwiperSlide className={styles.how__slide}>
              <img src={howMonkey} alt="img" className={styles.how__image} />
            </SwiperSlide>
            <SwiperSlide className={styles.how__slide}>
              <img src={howElephant} alt="img" className={styles.how__image} />
            </SwiperSlide>
          </Swiper>
        </div>
        <p className={styles.how__text}>
          The application Оnline zoo will allow you to watch zoos' and nature
          reserves' inhabitants in live. Currently, under video-surveillance are
          pandas in China, eagles on Catalina Island (USA), alligators in
          Florida and gorillas in the Congo. We are expanding our capabilities
          and soon online you will meet Arctic snowy owl in Alaska, Penguin in
          California, Elephant from South Africa and Polar bear from Canada. You
          will see unique video-shots at any time of the day. If you liked a pet
          you watch and you want to please it with a delicious treat, you can
          pay a donation and the animal will receive a surprise from you during
          feeding hours. We want to thank you for helping the animals and give
          you{" "}
          <a className={styles.how__link} href="#">
            discount coupons
          </a>{" "}
          from our partners.
        </p>
      </div>
    </section>
  );
};

export default How;
