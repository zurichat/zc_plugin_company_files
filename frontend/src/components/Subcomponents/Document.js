import React, { useState } from "react";
import DocImg from "../../../public/Icons/doc-cat.svg";
import FileType from "./FileType";
import FileMenu from "./FileMenu";

function Document({ file }) {
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
          IconName={DocImg}
          bgColor="tw-bg-file-doc"
          textColor="tw-text-blue-600"
        />
      </div>
      {openStatus && (
        <FileMenu
          file={file}
          setOpenStatus={setOpenStatus}
          openStatus={openStatus}
          type="word"
        />
      )}
    </>
  );
}

export default Document;
