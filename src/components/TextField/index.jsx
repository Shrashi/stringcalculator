import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TextField.css";

const TextField = ({
  type = "text",
  predicted = "",
  locked = false,
  value = "",
  setValue = () => {},
  error,
  label,
  style = {},
}) => {
  const [active, setActive] = useState(false);

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      setValue(predicted);
    }
  };

  const fieldClassName = `field ${
    (locked ? active : active || value) && "active"
  } ${locked && !active && "locked"}`;

  return (
    <div className={fieldClassName} style={style}>
      {active && value && predicted && predicted.includes(value) && (
        <p className="predicted">{predicted}</p>
      )}
      <input
        id={1}
        type={type}
        value={value}
        placeholder={label}
        onChange={changeValue}
        onKeyDown={handleKeyPress}
        onFocus={() => !locked && setActive(true)}
        onBlur={() => !locked && setActive(false)}
      />
      <label htmlFor={1} className={error && "error"}>
        {error || label}
      </label>
    </div>
  );
};

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  predicted: PropTypes.string.isRequired,
  locked: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
};

export default TextField;
