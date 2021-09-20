import PropTypes from "prop-types";
import React from "react";

const CustomIcon = ({
  customHeight = false,
  className: customClass,
  ...restProps
}) => {
  return (
    <img
      {...{
        className: `${!customHeight ? "h-8" : ""} w-auto ${customClass}`,
        ...restProps,
      }}
    />
  );
};

CustomIcon.propTypes = {
  customHeight: PropTypes.bool,
  className: PropTypes.string,
  restProps: PropTypes.any,
};

export default CustomIcon;
