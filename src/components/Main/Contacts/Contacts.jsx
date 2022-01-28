import React from "react";
import "./Contacts.css";
import fon from "../../../img/Departfon.png";
import whatsapp from "../../../img/whats-app.png";
import facebook from "../../../img/facebook.png";
import telegram from "../../../img/telegramm.png";
import ticTok from "../../../img/tic-tok.png";
import incta from "../../../img/instagtram.png";
import map from "../../../img/map-contacts.png";

const Contacts = () => {
  return (
    <div className="contacts">
      <img className="contacts__fon" src={fon} alt="" />
      <div className="contacts__title title">Контакты</div>
      <div className="contacts__container container">
        <div className="contacts__adres">
          <span>Адрес: </span> Кыргызская Республика г. Бишкек ул. Горького, 18
        </div>
        <div className="contacts__phone">
          <span>Телефон:</span>+996700406730
        </div>
        <div className="contacts__messengers messengers-contacts">
          <div className="messengers-contacts__title">
            Мы в социальных сетях:
          </div>
          <div className="messengers-contacts__items">
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={whatsapp} alt="" />
            </a>
            <a href="">
              <img src={ticTok} alt="" />
            </a>
            <a href="">
              <img src={telegram} alt="" />
            </a>
            <a href="">
              <img src={incta} alt="" />
            </a>
          </div>
        </div>
        <div className="contact__map">
          <div className="contact__map-img">
            <img src={map} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
