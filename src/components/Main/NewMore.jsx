import React from "react";
import "./NewMore.css";
import { useEffect } from "react";
const NewMore = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div key={props.href} className="newMore">
      <div className="newMore__container container">
        <div className="newMore__title title">Новости</div>
        <div className="newMore__block">
          <h3 className="newMore__title title">{props.title}</h3>
          <p>{props.text}</p>
          <div className="newMore__img">
            <img src={props.img}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMore;
