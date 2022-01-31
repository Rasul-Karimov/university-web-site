import React from "react";
import "./Administration.css";
import director from "../../../img/director.png";
import teacher1 from "../../../img/teacher1.png";
import teacher2 from "../../../img/teacher2.png";
import teacher3 from "../../../img/teacher3.png";
import fon from "../../../img/Departfon.png";
import Admin from "./Admin/Admin";
import { useEffect } from "react";

const Administration = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="administration">
      <img className="administration__fon" src={fon} alt="" />
      <div className="administration__title title">Администрация</div>

      <div className="administration__container container">
        <div className="administration__items">
          <Admin
            who="Директор"
            name="Джакшылыкова Гулкайыр Джакшылыковна"
            title="Уважаемые родители! Дорогие абитуриенты!"
            text="Уважаемые родители! Дорогие абитуриенты! 

   Путь к профессиональной карьере начинается с выбора высшего учебного заведения.
Этот выбор непростой и очень ответственный, поскольку он определяет направление дальнейшего жизненного пути. Приглашаю Вас в Высшую IT- школу. 
Я искренне рада, что вы проявляете интерес к нашему университету и предлагаю воспользоваться увлекательной и интересной возможностью, которую представляет Вашему вниманию наш сайт.

Сегодня перед нами стоит  амбициозная задача подготовки квалифицированных и конкурентоспособных специалистов, способных принимать компетентные решения в самых сложных ситуациях, лидеров, способных реагировать на вызовы глобальной цифровой экономики.


Качественное образование—это самый ценный, самый дорогой капитал, который человек приобретает в жизни.  И если вы приложите достаточно сил к получению знаний, фундаментальное, но вместе с тем практически направленное образование, которое вы получите в Высшей IT-школе, может стать прочной основой вашей дальнейшей жизни.

"
            image={director}
          />
          <Admin
            who="Заместитель директора"
            name="Боталиева Каныкей Мирбековна"
            image={teacher1}
          />
          <Admin
            who="Ведущий специалист"
            name="Сыргак кызы Айзат"
            image={teacher2}
          />
          <Admin
            who="Ведущий специалист IT- Колледжа"
            name="Омуркулова Саламат Омуркуловна"
            image={teacher3}
          />
        </div>
      </div>
    </div>
  );
};

export default Administration;
