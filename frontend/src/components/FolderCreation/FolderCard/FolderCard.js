import React, { useState } from "react";
// import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faFolder,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

import profile from "./images/profile-pic.jpg";
import classes from "./FolderCard.module.css";

const fileIcon = <FontAwesomeIcon icon={faFolder} size="3x" color="#F6BE00" />;
const menuIcon = (
  <FontAwesomeIcon icon={faEllipsisV} size="1x" color="#B4B4B4" />
);
const plusIcon = <FontAwesomeIcon icon={faPlus} size="sm" color="#B4B4B4" />;

const FolderCard = ({ name }) => {
  return (
    <div style={{ position: "relative" }}>
      <div className={classes.folderCard__wrapper}>
        <div className={classes.top}>
          <div className="cursor-pointer">{fileIcon}</div>
          <div className={classes.menu}>{menuIcon}</div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.fileType}>
            <h5>{name}</h5>
            <h6>0 files</h6>
          </div>
          <div className={classes.fileAccess}>
            <img className={classes.img} src={profile} alt="Profile" />
            <img className={classes.img} src={profile} alt="Profile" />
            <div className={classes.add}>{plusIcon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FolderCard;
