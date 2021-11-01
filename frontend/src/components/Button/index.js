import PropTypes from "prop-types";
import React from "react";

const SIZES = {
  sm: "py-2 px-3 text-sm",
  md: "py-3 px-4",
  lg: "py-4 px-5 text-lg"
};
const VARIANTS = {
  primary: "bg-primary text-white",
  success: "",
  "outline-primary":
    "border-2 border-primary border-opacity-80 text-primary bg-white",
  "outline-success": ""
};
const Button = ({
  variant = "primary",
  size = "md",
  //   type = "button",
  //   active = false,
  disabled = false,
  children,
  className: customClass,
  ...restProps
}) => {
  return (
    <button
      className={`${SIZES[size]}  ${!disabled ? "" : "opacity-30"} ${
        VARIANTS[variant]
      } hover:opacity-70  rounded ${customClass}`}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  restProps: PropTypes.any
};

export default Button;
