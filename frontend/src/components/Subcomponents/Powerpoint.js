import React, { useState } from "react";
import PptImg from "../../../public/Icons/pp-cat.svg"
import FileType from "./FileType";
import FileMenu from "./FileMenu";

function Powerpoint({ file }) {
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
        onTouchStart={(e) => handleContextMenu(e)}
        onTouchEnd={(e) => handleContextMenu(e)}
        onTouchCancel={(e) => handleContextMenu(e)}
        onTouchMove={(e) => handleContextMenu(e)}
      >
        <FileType
          file={file}
          IconName={PptImg}
          bgColor={"tw-bg-file-ppt"}
          textColor={"tw-text-red-700"}
        />
      </div>
      {openStatus && (
        <FileMenu
          file={file}
          setOpenStatus={setOpenStatus}
          openStatus={openStatus}
          type={"powerpoint"}
        />
      )}
    </>
  );
}

export default Powerpoint;
