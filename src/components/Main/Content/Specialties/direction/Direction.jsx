import "./direction.css";
import { ReactComponent as Arrow } from "../../../../../img/arrowSvg.svg";
import { NavLink } from "react-router-dom";
import Buttons from "../../../Buttons/Buttons";

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
      <Buttons
        to={props.to}
        title="подробнее"
        arrow={true}
        class="item-specialties__button-link"
      />
    </div>
  );
};

export default Direction;
