import React from "react";
import dayjs from "dayjs";

function FileType({ file, IconName, bgColor, textColor }) {
  return (
    <>
      <div
        className={`fileIcon tw-p-3 tw-w-14 tw-h-14 tw-flex tw-justify-center tw-items-center ${bgColor} tw-rounded-md`}
      >
        <img src={IconName} alt="icon" className={`tw-text-2xl ${textColor}`} />
      </div>
      <div className="fileInfo tw-w-3/5 sm:tw-w-20 md:tw-w-30 lg:tw-w-40 tw-overflow-hidden tw-flex tw-flex-col tw-mx-3">
        <span className="tw-w-full tw-truncate tw-text-sm tw-font-semibold">
          {file.fileName.slice(0, file.fileName.lastIndexOf("."))}
        </span>
        <span className="tw-text-gray-400 tw-truncate tw-text-sm">
          {dayjs(file.dateAdded).fromNow()}
        </span>
      </div>
    </>
  );
}

export default FileType;
