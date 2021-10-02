import React, { useState } from "react";
import FileMenu from "./FileMenu";
import { BsMusicNoteBeamed } from "react-icons/bs";
import FileType from "./FileType";

function audio({ file }) {
  const [openStatus, setOpenStatus] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    if (e.type === "contextmenu" || e.nativeEvent.which === 3) {
      setOpenStatus(true);
    }
  };

  return (
    <>
      <div
        className="tw-flex tw-items-center tw-w-52 tw-mx-2"
        onClick={(e) => handleContextMenu(e)}
        onContextMenu={(e) => handleContextMenu(e)}
      >
        <FileType
          file={file}
          IconName={BsMusicNoteBeamed}
          bgColor={"tw-bg-green-400"}
          textColor={"tw-text-black"}
        />
      </div>
      {openStatus && (
        <FileMenu
          file={file}
          setOpenStatus={setOpenStatus}
          openStatus={openStatus}
          type={"audio"}
        />
      )}
    </>
  );
}

export default audio;
