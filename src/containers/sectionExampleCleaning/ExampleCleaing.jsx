import React, { useState } from "react";
import s from "./ExampleCleaing.module.css";

const ExampleCleaing = () => {
  const [value, setValue] = useState(1);

  function changeValue(e) {
    setValue(e.target.value);
  }

  return (
    <section id={s.exampe}>
      <div className={s.titles}>
        <h1>Посмотрите наглядно как мы делаем уборку</h1>
        <p>Так выглядит уборка в глазах наших клинеров</p>
        <div className={s.nav__container}>
          <button
            type="button"
            value="1"
            onChange={changeValue}
            checked={value == "1" ? true : false}
          >
            Cпальная комната
          </button>
          <button
            type="button"
            value="2"
            onChange={changeValue}
            checked={value == "2" ? true : false}
          >
            Кухня
          </button>
          <button
            value="3"
            type="button"
            onChange={changeValue}
            checked={value == "3" ? true : false}
          >
            Ванная
          </button>
          <button
            value="4"
            type="button"
            onChange={changeValue}
            checked={value == "4" ? true : false}
          >
            Прихожая
          </button>
        </div>
        <div>
          {value == "4" ? (
            <>
              <img
                src="https://i.pinimg.com/236x/67/ef/1c/67ef1c71790850ddf995134cdbc97763.jpg"
                alt="asdvdav"
              />
            </>
          ) : (
            <>
              <img
                src="https://i.pinimg.com/564x/dc/a0/8d/dca08d1eeb4d17f20c76b321da9b9a2a.jpg"
                alt="advdav"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExampleCleaing;
