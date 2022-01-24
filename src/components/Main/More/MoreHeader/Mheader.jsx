import React from "react";
import "./Mheader.css";
import background from "../../../../img/Departfon.png";
import title from "../../../../img/title.png";
import time from "../../../../img/time.png";

const Mheader = (props) => {
  return (
    <header className="header-more">
      <img className="header-more__background" src={background} alt="" />
      <div className="header-more__container container">
        <div className="header-more__title title">{props.title}</div>
        <div className="header-more__items">
          <div className="header-more__item">
            <div className="header-more__img">
              <img src={title} alt="" />
            </div>
            <p className="header-more__text">
              <h3>{props.textTitle1}</h3>
              <p>{props.textText1}</p>
            </p>
          </div>
          <div className="header-more__item">
            <div className="header-more__img">
              <img src={time} alt="" />
            </div>
            <p className="header-more__text">
              <h3>{props.textTitle2}</h3>
              <p>{props.textText2}</p>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Mheader;
