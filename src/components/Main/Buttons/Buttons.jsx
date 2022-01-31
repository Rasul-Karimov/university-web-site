import React from "react";
import "./Buttons.css";
import { ReactComponent as Arrow } from "../../../img/arrowSvg.svg";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Buttons = (props) => {
  return (
    <>
      {props.href ? (
        <motion.a
          target="_blank"
          href={props.href}
          className={`buttons-component ${props.class}`}
          animate={{
            scale: 1.1,
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <p className="buttons-component__btn">{props.title}</p>
          {props.arrow ? <Arrow className="buttons-component__arrow" /> : null}
        </motion.a>
      ) : null}
      {props.to ? (
        <NavLink to={props.to} className={`buttons-component ${props.class}`}>
          <p className="buttons-component__btn">{props.title}</p>
          {props.arrow ? <Arrow className="buttons-component__arrow" /> : null}
        </NavLink>
      ) : null}
    </>
  );
};

export default Buttons;
