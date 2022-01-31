import React from "react";
import "./Contacts.css";
import fon from "../../../img/Departfon.png";
import { ReactComponent as Whatsapp } from "../../../img/whatsappSvg.svg";
import { ReactComponent as Telegram } from "../../../img/tgSvg.svg";
import { ReactComponent as TicTok } from "../../../img/ticTokSvg.svg";
import { ReactComponent as Insta } from "../../../img/instaSbg.svg";
const Contacts = () => {
  return (
    <div className="contacts">
      <img className="contacts__fon" src={fon} alt="" />
      <div className="contacts__title title">Контакты</div>
      <div className="contacts__container container">
        <div className="contacts__adres">
          <span>Адрес: </span> Кыргызская Республика г.Бишкек ул.Горького, 18
        </div>
        <a href="tel:+996700406730" className="contacts__phone">
          <span>Телефон:</span>+996700406730
        </a>
        <div className="contacts__messengers messengers-contacts">
          <div className="messengers-contacts__title">
            Мы в социальных сетях:
          </div>
          <div className="messengers-contacts__items">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=996700406730"
            >
              <Whatsapp className="icon-contacts" />
            </a>
            <a target="_blank" href="https://vm.tiktok.com/ZSe2VsJP6/">
              <TicTok className="icon-contacts" />
            </a>
            <a target="_blank" href="">
              <Telegram className="icon-contacts" />
            </a>
            <a
              target="_blank"
              href="https://instagram.com/itacademy_ksla?utm_medium=copy_link "
            >
              <Insta className="icon-contacts" />
            </a>
          </div>
        </div>
        <div className="contact__map">
          <div className="contact__map-img">
            {/* <img src={map} alt="" /> */}
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A1a007b0d6dc2685b5aeefa86d31475179ce61dcac6678e246257d9697e678f71&amp;source=constructor"
              width="816"
              height="720"
              frameborder="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
