import React, { useState } from "react";
import folderYellow from "../../../../public/Icons/folder/yellow.svg";
import options from "../../../../public/Icons/more-vertical/active.svg";
import folderUsers from "../../../../public/Icons/folderUsers.png";

import CollaboratorCard from "../../Collaborators/CollaboratorCard/CollaboratorCard";

import Backdrop from "../../FolderRename/ModalDrop";
import { FiPlusCircle } from 'react-icons/fi';


function FolderGridView({ folder, openMenu, fileNumber, index }) {
  const [openModal, setModal] = useState(false);

  const triggerModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };


  return (
    <>
      <div className="tw-flex tw-justify-between tw-mb-6">
        <div className="icons">
          <img src={folderYellow} alt="folder" />
        </div>
        <div className="icons" onClick={() => openMenu()}>
          <img src={options} alt="options" className="tw-cursor-pointer" />
        </div>
      </div>
      <div className="tw-text-sm tw-w-full tw-flex tw-flex-col tw-justify-between tw-items-center tw-text-[13px]">
        <div className="tw-w-full">
          <span className="tw-block tw-font-semibold tw-truncate tw-text-text-grey">
            {folder.folderName}
          </span>
        </div>

        <div className="icons tw-mt-1 tw-w-full tw-flex tw-items-start tw-justify-between">
          <span className="tw-block tw-text-gray-400">
            {folder.noOfFiles} {folder.noOfFiles > 1 ? "Files" : "File"}
          </span>
          <div className="avi tw-w-16 tw-cursor-pointer">
          <FiPlusCircle onClick={triggerModal} className="tw-text-xl tw-text-gray-500"/>

            {/* <img
              src={folderUsers}
              alt="folder user"
              className="tw--mr-4 tw-w-full"
              onClick={triggerModal}
            /> */}
          </div>
        </div>
      </div>

      {openModal && <CollaboratorCard key={folder._id} onCancel={closeModal} />}
      {openModal && <Backdrop onCancel={closeModal} />}
    </>
  );
}

export default FolderGridView;
