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
<<<<<<< HEAD
      <div className="tw-w-full tw-md:w-60 tw-mb-10 tw-px-4 tw-py-7 tw-flex tw-flex-col tw-bg-white tw-rounded-md tw-shadow-md tw-relative">
        <div className="tw-card tw-flex tw-justify-between tw-mb-6">
=======
      <div className="tw-w-full md:tw-w-60 tw-mb-10 tw-px-4 tw-py-7 tw-flex tw-flex-col tw-bg-white tw-rounded-md tw-shadow-md tw-relative">
        <div className="card tw-flex tw-justify-between tw-mb-6">
>>>>>>> db92099c98944f4d3884d39409cb4a5e9c52fc5e
          <div className="icons">
            <img src={folderYellow} alt="folder" />
          </div>
          <div className="icons" onClick={() => openMenu()}>
            <img src={options} alt="options" className="tw-cursor-pointer" />
          </div>
        </div>
<<<<<<< HEAD
        <div className="tw-card tw-text-sm tw-w-full tw-flex tw-flex-col tw-justify-between tw-items-center tw-text-[13px]">
=======
        <div className="card tw-text-sm tw-w-full tw-flex tw-flex-col tw-justify-between tw-items-center tw-text-[13px]">
>>>>>>> db92099c98944f4d3884d39409cb4a5e9c52fc5e
          <div className="tw-w-full">
            <span className="tw-block tw-font-semibold tw-truncate">
              {folder.folderName}
            </span>
          </div>

<<<<<<< HEAD
          <div className="tw-icons tw-mt-1 tw-w-full tw-flex tw-items-start tw-justify-between">
            <span className="tw-block tw-text-gray-400">140 Files</span>
            <div className="tw-avi tw-w-16 tw-cursor-pointer">
              <img
                src={folderUsers}
                alt="folder user"
                className="tw-mr-4 tw-w-full"
=======
          <div className="icons tw-mt-1 tw-w-full tw-flex tw-items-start tw-justify-between">
            <span className="tw-block tw-text-gray-400">140 Files</span>
            <div className="avi tw-w-16 tw-cursor-pointer">
              <img
                src={folderUsers}
                alt="folder user"
                className="tw--mr-4 tw-w-full"
>>>>>>> db92099c98944f4d3884d39409cb4a5e9c52fc5e
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
