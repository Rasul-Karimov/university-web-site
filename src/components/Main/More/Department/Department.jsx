import "./department.css";
import React from "react";
import Mheader from "../MoreHeader/Mheader";
import "./department.css";
import { useEffect } from "react";
import DepartmentContent from "./DepartmentContent/DepartmentContent";
const Department = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="department">
      <Mheader
        title="Департамент цифровых технологий"
        textTitle1="Присваиваемая квалификация"
        textText1="Бакалавр"
        textTitle2="Срок обучения"
        textText2="4 года, очная форма"
      />
      <DepartmentContent />
    </div>
  );
};

export default Department;
