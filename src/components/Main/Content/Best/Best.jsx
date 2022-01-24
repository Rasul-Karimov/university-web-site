import "./Best.css";
import girl1 from "../../../../img/girl1.png";
import asil from "../../../../img/asilbek.png";
import aiza from "../../../../img/aiza.png";
import jyldyz from "../../../../img/jyldyz.png";

const Best = () => {
  return (
    <div className="best">
      <div className="best__container container">
        <div className="best__title title">Лучшие студенты</div>
        <div className="best__items-block swiper">
          <div className="best__items swiper-wrapper">
            <div className="best__item swiper-slide">
              <div className="best__img">
                <img src={girl1} alt="" />
              </div>
              <p className="title">Жылдыз</p>
            </div>
            <div className="best__item swiper-slide">
              <div className="best__img">
                <img src={asil} alt="" />
              </div>
              <p className="title">Асылбек</p>
            </div>
            <div className="best__item swiper-slide">
              <div className="best__img">
                <img src={jyldyz} alt="" />
              </div>
              <p className="title">Нурайым</p>
            </div>
            <div className="best__item swiper-slide">
              <div className="best__img">
                <img src={aiza} alt="" />
              </div>
              <p className="title">Аиза</p>
            </div>
            <div className="best__item swiper-slide">
              <div className="best__img">
                <img src={girl1} alt="" />
              </div>
              <p className="title">Жылдыз</p>
            </div>
            <div className="best__item swiper-slide">
              <div className="best__img">
                <img src={asil} alt="" />
              </div>
              <p className="title">Асылбек</p>
            </div>
            <div className="best__item swiper-slide">
              <div className="best__img">
                <img src={jyldyz} alt="" />
              </div>
              <p className="title">Нурайым</p>
            </div>
            <div className="best__item swiper-slide">
              <div className="best__img">
                <img src={aiza} alt="" />
              </div>
              <p className="title">Аиза</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best;
