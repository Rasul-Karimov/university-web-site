import "./Best.css";
import activist1 from "../../../../img/активисты/image1.png";
import activist2 from "../../../../img/активисты/image2.png";
import activist3 from "../../../../img/активисты/image3.png";
import activist4 from "../../../../img/активисты/image4.png";
import activist5 from "../../../../img/активисты/image5.png";
import activist6 from "../../../../img/активисты/image6.png";
import activist7 from "../../../../img/активисты/image7.png";
import activist8 from "../../../../img/активисты/image8.png";
import activist9 from "../../../../img/активисты/image10.png";
import activist10 from "../../../../img/активисты/image11.png";

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
                    <img src={activist1} alt="" />
                  </div>
                  <p className="title">Ырысбек</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="best__item">
                  <div className="best__img">
                    <img src={activist2} alt="" />
                  </div>
                  <p className="title">Айжан</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="best__item">
                  <div className="best__img">
                    <img src={activist3} alt="" />
                  </div>
                  <p className="title">Асан</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="best__item">
                  <div className="best__img">
                    <img src={activist4} alt="" />
                  </div>
                  <p className="title">Бегимай</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="best__item">
                  <div className="best__img">
                    <img src={activist5} alt="" />
                  </div>
                  <p className="title">Сыймык</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="best__item">
                  <div className="best__img">
                    <img src={activist6} alt="" />
                  </div>
                  <p className="title">Эльдар</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="best__item">
                  <div className="best__img">
                    <img src={activist7} alt="" />
                  </div>
                  <p className="title">Расулбек</p>
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
