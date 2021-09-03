import React, { useState } from "react";
// import PropTypes from "prop-types";

const ProgressBar = ({ value, max, color, width }) => {
  return (
    <div>
      <h3>Upload 1 file</h3> <span>{(value / max) * 100}%</span>
      <progress value={value} max={max} />
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
