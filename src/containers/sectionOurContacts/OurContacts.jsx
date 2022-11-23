import React, { useState } from "react";
import s from "./OurContacts.module.css";
import { motion } from "framer-motion";

const OurContacts = () => {
  const [value, setValue] = useState("Введите ваш телефон");

  return (
    <motion.div
      className={s.container}
      initial={{ y: "100px", opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <h1>
        Оставьте заявку на консультацию <br /> и расчёт стоимости БЕСПЛАТНО
      </h1>
      <div className={s.btns}>
        {/* <button
          className={s.left__btn}
          placeholder="Введите ваш телефон"
        ></button> */}
        <input
        type="text"

          // type="button"
          className={s.left__btn}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button className={s.right__btn}> Жду звонка</button>
      </div>
    </motion.div>
  );
};

export default OurContacts;
