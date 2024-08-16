import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ label, onClick = () => {}, style = {} }) => {
  return (
    <button className="button" onClick={onClick} style={style}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

export default Button;
