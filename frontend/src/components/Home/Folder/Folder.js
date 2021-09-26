import React, { useState } from "react";
import folderYellow from "../../../../public/Icons/folder/yellow.svg";
import options from "../../../../public/Icons/more-vertical/active.svg";
import user2 from "../../../../public/Icons/folder-user2.svg";
import user from "../../../../public/Icons/folder-user.svg";
import addUser from "../../../../public/Icons/plus/active.svg";
import FolderMenu from "../../Subcomponents/FolderMenu";

function Folder({ folder }) {
  const [openStatus, setOpenStatus] = useState(false);

  function openMenu() {
    console.log("open menu");
    setOpenStatus(!openStatus);
  }

  return (
    <>
      <div className="folderCard w-full sm:w-56 mb-10 px-6 py-7 flex flex-col bg-white rounded-md shadow-md relative">
        <div className="card flex justify-between mb-6">
          <div className="icons">
            <img src={folderYellow} alt="folder" />
          </div>
          <div className="icons" onClick={() => openMenu()}>
            <img src={options} alt="options" />
          </div>
        </div>
        <div className="card text-sm flex justify-between items-center text-[13px]">
          <div className="w-32">
            <span className="block truncate">{folder.folderName}</span>
            <span className="block text-gray-400">140 Files</span>
          </div>
          <div className="icons flex">
            <div className="avi w-6 h-6 -m-1 rounded-full object-fill">
              <img src={user} alt="folder user" />
            </div>
            <div className="avi w-6 h-6 -m-1 rounded-full object-fill">
              <img src={user2} alt="user" />
            </div>
            <div className="avi w-6 h-6 -m-1 border-2 border-gray-300 border-dashed bg-white rounded-full flex justify-around">
              <img src={addUser} alt="add user" />
            </div>
          </div>
        </div>
        {openStatus && <FolderMenu folder={folder} />}
      </div>
    </>
  );
}

export default Folder;
