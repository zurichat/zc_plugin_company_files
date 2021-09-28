import React from "react";
import dayjs from "dayjs"

function FileType({file, IconName}) {
  return (
    <>
      <div className="fileIcon tw-w-14 tw-h-12 tw-flex tw-justify-center tw-items-center tw-bg-red-100 tw-rounded-md">
        <IconName className="tw-text-2xl tw-text-red-500" />
      </div>
      <div className="fileInfo sm:tw-w-20 md:tw-w-30 lg:tw-w-40 tw-overflow-hidden tw-flex tw-flex-col tw-mx-3">
        <span className="tw-w-full tw-truncate tw-text-sm tw-font-semibold">
          {file.fileName}
        </span>
        <span className="tw-text-gray-400 tw-truncate tw-text-sm">
          {dayjs(file.dateAdded).fromNow()}
        </span>
      </div>
    </>
  );
}

export default FileType;
