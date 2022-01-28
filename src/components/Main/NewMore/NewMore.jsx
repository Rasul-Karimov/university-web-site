import React from "react";
import "./NewMore.css";
const NewMore = (props) => {
  return (
    <div className="newMore">
      <div className="newMore__container container">
        <div className="newMore__title title">Новости</div>
        <div className="newMore__block">
          <h3>{props.title}</h3>
          <p>{props.text}</p>
          <div>
            <img src={props.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMore;
