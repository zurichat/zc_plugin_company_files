import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
// import PropTypes from "prop-types";

const ProgressBarContainer = ({ value, max, color, width }) => {
  const [isBarVisible, setBarVisibility] = useState(true);
  return (
    <div className={isBarVisible ? "upload-progress-bar" : "hide"}>
      <span className="upload-file-heading">
        <h3>Your Uploads</h3>{" "}
        <Link
          to="/upload"
          className="upload-cancel"
          onClick={() => setBarVisibility(!isBarVisible)}
        >
          Close
        </Link>
      </span>
      {}
      <ProgressBar value={value} max={max} />
      {/*       
        <h3>Upload 1 file</h3> <span>{(value / max) * 100}%</span>
        <progress value={value} max={max} /> */}
    </div>
  );
};

// ProgressBar.propTypes = {
//   value: PropTypes.number.isRequired,
//   max: PropTypes.number,
//   color: PropTypes.string,
//   width: PropTypes.string,
// };

export default ProgressBarContainer;
