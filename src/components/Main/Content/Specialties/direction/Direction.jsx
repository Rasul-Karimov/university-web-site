import "./direction.css";
import arrow from "../../../../../img/arrow.png";
import { NavLink } from "react-router-dom";
const Direction = (props) => {
  return (
    <div className="specialties__items item-specialties">
      <h3 className="item-specialties__title title">{props.title}</h3>
      <ul className="item-specialties__list">
        {props.lists.map((element) => {
          return (
            <li className="item-specialties__item" key={element.id}>
              <a href="#" className="item-specialties__link">
                {element.list}
              </a>
            </li>
          );
        })}
      </ul>
      <NavLink to={props.to} className="item-specialties__button-link">
        Подробнее
        <img src={arrow} alt="" />
      </NavLink>
    </div>
  );
};

export default Direction;
