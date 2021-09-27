import React, { useState } from "react";
import dayjs from "dayjs";
import FileMenu from "./FileMenu";
import Vid from "../../../public/Icons/video.svg";
import VideoPreview from "../VideoPreview/Index";
import { RiVideoLine } from "react-icons/ri";
import { HandleClickEvent } from "./HandleClickEvent";

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
        className="flex  items-center w-52 mx-2"
        onClick={(e) => handleContextMenu(e)}
        onContextMenu={(e) => handleContextMenu(e)}
      >
        <div className="fileIcon w-14 h-12 flex justify-center items-center bg-green-100 rounded-md">
          <RiVideoLine className="text-3xl text-green-500" />
        </div>
        <div className="fileInfo sm:w-20 md:w-30 lg:w-40 overflow-hidden flex flex-col mx-3">
          <span className="w-full truncate text-sm font-semibold">
            {file.fileName}
          </span>
          <span className="text-gray-400 truncate text-sm">
            {dayjs(file.dateAdded).fromNow()}
          </span>
        </div>
      </div>
      {/* {openStatus && <VideoPreview file={file} setOpenStatus={setOpenStatus} />} */}
      {openStatus && (
        <FileMenu file={file} setOpenStatus={setOpenStatus} openStatus={openStatus} type={"video"} />
      )}
    </>
  );
}

export default Video;
