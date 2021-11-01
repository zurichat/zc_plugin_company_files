import React, { useState } from "react";
import FolderIcon from "../../CollabImages/folder-svg.svg";
import menuIcon from "../../CollabImages/menu-svg.svg";
import plusIcon from "../../CollabImages/plus-svg.svg";
import profile from "../../CollabImages/tosin.PNG";
import profile2 from "../../CollabImages/damilola-3.png";

import CollaboratorCard from "../../CollaboratorCard/CollaboratorCard";
import Backdrop from "../../../FolderRename/ModalDrop";

const Folder = () => {
  const [openModal, setModal] = useState(false);

  const triggerModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="tw-w1/4 folder_card">
      <div className="folder_container flex-bet">
        <img src={FolderIcon} alt="folders" className="folderIcon" />
        <span className="move-up">
          {" "}
          <img src={menuIcon} alt="menu" className="tw-cursor-pointer" />{" "}
        </span>
      </div>
      <h3 className="folder_card_title">Design Files</h3>

      <div className="folder_footer flex-bet">
        <p className="folder_card_info">140 Files</p>

        <div className="tw-flex move-up">
          <span className="move-left">
            <img src={profile} alt="avater" className="folder_small_avater" />
          </span>
          <span className="move-left">
            <img src={profile2} alt="avater" className="folder_small_avater" />
          </span>

          <span className="move-left">
            <img
              src={plusIcon}
              alt="menu"
              className="tw-cursor-pointer"
              onClick={triggerModal}
            />
          </span>
        </div>
      </div>
      {/* {showPermissionCard && <CollaboratorCard />} */}
      {openModal && <CollaboratorCard onCancel={closeModal} />}
      {openModal && <Backdrop onCancel={closeModal} />}

      <style jsx>
        {`
          .flex-bet {
            display: flex;
            justify-content: space-between;
          }
          .folder_card {
            border: 1px solid #f6f6f6;
            box-sizing: border-box;
            box-shadow: 0px 6px 28px -5px rgba(165, 165, 165, 0.1);
            border-radius: 9px;
            padding: 20px;
            margin-top: 20px;
            height: 129px;
            width: 233px;
          }

          .folder_card_title {
            font-weight: bold;
            font-size: 13px;
            line-height: 15.6px;
            color: #4a4a4a;
            margin: 20px 0 5px 0;
          }

          .folder_card_info {
            color: #999999;
            font-weight: 400;
            font-size: 13px;
            line-height: 15.6px;
          }

          .folderIcon {
            height: 33px;
            width: 30px;
          }

          .move-left {
            margin-left: -10px;
          }

          .move-up {
            margin-top: -10px;
          }

          .folder_small_avater {
            width: 23px !important;
            height: 23px;
            border-radius: 50%;
          }
        `}
      </style>
    </div>
  );
};

export default Folder;
