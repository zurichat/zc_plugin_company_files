import React, { useState } from "react";
import { GrDocumentExcel } from "react-icons/gr";
import FileType from "./FileType";
import FileMenu from "./FileMenu";

function Excel({ file }) {
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
          IconName={GrDocumentExcel}
          bgColor={"tw-bg-green-400"}
        />
      </div>
      {openStatus && (
        <FileMenu
          file={file}
          setOpenStatus={setOpenStatus}
          openStatus={openStatus}
          type={"excel"}
        />
      )}
    </>
  );
}

export default Excel;
