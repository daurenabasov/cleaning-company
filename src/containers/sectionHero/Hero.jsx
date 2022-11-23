import React from "react";
import s from "./Hero.module.css";
import { motion } from "framer-motion";
import heroImg from "../../Assets/hero2.png";

const Hero = () => {
  return (
    <>
      <section id={s.hero}>
        <div className={s.hero__titles}>
          <motion.h3
            initial={{ y: "100px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.5 }}
          >
            Бережная уборка квартир и домов <br /> в СПБ по фиксированной
            стоимости <br /> от 80₽/м² -{" "}
            <motion.span
              initial={{ y: "100px", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              с гарантий качества по договору
            </motion.span>
          </motion.h3>

          <motion.p
            initial={{ y: "50px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.5 }}
          >
            Выберите вид уборки, получите точный расчёт <br /> стоимости и
            скидку 10% на первый заказ
          </motion.p>
          <motion.div
            initial={{ y: "47px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1.7 }}
            className={s.buttons}
          >
            <button className={s.top__btn}>Рассчитать стоимость</button>
            <button className={s.bottom__btn}>Выбрать вид уборки</button>
          </motion.div>
        </div>
        {/* <div className={s.hero__img}>
          <img src={heroImg} alt="" />
        </div> */}
      </section>
    </>
  );
};

export default Hero;
