import "./welcome.css";
import mainImg from "../../../../img/main.png";
import arrow from "../../../../img/arrow.png";
import practice from "../../../../img/practice.jpg";

import Button from "../button/Button";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__container container">
        <div className="welcome__block">
          <div className="welcome__content">
            <h2 className="welcome__title">
              Добро Пожаловать, в Высшую IT Щколу!
            </h2>
            <p className="welcome__text">
              В Департаменте Цифровых Технологии вы можете изучать темы, которые
              вас интересуют, находить людей, которые вдохновляют и бросают вам
              вызов, и делать открытия, которые меняют вашу жизнь и мир.
            </p>
            <a
              target="_blank"
              href="https://www.ksla.kg/ru/o-kgiua/social/"
              className="button"
            >
              Подробнее
              <img src={arrow} alt="" />
            </a>
          </div>
          <div className="welcome__img">
            <img src={mainImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
