import "./button.css";
import arrow from "../../../../img/arrow.png";
import { NavLink } from "react-router-dom";
const Button = (props) => {
  return (
    <NavLink
      to={props.adres ? props.adres : null}
      className="button"
      style={props.align ? { margin: "0 auto" } : null}
    >
      Подробнее
      <img src={arrow} alt="" />
    </NavLink>
  );
};

export default Button;
