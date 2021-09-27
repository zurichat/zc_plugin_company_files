import React, { useState } from "react";
import folderYellow from "../../../../public/Icons/folder/yellow.svg";
import options from "../../../../public/Icons/more-vertical/active.svg";
import FolderMenu from "../../Subcomponents/FolderMenu";
import folderUsers from "../../../../public/Icons/folderUsers.png";

function Folder({ folder }) {
  const [openStatus, setOpenStatus] = useState(false);

  function openMenu() {
    setOpenStatus(!openStatus);
  }

  return (
    <>
      <div className="w-full md:w-60 mb-10 px-4 py-7 flex flex-col bg-white rounded-md shadow-md relative">
        <div className="card flex justify-between mb-6">
          <div className="icons">
            <img src={folderYellow} alt="folder" />
          </div>
          <div className="icons" onClick={() => openMenu()}>
            <img src={options} alt="options" className="cursor-pointer" />
          </div>
        </div>
        <div className="card text-sm w-full flex flex-col justify-between items-center text-[13px]">
          <div className="w-full">
            <span className="block font-semibold truncate">
              {folder.folderName}
            </span>
          </div>

          <div className="icons mt-1 w-full flex items-start justify-between">
            <span className="block text-gray-400">140 Files</span>
            <div className="avi w-16 cursor-pointer">
              <img
                src={folderUsers}
                alt="folder user"
                className="-mr-4 w-full"
              />
            </div>
          </div>
        </div>
        {openStatus && (
          <FolderMenu
            folder={folder}
            openStatus={openStatus}
            setOpenStatus={setOpenStatus}
          />
        )}
      </div>
    </>
  );
}

export default Folder;
