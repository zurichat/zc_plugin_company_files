import React from "react";
import dayjs from "dayjs";
import Vertical from "../../../public/Icons/more-vertical/active.svg"
import Vid from "../../../public/Icons/video.svg"

function Video({ file }) {
  return (
    <>
      <div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
        <img src={Vid} alt="Video icon" className="" />
      </div>
      <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
        <span className="w-full truncate text-[14px]">{file.fileName}</span>
        <span className="text-gray-400 text-[13px]">
          {dayjs(file.dateAdded).fromNow()}
        </span>
      </div>
    </>
  );
}

export default Video;
