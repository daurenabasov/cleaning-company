import React from "react";
import s from "./Advantages.module.css";
import { motion } from "framer-motion";
const Advantages = () => {
  return (
    <motion.section
      id={s.advantages}
      initial={"hidden"}
      whileInView="visible"
      viewport={{ amount: 0.2 }}
    >
      <div className={s.titles}>
        <motion.button
          initial={{ y: "100px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          А вы знали?
        </motion.button>
        <motion.span
          initial={{ y: "100px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          70% клининговых компаний в СПБ, зачастую подвергают <br /> своих
          клиентов рискам и дискомфорту.
        </motion.span>
        <motion.p
          initial={{ y: "100px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          whileInView={{ opacity: 1, y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          И вот некоторые факты, с которыми вы можете столкнуться,
          <br /> обращаясь в другие компании:
        </motion.p>
      </div>
      <div className={s.img__container}>
        <motion.div
          className={s.first__img}
          initial={{ y: "100px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileInView={{ opacity: 1, y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1>Чёрная касса</h1>
          <p>
            Клининговые компании завлекают клиентов обманчиво низкой стоимостью.
            Менеджеры умалчивают стоимость доп. работ, а на объекте, когда
            клиенту сложно отказать, насчитывают стоимость выше заявленной.
          </p>
        </motion.div>
        <motion.div
          className={s.second__img}
          initial={{ y: "100px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          whileInView={{ opacity: 1, y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1>Порча имущества</h1>
          <p>
            Неправильно подобранные клинерами моющие средства могут повредить
            поверхность мебели и бытовых приборов. Неправильная влажная уборка
            может испортить новый паркет или повредить проводку.
          </p>
        </motion.div>
        <motion.div
          className={s.third__img}
          initial={{ y: "100px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 1.1 }}
          whileInView={{ opacity: 1, y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1>Имитация деятельности</h1>
          <p>
            Клинеры часто выполняют свою работу недобросовестно. Не убирают
            труднодоступные места и экономят моющее средство. В результате Вы
            получаете некачественную уборку и испорченное настроение.
          </p>
        </motion.div>
        <motion.div
          className={s.four__img}
          initial={{ y: "100px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 1.3 }}
          whileInView={{ opacity: 1, y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div>
            <h1>Безответственность персонала</h1>
            <p>
              Клинеры приезжают раньше/позже назначенного времени, что
              доставляет дискомфорт хозяину. Не соблюдают инструктаж владельца
              квартиры и нарушают бытовой порядок.
            </p>
          </div>
        </motion.div>
        <motion.article
          initial={{ y: "100px", opacity: 0 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          whileInView={{ opacity: 1, y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1>Друзья, Будьте внимательны!</h1>
          <p>
            При выборе клинговой компании и заказе уборки, внимательно читайте
            договор на оказание услуг
          </p>
          <a href="">Посмотреть договор</a>
        </motion.article>
      </div>
    </motion.section>
  );
};

export default Advantages;
