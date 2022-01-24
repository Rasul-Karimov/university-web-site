import React from "react";
import "./Activists.css";
import fon from "../../../img/Departfon.png";
const Activists = () => {
  return (
    <div className="Activists">
      <div className="Activists__title">Студенты</div>
      <img src={fon} alt="" className="Activists__fon" />
      <div className="Activists__container container"></div>
    </div>
  );
};

export default Activists;
