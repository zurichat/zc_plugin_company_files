import React, { useState } from "react";
import dayjs from "dayjs";
import FileMenu from "./FileMenu";
import Vid from "../../../public/Icons/video.svg";
import VideoPreview from "../VideoPreview/Index";

function Video({ file }) {
  const [openStatus, setOpenStatus] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
    if (e.type === "contextmenu" || e.nativeEvent.which === 3) {
      setOpenStatus(true);
    } else if (e.type === "click") {
      setOpenStatus(false);
    }
  };

  return (
    <>
      <div
        className="flex"
        onClick={(e) => handleContextMenu(e)}
        onContextMenu={(e) => handleContextMenu(e)}
      >
        <div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
          <img src={Vid} alt="Video icon" className="" />
        </div>
        <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
          <span className="w-full truncate text-[14px]">{file.fileName}</span>
          <span className="text-gray-400 truncate text-[13px]">
            {dayjs(file.dateAdded).fromNow()}
          </span>
        </div>
      </div>
      {/* {openStatus && <VideoPreview file={file} setOpenStatus={setOpenStatus} />} */}
      {openStatus && (
        <FileMenu file={file} setOpenStatus={setOpenStatus} type={"video"} />
      )}
    </>
  );
}

export default Video;
