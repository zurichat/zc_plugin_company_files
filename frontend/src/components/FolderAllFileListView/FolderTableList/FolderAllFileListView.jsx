import "./FolderAllFileListView.css";

import ListViewTable from "../ListViewTable/ListViewTable";
import React from "react";
import SettingsIcon from "./settingsIcon.svg";
import leftArrow from "./arrowleft.svg";
import myAvater from "./myAvater.jpg";
import sortIcon from "./listviewIcon.svg";

function FolderAllFileListView() {
  return (
    <div className="folder_list_view">
      <div className="flv_header flex">
        <div className="flv_left">
          <button className="add_new_folder">Add New</button>
        </div>

        <div className="flv_right">
          <input type="search" placeholder="searchComponent will be here" />
          <img className="settingIcon" src={SettingsIcon} alt="settings" />
          <img
            className="settingAvater"
            alt="setting"
            src={myAvater}
          />
        </div>
      </div>

      {/* Second column */}

      <div className="sorting_col flex">
        <div className="left_sorting">
          <img class="left_arrow" src={leftArrow} alt="arrow" />
          <h4>All Files</h4>
        </div>

        <div className="right_sorting">
          <img className="sort_folder" src={sortIcon} alt="sorting" />
          <button className="folder_activities">See Activities</button>
        </div>
      </div>

      {/* The list view component */}

      <ListViewTable />
    </div>
  );
}

export default FolderAllFileListView;
