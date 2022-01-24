import React from "react";
import "./WhyWe.css";
import fon from "../../../img/Departfon.png";
import whyweFon from "../../../img/whywephone.png";
import whywe1 from "../../../img/whywe1.png";
import whywe2 from "../../../img/whywe2.png";

const WhyWe = () => {
  return (
    <div className="whyWe">
      <div className="whyWe__title title ">Почему мы?</div>
      <img src={fon} alt="" className="whyWe__fon" />
      <div className="whyWe__container ">
        <div className="whyWe__items container">
          <div className="whyWe__item item-whyWe item-whywe1">
            <div className="item-whyWe__content">
              <ul>
                <li>
                  <span> Вышная IT-школа </span>предоставляет возможности
                </li>
                <li>
                  <span> Вышная IT-школа </span>дает фундаментальные знания
                </li>
                <li>
                  <span> Вышная IT-школа </span>дает фундаментальные знания
                </li>
              </ul>
            </div>
            <div className="item-whyWe__img">
              <img src={whywe1} alt="" />
            </div>
          </div>
          <div className="whyWe__item item-whyWe item-whywe2">
            <div className="item-whyWe__content">
              <ul>
                <li>
                  <span> Вышная IT-школа </span>предоставляет возможности
                </li>
                <li>
                  <span> Вышная IT-школа </span>дает фундаментальные знания
                </li>
                <li>
                  <span> Вышная IT-школа </span>дает фундаментальные знания
                </li>
              </ul>
            </div>
            <div className="item-whyWe__img">
              <img src={whywe2} alt="" />
            </div>
          </div>
        </div>
        <div className="whyWe__background">
          <img src={whyweFon} alt="" />
        </div>
        <div className="whyWe__questions container questions-whyWe">
          <h3 className="questions-whyWe__title title">
            Часто задаваемые вопросы
          </h3>
          <div className="questions-whyWe__blocks">
            <div className="questions-whyWe__block">
              <p className="questions-whyWe__question">
                Можно ли подать документы по почте?
              </p>
              <p className="questions-whyWe__answer">Нет</p>
              <p className="questions-whyWe__question">
                Какие документ необходимо при поступлении?
              </p>
              <p className="questions-whyWe__answer">
                Заявление установленного образца Сертификат ОРТ ( оригинал )
                Документ об образовании ( оригинал ) Документ удостоверяющий
                личность и гражданство ( оригинал копия ) Приписное
                свидетельство или военный билет ( для призывников ) 6 фотографий
                3x4
              </p>
            </div>
            <div className="questions-whyWe__block">
              <p className="questions-whyWe__question">
                Возможно ли выбрать заочную форму обучения?
              </p>
              <p className="questions-whyWe__answer">Нет</p>
              <p className="questions-whyWe__question">
                Проводятся ли ступительные экзамены в вашем коллледже?
              </p>
              <p className="questions-whyWe__answer">Нет, не проводятся</p>
              <p className="questions-whyWe__question">
                Как узнать поступил(а) я или нет?
              </p>
              <p className="questions-whyWe__answer">Не важно</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
