import React from "react";
import "./Activists.css";
import fon from "../../../img/Departfon.png";
import image from "../../../img/activists.png";
import activist1 from "../../../img/active1.png";
import activist2 from "../../../img/active2.png";
import activist3 from "../../../img/active3.png";
import activist4 from "../../../img/active4.png";
import activist5 from "../../../img/active5.png";
import activist6 from "../../../img/active6.png";
import activist7 from "../../../img/активисты/image11.png";
import activist8 from "../../../img/активисты/image1.png";
import activist9 from "../../../img/активисты/image2.png";
import activist10 from "../../../img/активисты/image3.png";
import activist11 from "../../../img/активисты/image4.png";
import activist12 from "../../../img/активисты/image5.png";
import activist13 from "../../../img/активисты/image6.png";
import activist14 from "../../../img/активисты/image7.png";
import activist15 from "../../../img/активисты/image8.png";
import activist16 from "../../../img/активисты/image9.png";
import activist17 from "../../../img/активисты/image10.png";

import Active from "./Active/Active";

const Activists = () => {
  return (
    <div className="activists">
      <div className="activists__title title">Студенты</div>
      <img src={fon} alt="" className="activists__fon" />
      <div className="activists__container container">
        <div className="activists__block">
          <div className="activists__block-text">
            Студенческий совет (студсовет) – орган студенческого самоуправления,
            а также единица проявления студенческой общественной деятельности,
            направленной на ликвидацию проблем, касающихся студенческой жизни и
            их деятельности. Студенты всегда были мощной самостоятельной
            движущей силой, если обращаться к истории, то не редки случаи именно
            студенческих протестов, которые приводили к изменениям в тех или
            иных областях.
          </div>
          <div className="activists__block-img">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="activists__team team-activists">
          <div className="team-activists__title title">Команда</div>
          <div className="team-activists__items">
            <Active
              img={activist1}
              name="Абдулалиев Алишер"
              motto="Председатель студенческого совета ДЦТ"
            />
            <Active
              img={activist2}
              name="Айткулов Эмир "
              motto="Председатель студенческого совета ДЦТ"
            />
            <Active
              img={activist3}
              name="Джаконова Нуржана"
              motto="Заведующая культурно-массовым секторoм"
            />
            <Active
              img={activist4}
              name="Кылычбек уулу Бекжан"
              motto="Заведующий  информационным сектором"
            />
            <Active
              img={activist5}
              name="Асанбекова Эльнура"
              motto="Председатель студенческого совета IT- колледжа"
            />
            <Active
              img={activist6}
              name="Мурсалиева Перизат"
              motto="Заместитель председателя IT- колледжа"
            />
          </div>
        </div>
        <div className="activists__items">
          <div className="activists__items-title title">
            Активисты Высшей IT Школы
          </div>
          <div className="activists__items-text">
            «Активисты» – редко встречаемый тип личности. Их на Земле менее 1%.
            Несмотря на это, они оставляют яркий след в жизнях других людей.
            Наделенные врожденным чувством идеализма, они, в отличие от иных
            идеалистов, решительны и целеустремленны. Они не способны лениво
            предаваться мечтам. Их удел – пусть и медленно, но верно двигаться к
            своей цели.
          </div>
          <div className="team-activists__items">
            <Active
              img={activist7}
              name="Жумагулов Асылбек"
              motto="студент 2 курса"
            />
            <Active
              img={activist8}
              name="Жолойбеков Рысбек "
              motto="Заведующий дисциплинированного сектора"
            />
            <Active
              img={activist9}
              name="Ормонова Айжан"
              motto="студентка 3 курса колледжа"
            />
            <Active
              img={activist10}
              name="Муратазиев Асан"
              motto="студент 3 курса"
            />
            <Active
              img={activist11}
              name="Алмазбекова Бегимай"
              motto="студентка 3 курса"
            />
            <Active
              img={activist12}
              name="Зайыров Данияр"
              motto="студент 2 курса колледжа"
            />
            <Active
              img={activist13}
              name="Миталипов Сыймык "
              motto="студент 2 курса"
            />
            <Active
              img={activist14}
              name="Атантаева Айтолгон"
              motto="студентка 3 курса колледжа"
            />
            <Active
              img={activist15}
              name="Молдояров Эльдар"
              motto="студент 2 курса колледжа"
            />
            <Active
              img={activist16}
              name="Ирсалиева Айыма"
              motto="студент 2 курса"
            />
            <Active
              img={activist17}
              name="Каримов Расулбек"
              motto="студент 2 курса"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activists;
