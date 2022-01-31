import "./Best.css";
import girl1 from "../../../../img/girl1.png";
import asil from "../../../../img/asilbek.png";
import aiza from "../../../../img/aiza.png";
import jyldyz from "../../../../img/jyldyz.png";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Best = () => {
  return (
    <div className="best">
      <div className="best__container container">
        <div className="best__title title">Лучшие студенты</div>
        <div className="best__items-block">
          <div className="best__items">
            <Swiper
              autoHeight={false}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              speed={1000}
              slidesPerView={4}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                780: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
              }}
            >
              <SwiperSlide>
                <div className="best__item">
                  <div className="best__img">
                    <img src={girl1} alt="" />
                  </div>
                  <p className="title">Жылдыз</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="best__item">
                  <div className="best__img">
                    <img src={asil} alt="" />
                  </div>
                  <p className="title">Асылбек</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="best__item">
                  <div className="best__img">
                    <img src={aiza} alt="" />
                  </div>
                  <p className="title">Аиза</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="best__item">
                  <div className="best__img">
                    <img src={jyldyz} alt="" />
                  </div>
                  <p className="title">Жылдыз</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="best__item">
                  <div className="best__img">
                    <img src={girl1} alt="" />
                  </div>
                  <p className="title">Жылдыз</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="best__item">
                  <div className="best__img">
                    <img src={asil} alt="" />
                  </div>
                  <p className="title">Асылбек</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="best__item">
                  <div className="best__img">
                    <img src={aiza} alt="" />
                  </div>
                  <p className="title">Аиза</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="best__item">
                  <div className="best__img">
                    <img src={jyldyz} alt="" />
                  </div>
                  <p className="title">Жылдыз</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Best;
