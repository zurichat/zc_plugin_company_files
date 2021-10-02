import React from "react";
import folderYellow from "../../../../public/Icons/folder/yellow.svg";
import options from "../../../../public/Icons/more-vertical/active.svg";

function FolderListView({ folder }) {
  return (
    <>
      <table className="tw-border-0 tw-border-collapse table-auto tw-w-full tw-mx-3">
        <thead>
          <tr>
            <th className="">Name</th>
            <th className="">No Of Files</th>
            <th className="">Date Modified</th>
            <th className="">Pinned</th>
          </tr>
        </thead>
        <tbody>
          <tr key={folder.id}>
            <td>
              <img src={folderYellow} alt="folder" />
              {folder.folderName}
            </td>
            <td>140</td>
            <td>{folder.dateModified}</td>
            <td>{folder.isPinned}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default FolderListView;
