import React from "react";
import Folder from "./Folder/Folder";

function FoldersGrid() {
  return (
    <div className="folders_grid">
      <div className="folders_grid_nav">
        <h3>Folders</h3>
        <p>View all</p>
      </div>

      <div className="folder_align">
        <Folder />
        <Folder />
        <Folder />
        <Folder />
      </div>

      <style jsx>
        {`
          .folders_grid {
            width: 96%;
            margin: 70px auto;
          }

          h3 {
            color: #4a4a4a;
            font-size: 20px;
            line-height: 24px;
            font-weight: bold;
          }

          .folders_grid_nav,
          .folder_align {
            display: flex;
            justify-content: space-between;
          }

          p {
            cursor: pointer;
            color: #c4c4c4;
            font-size: 15px;
            line-height: 18px;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
}

export default FoldersGrid;
