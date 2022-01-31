import "./welcome.css";
import mainImg from "../../../../img/main.png";
import { ReactComponent as Arrow } from "../../../../img/arrowSvg.svg";
import practice from "../../../../img/practice.jpg";
import { motion } from "framer-motion";
import Button from "../button/Button";
import Buttons from "../../Buttons/Buttons";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__container container">
        <div className="welcome__block">
          <div className="welcome__content">
            <h2 className="welcome__title">
              Добро Пожаловать, в Высшую IT Школу!
            </h2>
            <p className="welcome__text">
              В Департаменте Цифровых Технологии вы можете изучать темы, которые
              вас интересуют, находить людей, которые вдохновляют и бросают вам
              вызов, и делать открытия, которые меняют вашу жизнь и мир.
            </p>

            <Buttons
              href="https://vokrug.kg/kgua-2.html"
              arrow={true}
              title="подробнее"
            />
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
