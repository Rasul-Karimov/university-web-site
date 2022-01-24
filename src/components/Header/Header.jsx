import "./header.css";
import logo from "./../../img/logo.png";
import map from "./../../img/map.png";
import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  let [burgerMenu, setBurgerMenu] = useState(false);
  const burgerActive = "active";
  function clickBurger() {
    setBurgerMenu(!burgerMenu);
  }
  return (
    <div className={`header ${burgerMenu ? burgerActive : null}`}>
      <div className="container">
        <div className="header__block">
          <div className="header__logo">
            <a href="">
              <img src={logo} alt="" />
            </a>
          </div>
          <nav className="header__menu menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a target="_blank" href="" className="menu__link">
                  Covid-19
                </a>
              </li>
              <li className="menu__item">
                <a target="_blank" href="" className="menu__link">
                  О нас
                </a>
                <ul className="menu__sublist">
                  <li className="menu__subitem">
                    <a target="_blank" href="" className="menu__sublink">
                      История
                    </a>
                  </li>
                  <li className="menu__subitem">
                    <a href="/administration" className="menu__sublink">
                      Администрация
                    </a>
                  </li>
                  <li className="menu__subitem">
                    <a href="/news" className="menu__sublink">
                      Новости
                    </a>
                  </li>
                  <li className="menu__subitem">
                    <a
                      target="_blank"
                      href="https://www.ksla.kg/ru/o-kgiua/social/"
                      className="menu__sublink"
                    >
                      Виртуальный тур
                    </a>
                  </li>
                </ul>
              </li>

              <li className="menu__item">
                <a target="_blank" href="" className="menu__link">
                  Поступающим
                </a>
                <ul className="menu__sublist">
                  <li className="menu__subitem">
                    <a href="/whywe" className="menu__sublink">
                      Почему мы?
                    </a>
                  </li>
                  <li className="menu__subitem">
                    <a target="_blank" href="" className="menu__sublink">
                      Бакалавр
                    </a>
                  </li>
                  <li className="menu__subitem">
                    <a target="_blank" href="" className="menu__sublink">
                      Колледж
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu__item">
                <a href="/students" className="menu__link">
                  Студентам
                </a>
              </li>
              <li className="menu__item">
                <a target="_blank" href="" className="menu__link">
                  Портал
                </a>
              </li>
              <li className="menu__item">
                <a target="_blank" href="" className="menu__link">
                  Контакты
                </a>
                <ul className="menu__sublist">
                  <li className="menu__subitem">
                    <a target="_blank" href="" className="menu__sublink">
                      Адрес
                    </a>
                  </li>
                  <li className="menu__subitem">
                    <a target="_blank" href="" className="menu__sublink">
                      Ссылка на соц сети
                    </a>
                  </li>
                  <li className="menu__subitem">
                    <a target="_blank" href="" className="menu__sublink">
                      Телеграм группа для род
                    </a>
                  </li>
                  <li className="menu__subitem">
                    <a
                      target="_blank"
                      href="https://2gis.kg/bishkek/firm/70000001040535756?m=74.630391%2C42.854913%2F17.27"
                      className="menu__sublink"
                    >
                      2 гис
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <div onClick={clickBurger} className="header__menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="header__search search">
            <a
              target="_blank"
              href="https://2gis.kg/bishkek/firm/70000001040535756?m=74.630391%2C42.854913%2F17.27"
              className="search__map"
            >
              <img src={map} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
