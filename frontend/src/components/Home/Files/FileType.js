import React from "react";

function FileType({ bgColor, textColor, IconName }) {
  return (
    <>
      <span
        className={`tw-mr-3 tw-w-14 tw-h-14 tw-p-[10px] tw-flex tw-justify-center tw-items-center ${bgColor} tw-rounded-md`}
      >
        <img src={IconName} alt="icon" className={`tw-text-2xl ${textColor}`} />
      </span>
    </>
  );
}

export default FileType;
