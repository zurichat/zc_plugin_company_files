import React from "react";

function FileOption({ image, altText, name, cmd }) {
  return (
    <div
      className="tw-w-full tw-px-5 tw-h-8 tw-my-2 tw-text-[14px] tw-cursor-pointer tw-text-gray-400 hover:tw-bg-green-500 hover:tw-text-white tw-flex tw-items-center"
      onClick={() => cmd()}
    >
      <img src={image} alt={altText} />
      <span className="tw-ml-4">{name}</span>
    </div>
  );
}

export default FileOption;
