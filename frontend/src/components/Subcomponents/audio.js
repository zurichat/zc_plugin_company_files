import React, { useState } from "react";
import Aud from "../../../public/Icons/music/active.svg";
import dayjs from "dayjs";
import AudioPreview from "../AudioPreview/index"
import FileMenu from "./FileMenu";

function audio({ file }) {
  const [openStatus, setOpenStatus] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    if (e.type === "contextmenu" || e.nativeEvent.which === 3) {
      setOpenStatus(true);
    } else if (e.type === "click" && openStatus) {
      setOpenStatus(false)
    }
  };

  // if openStatus is true and there is a click, then make openStatus false



  return (
    <>
      <div
        className="flex"
        onClick={(e) => handleContextMenu(e)}
        onContextMenu={(e) => handleContextMenu(e)}
      >
        <div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
          <img src={Aud} alt="audio" className="" />
        </div>
        <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
          <span className="w-full truncate text-[14px]">{file.fileName}</span>
          <span className="text-gray-400 truncate text-[13px]">
            {dayjs(file.dateAdded).fromNow()}
          </span>
        </div>
      </div>
      {/* {openStatus && <AudioPreview file={file} setOpenStatus={setOpenStatus} />} */}
      {openStatus && <FileMenu file={file} setOpenStatus={setOpenStatus} type={"audio"} />}
    </>
  );
}

export default audio;
