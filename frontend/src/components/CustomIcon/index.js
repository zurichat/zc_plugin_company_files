import PropTypes from "prop-types";
import React from "react";

const CustomIcon = ({ className: customClass, ...restProps }) => {
  return <img {...{ className: `h-8 w-auto ${customClass}`, ...restProps }} />;
};

CustomIcon.propTypes = {
  className: PropTypes.string,
  restProps: PropTypes.any,
};

export default CustomIcon;
