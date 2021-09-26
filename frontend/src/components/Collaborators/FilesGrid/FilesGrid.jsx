import React from "react";

import File from "./File/File";

function FilesGrid() {
  return (
    <div className="files_grid">
      <div className="files_grid_nav flex-bet">
        <h3>Files</h3>
        <p>View all</p>
      </div>

      <File title="Abstract.doc" time="Added today" />

      <File title="Abstract.doc" time="Added today" />

      <style jsx>
        {`
          .flex-bet {
            display: flex;
            justify-content: space-between;
          }
          .files_grid {
            width: 96%;
            margin: 70px auto;
          }

          h3 {
            color: #4a4a4a;
            font-size: 20px;
            line-height: 24px;
            font-weight: bold;
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

export default FilesGrid;
