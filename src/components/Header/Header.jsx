import "./header.css";
import logo from "./../../img/logo.png";
import map from "./../../img/map.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
function Header() {
  let [burgerMenu, setBurgerMenu] = useState(false);
  let [menuVisible, setmenuVisible] = useState(false);
  let [menuVisible2, setmenuVisible2] = useState(false);

  const burgerActive = "_active";
  const menuActive = "_active";
  const menuActive2 = "_active";

  function clickBurger() {
    setBurgerMenu(!burgerMenu);
  }
  function clickMenu() {
    setmenuVisible(!menuVisible);
  }
  function clickMenu2() {
    setmenuVisible2(!menuVisible2);
  }
  return (
    <div className={`header ${burgerMenu ? burgerActive : null}`}>
      <div className="container">
        <div className="header__block">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <nav className="header__menu menu">
            <ul className="menu__list">
              <motion.li
                className="menu__item"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{}}
              >
                <NavLink onClick={clickBurger} to="/" className="menu__link">
                  Главная
                </NavLink>
              </motion.li>
              <motion.li
                className="menu__item"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                }}
              >
                <Link
                  onClick={clickMenu}
                  to=""
                  className={`menu__link ${menuVisible ? menuActive : null}`}
                >
                  О нас
                </Link>
                <ul className="menu__sublist">
                  <li className="menu__subitem">
                    <Link
                      onClick={clickBurger}
                      to="/administration"
                      className="menu__sublink"
                    >
                      Администрация
                    </Link>
                  </li>
                  <li className="menu__subitem">
                    <Link
                      onClick={clickBurger}
                      to="/news"
                      className="menu__sublink"
                    >
                      Новости
                    </Link>
                  </li>
                  <li className="menu__subitem">
                    <a
                      target="_blank"
                      href="https://vokrug.kg/kgua-2.html"
                      className="menu__sublink"
                    >
                      Виртуальный тур
                    </a>
                  </li>
                </ul>
              </motion.li>
              <motion.li
                className="menu__item"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                }}
              >
                <Link
                  onClick={clickMenu2}
                  to=""
                  className={`menu__link ${menuVisible2 ? menuActive2 : null}`}
                >
                  Поступающим
                </Link>
                <ul className="menu__sublist">
                  <li className="menu__subitem">
                    <Link
                      to="/whywe"
                      className="menu__sublink"
                      onClick={clickBurger}
                    >
                      Почему мы?
                    </Link>
                  </li>
                  <li className="menu__subitem">
                    <Link
                      onClick={clickBurger}
                      to="/department"
                      className="menu__sublink"
                    >
                      Бакалавр
                    </Link>
                  </li>
                  <li className="menu__subitem">
                    <Link
                      onClick={clickBurger}
                      to="/collage"
                      className="menu__sublink"
                    >
                      Колледж
                    </Link>
                  </li>
                </ul>
              </motion.li>
              <motion.li
                className="menu__item"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.6,
                }}
              >
                <NavLink
                  to="/students"
                  className={`menu__link ${menuVisible ? menuActive : null}`}
                  onClick={clickBurger}
                >
                  Студентам
                </NavLink>
              </motion.li>
              <motion.li
                className="menu__item"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.8,
                }}
              >
                <a
                  target="_blank"
                  href="http://avn.ksla.kg/"
                  className="menu__link"
                >
                  Портал
                </a>
              </motion.li>
              <motion.li
                className="menu__item"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 1,
                }}
              >
                <NavLink
                  to="/contacts"
                  className={`menu__link ${menuVisible ? menuActive : null}`}
                  onClick={clickBurger}
                >
                  Контакты
                </NavLink>
              </motion.li>
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
