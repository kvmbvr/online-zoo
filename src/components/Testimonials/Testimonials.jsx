import React from "react";
import styles from "./Testimonials.module.scss";
import Card from "./Card";
import ava1 from "../../assets/img/ava-1.png";
import ava2 from "../../assets/img/ava-2.png";
import ava3 from "../../assets/img/ava-3.png";
import ava4 from "../../assets/img/ava-4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import ButtonPrev from "../Pets/ButtonPrev";
import ButtonNext from "../Pets/ButtonNext";
import Button from "../Button/Button";


const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__container}>
        <h2 className={styles.testimonials__title}>Testimonials</h2>

        <div className={styles.testimonials__wrapper}>
          <ButtonPrev />
          <Swiper
            className={styles.testimonials__swiper}
            loop={true}
            spaceBetween={20}
            slidesPerView={4}
            modules={[Navigation]}
            navigation={{
              prevEl: ".button-prev",
              nextEl: ".button-next",
            }}
          >
            <SwiperSlide>
              <Card
                avatar={ava1}
                name={"Karen Maitland"}
                money={"+$10"}
                text={
                  '"Thank you so much for these wonderful live webcams of the eagles on Catalina Island. Being able to watch them in their natural habitat as opposed to zoos is so wonderful. I cannot see myself ever being able to come up there to see them in person, so this is a great substitute. Thank you again."'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                avatar={ava2}
                name={"Sara Jones"}
                money={"+$13"}
                text={
                  '"A disability prevents me from enjoying the outdoors and travel like I used to do. I really enjoy all the live cams and can spend HOURS watching real-time entertainment. Wild life style!"'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                avatar={ava3}
                name={"Alex Barden"}
                money={"+$7"}
                text={
                  '"Here\'s a huge "thank-you" from New Hampshire - you allow me to travel the world without ever leaving the comfort of my office chair. Jammies on and coffee cup in hand, I am Phineas Fogg!!"'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                avatar={ava4}
                name={"Alene Ray"}
                money={"+$18"}
                text={
                  '"Thank you for all the knowledge, education, pleasure and happiness you have add to all our lives at no expense on our part. My humble thanks and gratitude are being wished for all of you. I want to thank you and feed the animals a small reward"'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                avatar={ava1}
                name={"Karen Maitland"}
                money={"+$10"}
                text={
                  '"Thank you so much for these wonderful live webcams of the eagles on Catalina Island. Being able to watch them in their natural habitat as opposed to zoos is so wonderful. I cannot see myself ever being able to come up there to see them in person, so this is a great substitute. Thank you again."'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                avatar={ava2}
                name={"Sara Jones"}
                money={"+$13"}
                text={
                  '"A disability prevents me from enjoying the outdoors and travel like I used to do. I really enjoy all the live cams and can spend HOURS watching real-time entertainment. Wild life style!"'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                avatar={ava3}
                name={"Alex Barden"}
                money={"+$7"}
                text={
                  '"Here\'s a huge "thank-you" from New Hampshire - you allow me to travel the world without ever leaving the comfort of my office chair. Jammies on and coffee cup in hand, I am Phineas Fogg!!"'
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                avatar={ava4}
                name={"Alene Ray"}
                money={"+$18"}
                text={
                  '"Thank you for all the knowledge, education, pleasure and happiness you have add to all our lives at no expense on our part. My humble thanks and gratitude are being wished for all of you. I want to thank you and feed the animals a small reward"'
                }
              />
            </SwiperSlide>
          </Swiper>
          <ButtonNext />
        </div>

        <div className={styles.testimonials__button}>
          <Button text={"Leave feedback"} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
