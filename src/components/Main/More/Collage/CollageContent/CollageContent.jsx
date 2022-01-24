import React from "react";
import "./CollageContent.css";
import photo from "../../../../../img/text1.png";
import photo2 from "../../../../../img/text2.png";
import photo3 from "../../../../../img/text3.png";
import photo4 from "../../../../../img/text4.png";

const MoreContent = () => {
  return (
    <div className="content-more">
      <div className="content-more__container container">
        <div className="content-more__title title">Специальность</div>
        <div className="content-more__items">
          <div className="content-more__item">
            <div className="content-more__img img1">
              <img src={photo} alt="" />
            </div>
            <div className="content-more__text text-content-more text1">
              <h3 className="text-content-more__title">
                Прикладная информатика <span>(в юриспруденции)</span>
              </h3>
              <p className="text-content-more__text">
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
            <div className="content-more__img img2">
              <img src={photo2} alt="" />
            </div>
            <div className="content-more__text text-content-more text2">
              <h3 className="text-content-more__title">
                Информационная безопасность автоматизированных систем{" "}
                <span>(в юриспруденции).</span>
              </h3>
              <p className="text-content-more__text ">
                Информационная безопасность автоматизированных систем – область
                науки и техники, которая активно развивается в последние
                десятилетия. Ее обеспечивают математические,
                программно-аппаратные, криптографические, правовые и
                организационные способы защиты. Важно сделать это на всех этапах
                работы с информацией: при ее приеме, обработке, хранении,
                отображении и передаче в системах. Основной целью обеспечения
                безопасности автоматизированной системы является защита
                участников информационного взаимодействия от ущерба, который они
                могут понести в результате вмешательства в работу системы, а
                также воздействия на саму информацию или отдельные компоненты
                АС.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreContent;
