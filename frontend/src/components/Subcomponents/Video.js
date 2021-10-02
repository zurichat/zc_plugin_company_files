import React, { useState } from "react";
import FileMenu from "./FileMenu";
import Vid from "../../../public/Icons/video.svg"
import FileType from "./FileType";

function Video({ file }) {
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
          IconName={Vid}
          bgColor={"tw-bg-green-300"}
          textColor={"tw-text-red-300"}
        />
      </div>
      {openStatus && (
        <FileMenu
          file={file}
          setOpenStatus={setOpenStatus}
          openStatus={openStatus}
          type={"video"}
        />
      )}
    </>
  );
}

export default Video;
