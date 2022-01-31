import "./button.css";
import { ReactComponent as Arrow } from "../../../../img/arrowSvg.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Button = (props) => {
  return (
    <NavLink
      to={props.adres ? props.adres : null}
      className="button"
      style={props.align ? { margin: "0 auto" } : null}
    >
      Подробнее
      <Arrow className="img" />
    </NavLink>
  );
};

export default Button;
