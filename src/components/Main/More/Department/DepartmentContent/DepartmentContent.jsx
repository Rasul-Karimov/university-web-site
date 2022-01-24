import React from "react";
import "./DepartmentContent.css";
import photo from "../../../../../img/text1.png";
import photo2 from "../../../../../img/text2.png";
import photo3 from "../../../../../img/text3.png";
import photo4 from "../../../../../img/text4.png";

const MoreContent = () => {
  return (
    <div className="content-more">
      <div className="content-more__container container">
        <div className="content-more__title title">Направления</div>
        <div className="content-more__items">
          <div className="content-more__item">
            <div className="content-more__img img1">
              <img src={photo} alt="" />
            </div>
            <div className="content-more__text text-content-more  text1">
              <h3 className="text-content-more__title">
                Интернет Технологии и Управление
              </h3>
              <p className="text-content-more__text">
                Направление “Интернет Технологии и Управление” - это
                коммуникационные, информационные технологи и сервисы,
                основывавась на которые осуществляется развитие иавтоматизация
                любой сферы жизненной деятельности и производства. Специалисты,
                владеющие знаниями программирования в области интернет
                технологии, востребованы в наше время и легко смогут найти себе
                работу в будущем. Выпускники которые поступят в наш факультет ,
                получат диплом через 4 года. Со 2 курса студенты начинают
                участвовать в практических проект ах разработки программных
                продуктов, формируя профессиональное портфолио. Решая реальные
                задачи, поставленные представителями ведущих компаний, работают
                с известными брендами. Данное направление имеет множество
                отраслей. Человек, закончивший вуз по этой специальности, может
                работать в следующих сферах: программирование; дизайн;
                веб-верстка; техническая поддержка; системное администрирование.
              </p>
            </div>
          </div>
          <div className="content-more__item">
            <div className="content-more__img img2">
              <img src={photo2} alt="" />
            </div>
            <div className="content-more__text text-content-more text2">
              <h3 className="text-content-more__title">
                Прикладная Информатика <span>(в правовой сфере)</span>
              </h3>
              <p className="text-content-more__text ">
                Прикладная информатика - научное направление, занимающееся
                изучением законов, методов и способов получения, хранения,
                передачи и обработки информации в различных областях
                деятельности человека с применением средств вычислительной
                техники и телекоммуникационных систем. После окончания обучения
                выпускники вышеназванной специальности могут занимать следующие
                должности: Программист; <br /> Бизнес-аналитик; <br /> Системный
                аналитик; Специалист по сопровождению программного обеспечения;{" "}
                <br /> Специалист по тестированию программного обеспечения;{" "}
                <br />
              </p>
            </div>
          </div>
          <div className="content-more__item">
            <div className="content-more__img img3">
              <img src={photo3} alt="" />
            </div>
            <div className="content-more__text text-content-more text3">
              <h3 className="text-content-more__title">
                Информационные Системы и Технологии{" "}
                <span>(в правовой сфере)</span>
              </h3>
              <p className="text-content-more__text ">
                Студенты, выбравшие данную образовательную программу получат
                профессиональные знания в области современных информационных
                технологий, системного анализа, информационных сетей,
                проектирования информационных систем, программирования, защиты
                компьютерной информации, экономики и менеджмента, управления
                проектами. После окончания вы сможете: определять потребности
                заказчика к информационной системе и возможности их реализации;
                проводить системный анализ предметной области; выполнять
                проектирование информационной системы; осуществлять
                программирование и тестирование информационной системы;
                управлять работами по эксплуатации и сопровождению
                информационной системы;  управлять эффективностью работы
                персонала.
              </p>
            </div>
          </div>
          <div className="content-more__item">
            <div className="content-more__img img4">
              <img src={photo4} alt="" />
            </div>
            <div className="content-more__text text-content-more text4">
              <h3 className="text-content-more__title">
                Информационная Безопасность <span>(в правовой сфере)</span>
              </h3>
              <p className="text-content-more__text ">
                Направление “Информационная безопасность” включает сферы науки,
                техники и технологии, охватывающие совокуность проблем,
                связанных с обеспечением защищенности объектов информатизации в
                условиях существования угроз в информацинной сфере. Квалификация
                выпускника – специалист по информационной безопасности ,
                способный: проводить работы по установке, настройке, испытаниям
                и техническому обслуживанию средств защиты информации от утечки
                по техническим каналам; проводить работы по установке,
                настройке, испытаниям и техническому обслуживанию средств защиты
                информации от несанкционированного доступа; осуществлять
                контроль эффективности защиты информации.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreContent;