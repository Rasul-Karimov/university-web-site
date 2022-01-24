import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__container container">
          <div className="footer__items">
            <div className="footer__item">
              <div className="footer__title">О нас</div>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="" className="footer__link">
                    История
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Администрация
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Новости
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    target="_blank"
                    href="https://www.ksla.kg/ru/o-kgiua/social/"
                    className="footer__link"
                  >
                    Виртуальный тур
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__item">
              <div className="footer__title">Поступающим</div>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Бакалавр
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Колледж
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    FAQ
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Обьявление
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <div className="footer__title">Контакты</div>
              <ul className="footer__list">
                <li className="footer__item">
                  <a href="" className="footer__link">
                    0707676767
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Почта
                  </a>
                </li>
                <li className="footer__item">
                  <a href="" className="footer__link">
                    Горкий 18а
                  </a>
                </li>
              </ul>
              <h3 className="footer__title footer-messengers">
                Мы в соц сетях
              </h3>
            </div>
          </div>
          <form action="#" className="footer__form form-footer">
            <div className="form-footer__title">Обратная связь</div>
            <div className="form-footer__input-name">
              <input type="text" placeholder="ФИО" />
            </div>
            <div className="form-footer__input-tel">
              <input type="tel" placeholder="Телефона" />
            </div>
            <button className="form-footer__btn" type="submit">
              Отправить
            </button>
          </form>
        </div>
        <div className="footer__copyright">
          Все права защищены © 2002 - 2022 - Кыргызский Государственный
          Юридический Университет
        </div>
      </div>
    </div>
  );
}

export default Footer;
