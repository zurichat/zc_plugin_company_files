import React from "react";
import dayjs from "dayjs";
import ZipImg from "../../../public/Icons/zip.svg";

function Zip({ file }) {
  return (
    <>
      <div className="fileIcon tw-w-14 tw-h-14 tw-flex tw-justify-around tw-bg-red-100 tw-rounded-md">
        <img src={ZipImg} alt="" className="tw-w-7" />
      </div>
      <div className="fileInfo sm:tw-w-20 md:tw-w-30 lg:tw-w-40 tw-flex tw-flex-col tw-mx-3">
        <span className="tw-w-full tw-truncate tw-text-[14px] tw-font-semibold">{file.fileName}</span>
        <span className="ttw-ext-gray-400 tw-truncate tw-text-[13px]">
          {dayjs(file.dateAdded).fromNow()}
        </span>
      </div>
      <div className="options tw-self-start tw-mx-3">
        <img src="/Icons/more-vertical/active.svg" alt="" />
      </div>
    </>
  );
}

export default Zip;
