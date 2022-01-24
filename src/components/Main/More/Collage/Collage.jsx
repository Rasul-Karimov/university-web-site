import "./Collage.css";
import React from "react";
import Mheader from "../MoreHeader/Mheader";
import MoreContent from "./CollageContent/CollageContent";
const Collage = () => {
  return (
    <div className="department">
      <Mheader
        title="IT-колледж"
        textTitle1="Уровень образования"
        textText1="среднее профессиональное"
        textTitle2="Срок обучения"
        textText2="1 год 10 месяцев после 11 класса, 2 года 10 месяцев после 9 класса"
      />
      <MoreContent />
    </div>
  );
};

export default Collage;
