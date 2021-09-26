import React from "react";
import dayjs from "dayjs";

function Powerpoint({ file }) {
  return (
    <>
      <div className="fileIcon w-14 h-14 flex justify-around  bg-red-100 rounded-md">
        <img src="/Icons/docfile.svg" alt="" className="w-7" />
      </div>
      <div className="fileInfo sm:w-20 md:w-30 lg:w-40  flex flex-col mx-3">
        <span className="w-full truncate text-[14px] font-semibold">{file.fileName}</span>
        <span className="text-gray-400 truncate text-[13px]">
          {dayjs(file.dateAdded).fromNow()}
        </span>
      </div>
      <div className="options self-start mx-3">
        <img src="/Icons/more-vertical/active.svg" alt="" />
      </div>
    </>
  );
}

export default Powerpoint;
