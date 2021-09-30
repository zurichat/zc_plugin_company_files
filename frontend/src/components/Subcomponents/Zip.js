import React, { useState } from "react";
import { GrDocumentZip } from "react-icons/gr";
import FileType from "./FileType";
import FileMenu from "./FileMenu";

function Zip({ file }) {
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
          IconName={GrDocumentZip}
          bgColor={"tw-bg-green-400"}
          textColor={"text-bg-green-300"}
        />
      </div>
      {openStatus && (
        <FileMenu
          file={file}
          setOpenStatus={setOpenStatus}
          openStatus={openStatus}
          type={"zip"}
        />
      )}
    </>
  );
}

export default Zip;
