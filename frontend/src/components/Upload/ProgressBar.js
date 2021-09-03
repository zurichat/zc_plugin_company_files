import React from "react";
// import PropTypes from "prop-types";

const ProgressBar = ({ value, max, color, width }) => {
  return (
    <div className="upload-progress-bar">
      <progress value={value} max={max} />
      <span>{(value / max) * 100}%</span>
    </div>
  );
};

// ProgressBar.propTypes = {
//   value: PropTypes.number.isRequired,
//   max: PropTypes.number,
//   color: PropTypes.string,
//   width: PropTypes.string,
// };

export default ProgressBar;
