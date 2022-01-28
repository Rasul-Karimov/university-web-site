import React from "react";
import "./Active.css";

const Active = (props) => {
  return (
    <div className="team-activists__item">
      <div className="team-activists__img">
        <img src={props.img} alt="" />
      </div>
      <div className="team-activists__name">{props.name}</div>
      <div className="team-activists__motto">{props.motto}</div>
    </div>
  );
};

export default Active;
