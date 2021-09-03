import React from 'react';
import './FolderAllFileListView.css';
import ListViewTable from './ListViewTable/ListViewTable';

import settingsIcon from '../../../public/Icons/settingsIcon.svg';
import myAvater from '../../../public/Icons/myAvater.jpg';
import leftArrow from '../../../public/Icons/arrowleft.svg';
import sortIcon from '../../../public/Icons/listviewIcon.svg';

function FolderAllFileListView() {
  return (
    <div className="folder_list_view">
      <div className="flv_header flex">
        <div className="flv_left">
          <button onClick={} className="add_new_folder">Add New</button>
        </div>

        <div className="flv_right">
          <input type="search" placeholder="searchComponent will be here" />
          <img className="settingIcon" src={settingsIcon} onClick={} />
          <img className="settingAvater" src={myAvater} onclick={} />

        </div>
      </div>

      {/* Second column */}

      <div className="sorting_col flex">
        <div className="left_sorting">
          <img class="left_arrow" onClick={} src={leftArrow} />
          <h4>All Files</h4>
        </div>

        <div className="right_sorting">
          <img className="sort_folder" onClick={} src={sortIcon} />
          <button onClick={} className="folder_activities">See Activities</button>
        </div>
      </div>

      {/* The list view component */}

      <ListViewTable />
    </div>
   
  );
}

export default FolderAllFileListView;
