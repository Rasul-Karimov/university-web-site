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
                  <span> Высшая IT-школа </span>предоставляет возможности
                </li>
                <li>
                  <span> Высшая IT-школа </span>самые высококвалифицированные
                  преподаватели
                </li>
                <li>
                  <span> Высшая IT-школа </span> дает возможность обучиться и
                  юридическим предметам
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
                  <span> Высшая IT-школа </span>дает знания на востребованную
                  профессию
                </li>
                <li>
                  <span> Высшая IT-школа </span>имеет отличную инфраструктуру
                </li>
                <li>
                  <span> Высшая IT-школа </span>учит правильно ставить цели
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
            <div>
              <p className="questions-whyWe__question">
                Какой пороговый балл при поступлении?
              </p>
              <p className="questions-whyWe__answer">
                Пороговый балл для поступления в IT школу определяет
                Министерство образования КР
              </p>
            </div>
            <div>
              <p className="questions-whyWe__question">
                Какие документы необходимы при поступлении?
              </p>
              <p className="questions-whyWe__answer">
                Заявление установленного образца Сертификат ОРТ ( оригинал )
                Документ об образовании ( оригинал ) Документ удостоверяющий
                личность и гражданство ( оригинал копия ) Приписное
                свидетельство или военный билет ( для призывников ) 6 фотографий
                3x4
              </p>
            </div>
            <div>
              <p className="questions-whyWe__question">
                Возможно ли выбрать заочную форму обучения?
              </p>
              <p className="questions-whyWe__answer">
                Нет, только очная форма обучения
              </p>
            </div>
            <div>
              <p className="questions-whyWe__question">
                Куда и когда приносить документы?
              </p>
              <p className="questions-whyWe__answer">
                понедельник - суббота – с 8.30 до 17:00 часов; Адрес: Бишкек,
                пр. Чуй 180А (“Юридическая академия”)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWe;
