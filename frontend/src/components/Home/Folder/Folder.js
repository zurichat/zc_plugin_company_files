import React, { useState } from "react";
import FolderMenu from "../../Subcomponents/FolderMenu";
import FolderGridView from "./FolderGridView";
import FolderListView from "./FolderListView";

function Folder({ folder, view }) {
  const [openStatus, setOpenStatus] = useState(false);

  function openMenu() {
    setOpenStatus(!openStatus);
  }

 
  return (
    <>
      <div className="tw-w-full tw-mb-10 tw-px-4 tw-py-7 tw-flex tw-flex-col tw-bg-white tw-rounded-md tw-shadow-md tw-relative">
        {view && (
          <FolderGridView
            folder={folder}
            openMenu={openMenu}
          />
        )}
        {openStatus && (
          <FolderMenu
            folder={folder}
            openStatus={openStatus}
            setOpenStatus={setOpenStatus}
          />
        )}

        {/* {openModal && <CollaboratorCard onCancel={closeModal} />}
        {openModal && <Backdrop onCancel={closeModal} />} */}
      </div>
    </>
  );
}

export default Folder;
