import "./header.css";
import logo from "./../../img/logo.png";
import map from "./../../img/map.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
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
                <NavLink to="/" className="menu__link">
                  Главная
                </NavLink>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  О нас
                </a>
                <ul className="menu__sublist">
                  <li className="menu__subitem">
                    <Link to="/administration" className="menu__sublink">
                      Администрация
                    </Link>
                  </li>
                  <li className="menu__subitem">
                    <Link to="/news" className="menu__sublink">
                      Новости
                    </Link>
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
                <a href="" className="menu__link">
                  Поступающим
                </a>
                <ul className="menu__sublist">
                  <li className="menu__subitem">
                    <Link to="/whywe" className="menu__sublink">
                      Почему мы?
                    </Link>
                  </li>
                  <li className="menu__subitem">
                    <Link to="/department" className="menu__sublink">
                      Бакалавр
                    </Link>
                  </li>
                  <li className="menu__subitem">
                    <Link to="/collage" className="menu__sublink">
                      Колледж
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu__item">
                <NavLink to="/students" className="menu__link">
                  Студентам
                </NavLink>
              </li>
              <li className="menu__item">
                <a
                  target="_blank"
                  href="http://avn.ksla.kg/"
                  className="menu__link"
                >
                  Портал
                </a>
              </li>
              <li className="menu__item">
                <NavLink to="/contacts" className="menu__link">
                  Контакты
                </NavLink>
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
