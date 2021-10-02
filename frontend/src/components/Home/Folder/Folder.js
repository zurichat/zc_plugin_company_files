import React, { useState, useEffect } from "react";
import FolderMenu from "../../Subcomponents/FolderMenu";
import FolderGridView from "./FolderGridView";
import FolderListView from "./FolderListView";
import { getTotalNumberOfFilesInFolder } from "../../../actions/fileAction";
import { useDispatch, useSelector } from "react-redux";

function Folder({ folder, view, index }) {
  const [openStatus, setOpenStatus] = useState(false);
  const { loading, error, fileNumber } = useSelector(
    (state) => state.rootReducer.fileReducer
  );

  function openMenu() {
    setOpenStatus(!openStatus);
  }

  useEffect(() => {
    (async () => {
      try {
        dispatch(getTotalNumberOfFilesInFolder(folder.id));
        console.log({ fileNumber });
      } catch (err) {
        throw new Error(err);
      }
    })();
  }, []);

  return (
    <>
      <div className="tw-w-full tw-mb-10 tw-px-4 tw-py-7 tw-flex tw-flex-col tw-bg-white tw-rounded-md tw-shadow-md tw-relative">
        {view && (
          <FolderGridView
            folder={folder}
            openMenu={openMenu}
            index={index}
            fileNumber={fileNumber}
          />
        )}
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
