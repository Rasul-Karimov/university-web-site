import React from "react";
import "./About.css";
import about2 from "../../../img/about1.png";
import about1 from "../../../img/about2.png";
import background from "../../../img/background.png";

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__items container">
          <div className="about__item item-about__content">
            <div className="item-about__content">
              <h3 className="item-about__title title">
                Информация о Высшей IT- школе{" "}
              </h3>
              <p className="item-about__text">
                Высшая IT-школа сегодня готовит лучших: программистов,
                специалистов в области информационной безопасности и
                информационных технологий, которые смогут предоставлять услуги
                по автоматизации управления и учета предприятий, используя
                лучшие IT решения.
              </p>
            </div>
          </div>
          <div className="about__item">
            <div className="item-about__img">
              <img src={about1} alt="" />
            </div>
          </div>
        </div>
        <div className="about__info-text">
          <img src={background} alt="" />
          <p className="container">
            Миссия Высшей IT-школы: <br /> Подготовка высококвалифицированных
            специалистов, способных обеспечить направления стратегического
            развития Кыргызской Республики – по модернизации экономики и
            развитию современных информационных технологий во всех сферах
            хозяйственной деятельности.
          </p>
        </div>
        <div className="about__blocks container">
          <div className="about-block block-about__img">
            <div className="block-about__img">
              <img src={about2} alt="" />
            </div>
          </div>
          <div className="about-block block-about__text">
            <p>
              В Высшей IT-школе отличная материально-техническая база –
              компьютерные классы, оснащенные современными ПК и проекторами,
              учебные аудитории, спортивный зал, стадион, футбольное поле,
              комфортная столовая.
            </p>
          </div>
        </div>
        <div className="about__specialties container">
          <h3 className="about__title title">
            В настоящее время в Высшей IT-школе функционируют:
          </h3>
          <div className="about__specialties-items ">
            <div className="item-about-specialties">
              <div className="item-about-specialties__title title">
                Департамент цифровых технологий
              </div>
              <p className="item-about-specialties__text">
                в котором студенты могут обучаться, с присвоением академической
                степени бакалавр по направлениям: 710300 Прикладная информатика;
                710200 Информационные системы и технологии; 590100
                Информационная безопасность; 710500 Интернет-технологии и
                управление; Место для обучения, открытий, инноваций,
                самовыражения и общения
              </p>
            </div>
            <div className="item-about-specialties">
              <div className="item-about-specialties__title title">
                IT - колледж
              </div>
              <p className="item-about-specialties__text">
                осуществляет подготовку среднего профессионального образования
                базового уровня по специальности 230701 Прикладная информатика;
                100203 Информационная безопасность автоматизированных систем.
                Место для обучения, открытий, инноваций, самовыражения и общения
              </p>
            </div>
          </div>
        </div>
        <div className="about__text container">
          <p>
            Важным акцентом во всем образовательном процессе в Высшей IT-школе
            является правовая направленность. Выпускники смогут не только
            защитить свои права в интернет среде, но и урегулировать отношения,
            связанные с разработкой, владением, продажей информационных
            технологий. Задачей Высшей IT-школе является формирование у
            обучающихся непримиримого отношения к преступлениям и
            правонарушениям в области информационных технологий, воспитание в
            духе строгого соблюдения закона и уважения к государственным
            символам.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
