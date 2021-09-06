import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTimes, faPause, faRedo } from "@fortawesome/free-solid-svg-icons";
// import PropTypes from "prop-types";
import "./ProgressBar.css";

const ProgressBar = ({ value, max, color, width, progress }) => {
  return (
    <div className="pb-widget">
      <div className="pb-widget-r">
        <h3>
          {progress.title} <span class="file-size">{(value / max) * 100}%</span>
        </h3>
        <h4>{progress.label}</h4>
        <progress value={value} max={max} />
      </div>

      <div className="upload-controls">
        <span>
          <FontAwesomeIcon
            icon={progress.redo}
            size="xs"
            color="#00B87C"
            className="mx-1"
          />
          <FontAwesomeIcon
            icon={progress.times}
            size="xs"
            color="red"
            className="mx-1"
          />
        </span>
        <p className="file-size">{(value / max) * 100}%</p>
      </div>
    </div>
  );
};

export default ProgressBar;
