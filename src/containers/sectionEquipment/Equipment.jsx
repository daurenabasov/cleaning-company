import React from "react";
import s from "./Equipment.module.css";
import imgFirst from "../../Assets/1.png";
import imgSecond from "../../Assets/2.png";
import imgThird from "../../Assets/3.png";
import imgFour from "../../Assets/4.png";
import { motion } from "framer-motion";

const Equipment = () => {
  return (
    <section id={s.equipment}>
      <motion.div
        className={s.equipment__img}
        initial={{ x: "-300px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img src={imgFirst} alt="" />
      </motion.div>
      <motion.div
        initial={{ x: "-150px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={s.equipment__img}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img src={imgSecond} alt="" />
      </motion.div>
      <motion.div
        initial={{ x: "150px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={s.equipment__img}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img src={imgThird} alt="" />
      </motion.div>
      <motion.div
        initial={{ x: "300px", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className={s.equipment__img}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img src={imgFour} alt="" />
      </motion.div>
      <motion.div
        className={s.equipment__nav}
        initial={{ y: "100px", opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <span>Услуги</span>
        <span>Рассчитать стоимость</span>
        <span>Почему мы</span>
        <span>Как мы делаем уборку</span>
        <span>Отзывы</span>
        <span>Акции</span>
      </motion.div>
    </section>
  );
};

export default Equipment;
