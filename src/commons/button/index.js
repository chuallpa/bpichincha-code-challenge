import React from "react";
import { VscAdd, VscChromeClose, VscSave } from "react-icons/vsc";
import { string } from "prop-types";

import "./styles.scss";

const ICONS = {
  add: <VscAdd />,
  cancel: <VscChromeClose />,
  save: <VscSave />,
};

const Button = ({ title, color, className, icon, ...otherProps }) => (
  <button className={`btn btn--${color} ${className}`} {...otherProps}>
    {icon && ICONS[icon]}
    <p>{title}</p>
  </button>
);

Button.propTypes = {
  className: string,
  color: string,
  title: string.isRequired,
};

Button.defaultProps = {
  color: "primary",
  className: "",
};

export default Button;
