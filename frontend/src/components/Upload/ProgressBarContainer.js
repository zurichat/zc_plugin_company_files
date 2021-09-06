import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { faTimes, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";
import { red } from "@material-ui/core/colors";
// import PropTypes from "prop-types";

const progressValue = [
  {
    id: 1,
    title: "Upload 1 file",
    redo: faRedo,
    times: faTimes,
    statusCode: "00b87c",
    label: "Final Design.psd",
  },
  {
    id: 2,
    title: "Uploading failed",
    redo: faPause,
    times: faTimes,
    statusCode: "red",
    label: "Initial Design.psd",
  },
];

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
      {progressValue.map((progress, index) => (
        <ProgressBar key={index} progress={progress} value={value} max={max} />
      ))}

    
    </div>
  );
};


export default ProgressBarContainer;
