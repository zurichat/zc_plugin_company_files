import React from "react";

const sizePadding = {
  sm: "py-2 px-3 text-sm",
  md: "py-3 px-4",
  lg: "py-4 px-5 text-lg",
};
const variantChoices = {
  primary: "bg-primary text-white",
  success: "",
  "outline-primary":
    "border-2 border-primary border-opacity-80 text-primary bg-white",
  "outline-success": "",
};
const Button = ({
  variant = "primary",
  size = "md",
  //   type = "button",
  //   active = false,
  disabled = false,
  children,
}) => {
  return (
    <button
      className={`${sizePadding[size]}  ${!disabled ? "" : "opacity-30"} ${
        variantChoices[variant]
      } hover:opacity-70  rounded`}
    >
      {children}
    </button>
  );
};

export default Button;
