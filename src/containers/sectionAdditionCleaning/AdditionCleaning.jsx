import React from "react";
import s from "./AdditionCleaning.module.css";
import { motion } from "framer-motion";
import AdditionCard from "./Cards/AdditionCard";

const AdditionCleaning = () => {
  return (
    <section id={s.additionCleaning}>
      <div className={s.titles}>
        <motion.h1
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Не нашли нужный вариант?
        </motion.h1>
        <motion.h3
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Посмотрите дополнительные услуги
        </motion.h3>
        <motion.h5
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
        >
          Устраним любой каприз в уборке
        </motion.h5>
      </div>
      <motion.div
        className={s.container}
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <AdditionCard
          img={require("./images/washing-refrigerator1.png")}
          titles="Мойка холодильника"
          price="- 600 ₽"
        />
        <AdditionCard
          img={require("./images/Microwave-washing2.png")}
          titles="Мойка микроволновки"
          price="- 400 ₽"
        />
        <AdditionCard
          img={require("./images/Washing-the-hob3.png")}
          titles="Мойка варочной плиты"
          price="- 400 ₽"
        />
        <AdditionCard
          img={require("./images/Washing-the-oven4.png")}
          titles="Мойка духовки"
          price="- 500 ₽"
        />
        <AdditionCard
          img={require("./images/Washing-the-hood5.png")}
          titles="Мойка вытяжки"
          price="- 500 ₽"
        />
        <AdditionCard
          img={require("./images/Clean-up-on-the-balcony6.png")}
          titles="Убраться на балконе"
          price="от 1000 ₽"
        />
        <AdditionCard
          img={require("./images/Ceiling-wash7.png")}
          titles="Мойка потолков"
          price="от 35 ₽/м²"
        />
        <AdditionCard
          img={require("./images/washing-walls8.png")}
          titles="Мойка стен"
          price="- 50 ₽/м²"
        />
        <AdditionCard
          img={require("./images/Change-bed9.png")}
          titles="Поменяем постельное"
          price="- 200 ₽"
        />
      </motion.div>
    </section>
  );
};

export default AdditionCleaning;
