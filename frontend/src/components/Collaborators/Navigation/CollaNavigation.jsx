import React from "react";
import ToggleIcon from "../CollabImages/toggle-svg.svg";
// import Avater from "../CollabImages/tosin.PNG";
// import fileDrop from "../CollabImages/dropdown-svg.svg";
// import user1 from "../CollabImages/damilola-2.png";
// import user2 from "../CollabImages/damilola-4.png";
import trash from "../CollabImages/files-trash-svg.svg";
import help from "../CollabImages/files-help-svg.svg";
import starred from "../CollabImages/files-star-svg.svg";
import files from "../CollabImages/files-files-svg.svg";
import people from "../CollabImages/files-people-svg.svg";

import FileStatus from "../FileStatus/FileStatus";

const CollaNavigation = () => {
  return (
    <div className="collab_wrapper">
      {/* Add New */}
      <div className="collab_nav">
        <div className="left_collab_nav">
          <button className="btn_outline">Add New</button>
        </div>
      </div>

      {/* File Status */}
      <div className="file_status_component ">
        <FileStatus icon={files} title="All Files" className="fsc_1" />
        <FileStatus icon={people} title="Shared" />
        <FileStatus icon={starred} title="Starred" />
        <FileStatus icon={trash} title="trash" />
        <FileStatus icon={help} title="Help" className="fsc_2" />
      </div>

      {/* Recently view Header */}

      <div className="collab_folder_header">
        <div className="left_folder_header">
          <h4>Recently Viewed</h4>
        </div>

        <div className="right_folder_header">
          <img src={ToggleIcon} alt="Toggle" className="toggle" />
          <button className="button_blue">See Activities</button>
        </div>
      </div>

      <style jsx>
        {`
          .file_status_component {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }

          .collab_wrapper {
            margin: 15px auto;
            font-family: lato;
            width: 96%;
          }

          .header-green {
            background-color: #00b87c;
            padding: 5px;
            margin-bottom: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center !important;
          }

          .text-part {
            display: flex;
            align-items: center;
          }

          .text-part img {
            margin-left: 5px;
            cursor: pointer;
            display: flex;
            align-self: center;
            margin-top: 7px;
          }

          .text-part h3 {
            color: #fff;
            font-weight: bold;
            font-size: 18px;
            line-height: 32px;
          }

          .available_friends {
            display: flex;
            align-items: center;
            background-color: #fff;
            padding: 4px;
            border-radius: 4px;
            border: 1px solid #f6f6f6;
            height: 30px;
          }

          .images_friends {
            display: flex;
          }

          .images_friends img {
            width: 24px;
            height: 24px;
            border-radius: 4px;
            align-self: center;
          }

          .images_friends img:first-child {
            z-index: 20;
          }

          .images_friends img:nth-child(2) {
            z-index: 10;
            margin-left: -8px;
          }

          .images_friends img:nth-child(3) {
            margin-left: -8px;
          }

          .friends_online h3 {
            font-size: 15px;
            color: #1d1c1d;
            margin-left: 7px;
            margin-top: 3px;
          }

          .collab_wrapper .collab_nav .left_collab_nav .btn_outline {
            background-color: #fff;
            outline: none;
            border: 1px solid #00b87c;
            color: #00b87c;
            padding: 7.5px;
            font-size: 12px;
          }

          .collab_wrapper .collab_nav .left_collab_nav .btn_outline:hover {
            background-color: #00b87c;
            color: #fff;
          }

          .collab_wrapper .collab_folder_header {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            margin-top: 35px;
          }

          .collab_wrapper .collab_folder_header .left_folder_header {
            font-size: 20px;
            line-height: 24px;
            font-weight: 500;
            color: #4a4a4a;
          }

          .collab_wrapper .collab_folder_header .right_folder_header {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
          }

          .collab_wrapper .collab_folder_header .right_folder_header .toggle {
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            cursor: pointer;
          }

          .collab_wrapper
            .collab_folder_header
            .right_folder_header
            .button_blue {
            background-color: #00b87c;
            color: #fff;
            padding: 7.5px;
            font-size: 12px;
            line-height: 20px;
            border-radius: 3px;
            margin-left: 10px;
          }

          .collab_wrapper
            .collab_folder_header
            .right_folder_header
            .button_blue:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </div>
  );
};

export default CollaNavigation;
