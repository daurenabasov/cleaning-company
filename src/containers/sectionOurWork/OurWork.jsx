import React from "react";
import s from "../../containers/sectionOurWork/OurWork.module.css";
import { motion } from "framer-motion";
import image1 from "../../Assets/first-OurWork.png";
import image2 from "../../Assets/second-OurWork.png";
import image3 from "../../Assets/third-OurWork.png";
import { useState } from "react";

const useScroll = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });
  return state;
};

const OurWork = () => {
  const { y } = useScroll();

  return (
    <motion.section
      id={s.ourWork}
      style={{ backgroundColor: y > 100 ? "red" : "#fff" }}
    >
      <div className={s.titles}>
        <motion.h1
          initial={{ y: "100px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Наша работа построена <br /> на профессионализме и честности
        </motion.h1>
        <motion.h3
          initial={{ y: "100px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          Обращаясь за помощью к нам, вы можете быть <br /> спокойны за качество
          и ваш комфорт
        </motion.h3>
      </div>
      <motion.div
        className={s.img__container}
        initial={{ y: "100px", opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
      </motion.div>
    </motion.section>
  );
};

export default OurWork;
