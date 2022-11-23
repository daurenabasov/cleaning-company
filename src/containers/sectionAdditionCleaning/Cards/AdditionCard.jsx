import React from "react";
import s from "./AdditionCard.module.css";

const AdditionCard = (props) => {
  return (
    <div className={s.card}>
      <div className={s.card__img}>
        <img src={props.img} alt="" />
      </div>
      <div className={s.card__titles}>
        <h5>{props.titles}</h5>
        <span>{props.price}</span>
      </div>
    </div>
  );
};

export default AdditionCard;
