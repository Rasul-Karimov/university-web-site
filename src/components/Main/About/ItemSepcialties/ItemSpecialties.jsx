import React from "react";
import "./ItemSpecialties.css";
const ItemSpecialties = (props) => {
  return (
    <div className="item-about-specialties">
      <div className="item-about-specialties__title title">{props.title}</div>
      <p className="item-about-specialties__text">{props.text}</p>
    </div>
  );
};

export default ItemSpecialties;
