import React from "react";
import { func, string, bool } from "prop-types";
import SearchIcon from "../../assets/icons/icon-search.svg";

import "./styles.scss";

const InputText = ({ name, value, onChange, label, icon, ...otherProps }) => {
  const handleOnChange = (e) => {
    onChange && onChange(name, e.target.value);
  };

  return (
    <div className="input-text-container">
      {label && <label className="label">{`${label}:`}</label>}
      <div className="input-wrapper">
        {icon && <img alt="i" src={SearchIcon} />}
        <input
          className={"input-text"}
          value={value}
          name={name}
          type="text"
          onChange={handleOnChange}
          {...otherProps}
        />
      </div>
    </div>
  );
};

InputText.propTypes = {
  icon: bool,
  label: string,
  name: string.isRequired,
  onChange: func.isRequired,
  value: string.isRequired,
};

InputText.propTypes = {
  icon: false,
  label: null,
};

export default InputText;
