import React from "react";
import "./Container.css";
import PropTypes from "prop-types";

const Container = ({ children, style = {} }) => {
  return (
    <div className="container" style={style}>
      {children}
    </div>
  );
};

Container.propTypes = {
  style: PropTypes.object,
};

export default Container;
