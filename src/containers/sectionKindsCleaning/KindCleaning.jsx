import React from "react";
import s from "./KindCleaning.module.css";
import KingCards from "./Cards/KingCards";
import { motion } from "framer-motion";

const KindCleaning = () => {
  return (
    <section id={s.kindCleaning}>
      <div className={s.titles}>
        <motion.h1
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
        >
          <span>6 видов уборки </span> под любую Вашу задачу
        </motion.h1>
        <motion.p
          initial={{ y: "100px", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
        >
          Наши услуги подойдут для семейных пар с детьми, <br /> владельцев
          животных, аллергиков, арендодателей
        </motion.p>
      </div>

      <motion.div
        className={s.container}
        initial={{ y: "100px", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.5 }}
      >
        <KingCards
          img={require("./img/general-cleaning.png")}
          title="Гeнеральная уборка"
          subtitle="Комплексная уборка с удалением жира и грязи"
          text="5-7 часов"
          sizePrice="от 150 ₽/м²"
          btnText="Рассчитать стоимость"
        />
        <KingCards
          img={require("./img/cleaning-after-prenavation.png")}
          title="Уборка после ремонта"
          subtitle="Подготовим  помещение
        к комфортному проживанию"
          text="5-7 часов"
          sizePrice="от 150 ₽/м²"
          btnText="Рассчитать стоимость"
        />
        <KingCards
          img={require("./img/maintenance-cleaning.png")}
          title="Поддерживающая уборка"
          subtitle="Уборка, для поддержания
        чистоты в квартире"
          text="5-7 часов"
          sizePrice="от 80 ₽/м²"
          btnText="Рассчитать стоимость"
        />
        <KingCards
          img={require("./img/Wash-windows-and-panoramas.png")}
          title="Мойка окон и понорам"
          subtitle="За чистыми окнами — грязь 
        не живёт!"
          text="5-7 часов"
          sizePrice="от 500 ₽"
          btnText="Рассчитать стоимость"
        />
        <KingCards
          img={require("./img/Protective-covering.png")}
          title="Защитное покрытие"
          subtitle="Очистка и нанесение 
        защитного слоя полироли"
          text="5-7 часов"
          sizePrice="от 100 ₽/м²"
          btnText="Рассчитать стоимость"
        />
        <KingCards
          img={require("./img/express-cleaning.png")}
          title="Экспресс уборка"
          subtitle="Срочная уборка с выездом
        в течении часа"
          text="5-7 часов"
          sizePrice="от 130 ₽/м²"
          btnText="Рассчитать стоимость"
        />
      </motion.div>
    </section>
  );
};

export default KindCleaning;
