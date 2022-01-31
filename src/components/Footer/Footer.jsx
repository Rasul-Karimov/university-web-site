import React from "react";
import "./footer.css";
import { ReactComponent as Inst } from "../../img/instaSbg.svg";
import { ReactComponent as Telegram } from "../../img/tgSvg.svg";
import { ReactComponent as Whatsapp } from "../../img/whatsappSvg.svg";
import { ReactComponent as TicToc } from "../../img/ticTokSvg.svg";

import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__container container">
          <div className="footer__items">
            <div className="footer__item">
              <div className="footer__title">О нас</div>
              <ul className="footer__list">
                <li className="footer__item"></li>
                <li className="footer__item">
                  <Link to="/administration" className="footer__link">
                    Администрация
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/news" className="footer__link">
                    Новости
                  </Link>
                </li>
                <li className="footer__item">
                  <a
                    target="_blank"
                    href="https://vokrug.kg/kgua-2.html"
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
                  <Link to="/department" className="footer__link">
                    Бакалавр
                  </Link>
                </li>
                <li className="footer__item">
                  <Link to="/collage" className="footer__link">
                    Колледж
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__item">
              <div className="footer__title">Контакты</div>
              <ul className="footer__list">
                <li className="footer__item">
                  <Link to="" className="footer__link">
                    Почта
                  </Link>
                </li>
                <li className="footer__item">
                  <a
                    target="_blank"
                    href="https://2gis.kg/bishkek/firm/70000001040535756?m=74.630391%2C42.854913%2F17.27"
                    className="footer__link"
                  >
                    ул.Горького 18
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    href="tel:+996700406730"
                    className="footer__link footer__number"
                  >
                    0700-40-67-30
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__messengers">
            <h3>Портал</h3>
            <div>
              <a
                href="https://instagram.com/itacademy_ksla?utm_medium=copy_link"
                target="_blank"
              >
                <Inst className="icon-footer" />
              </a>
              <a href="https://t.me/itksla" target="_blank">
                <Telegram className="icon-footer" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=996700406730"
                target="_blank"
              >
                <Whatsapp className="icon-footer footer-whatsapp" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=996700406730"
                target="_blank"
              >
                <TicToc className="icon-footer" />
              </a>
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
          Все права защищены © 2022 - Лаборатория Цифровых Решений
        </div>
      </div>
    </div>
  );
}

export default Footer;
