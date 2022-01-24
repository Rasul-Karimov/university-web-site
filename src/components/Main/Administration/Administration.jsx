import React from "react";
import "./Administration.css";
import director from "../../../img/director.png";
import teacher1 from "../../../img/teacher1.png";
import teacher2 from "../../../img/teacher2.png";
import teacher3 from "../../../img/teacher3.png";
import fon from "../../../img/Departfon.png";

const Administration = () => {
  return (
    <div className="administration">
      <img className="administration__fon" src={fon} alt="" />
      <div className="administration__title title">Администрация</div>

      <div className="administration__container container">
        <div className="administration__items">
          <div className="administration__item item-administration item-administration1">
            <div className="item-administration__content">
              <div className="item-administration__name">
                <span>Директор </span>
                <p>Джакшылыкова Гулкайыр Джакшылыковна</p>
              </div>
              <div className="item-administration__text">
                <h3>Уважаемые родители! Дорогие абитуриенты!</h3>
                <p>
                  Путь к професси ональной карьере начинается с выбора высшего
                  учебного заведения. Этот выбор непростой и очень
                  ответственный, поскольку он определяет направление дальнейшего
                  жизненного пути. Приглашаю Вас в Высшую IT- школу
                </p>
              </div>
            </div>
            <div className="item-administration__img">
              <img src={director} alt="" />
            </div>
          </div>
          <div className="administration__item item-administration item-administration2">
            <div className="item-administration__content">
              <div className="item-administration__name">
                <span>Заместитель директора </span>
                <p>Боталиева Каныкей Мирбековна</p>
              </div>
              <div className="item-administration__text">
                <p>
                  Преподавание знакомит меня с миром разных наций, культур и
                  самых разнообразных личностей. Это расширило мое
                  социологическое понимание за счет изучения собственного опыта
                  моих учеников. Я часто задаюсь вопросом, почему мои коллеги
                  любят эту профессию так же сильно, как и я, поэтому этот блог
                  является свидетельством их мыслей и чувств.
                </p>
              </div>
            </div>
            <div className="item-administration__img">
              <img src={teacher1} alt="" />
            </div>
          </div>

          <div className="administration__item item-administration item-administration3">
            <div className="item-administration__content">
              <div className="item-administration__name">
                <span>Ведущий специалист</span>
                <p>Омуркулова Саламат Омуркуловна</p>
              </div>
              <div className="item-administration__text">
                <p>
                  Я люблю преподавать, потому что каждый день мы меняем чью-то
                  жизнь, что выходит далеко за рамки знаний. Мы вдохновляем,
                  поддерживаем, наставляем и получаем возможность открывать и
                  делиться некоторыми из лучших сторон себя как людей ».
                </p>
              </div>
            </div>
            <div className="item-administration__img">
              <img src={teacher2} alt="" />
            </div>
          </div>
          <div className="administration__item item-administration item-administration4">
            <div className="item-administration__content">
              <div className="item-administration__name">
                <span>Ведущий специалист IT- Колледжа</span>
                <p>Джакшылыкова Гулкайыр Джакшылыковна</p>
              </div>
              <div className="item-administration__text">
                <h3>Уважаемые родители! Дорогие абитуриенты!</h3>
                <p>
                  Путь к професси ональной карьере начинается с выбора высшего
                  учебного заведения. Этот выбор непростой и очень
                  ответственный, поскольку он определяет направление дальнейшего
                  жизненного пути. Приглашаю Вас в Высшую IT- школу
                </p>
              </div>
            </div>
            <div className="item-administration__img">
              <img src={teacher3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administration;
