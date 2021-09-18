import React from "react";
import dayjs from "dayjs";

function Video({ file }) {
  return (
    <>
      <div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
        <img src="/Icons/video.svg" alt="" className="" />
      </div>
      <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
        <span className="w-full truncate text-[14px]">{file.fileName}</span>
        <span className="text-gray-400 text-[13px]">
          {dayjs(file.dateAdded).fromNow()}
        </span>
      </div>
      <div className="options self-start mx-3">
        <img src="/Icons/more-vertical/active.svg" alt="" />
      </div>
    </>
  );
}

export default Video;
