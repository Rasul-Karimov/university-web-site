import React from "react";
import "./Admin.css";

const Admin = (props) => {
  return (
    <div className="administration__item item-administration ">
      <div className="item-administration__content">
        <div className="item-administration__name">
          <span>{props.who} </span>
          <p>{props.name}</p>
        </div>
        <div className="item-administration__text">
          {props.title ? <h3>{props.title}</h3> : null}
          <p>{props.text ? props.text : null}</p>
        </div>
      </div>
      <div className="item-administration__img">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
};

export default Admin;
