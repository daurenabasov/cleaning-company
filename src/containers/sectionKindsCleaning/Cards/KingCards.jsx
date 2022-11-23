import React from "react";
import s from "./KindCards.module.css";

const KingCards = (props) => {
  return (
    <div>
      <div className={s.card}>
        <div>
          <img src={props.img} alt="" />
        </div>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        <span>
          Время работы: <strong>{props.text}</strong>
        </span>
        <div className={s.btns}>
          <button className={s.top__btn}>{props.sizePrice}</button>
          <button className={s.bottom__btn}>{props.btnText}</button>
        </div>
      </div>
    </div>
  );
};

export default KingCards;
