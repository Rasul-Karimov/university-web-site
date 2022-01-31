import "./info.css";
import background from "../../../../img/background.png";
import Buttons from "../../Buttons/Buttons";
import { ReactComponent as Arrow } from "../../../../img/arrowSvg.svg";
import { Link } from "react-router-dom";
const Info = () => {
  return (
    <div className="information">
      <div className="information__container container">
        <img className="back" src={background} alt="" />
        <div className="information__title title">Высшая IT Школа</div>
        <div className="information__subtitle">
          Место для обучения, открытий, инноваций, самовыражения и общения
        </div>
        <div className="information__items items-info">
          <div className="items-info__item">
            <div className="items-info__title">Был открыт</div>
            <div className="items-info__text">2017</div>
          </div>
          <div className="items-info__item">
            <div className="items-info__title">Студенты</div>
            <div className="items-info__text">1000+</div>
          </div>
          <div className="items-info__item">
            <div className="items-info__title">Направление </div>
            <div className="items-info__text">4</div>
          </div>
        </div>
        <Buttons
          class="information__button"
          to="/about"
          title="подробнее"
          arrow={true}
        />
      </div>
    </div>
  );
};

export default Info;
