import React from "react";

const FileOptions = ({ options }) => {
  return (
    options && (
      <div className="absolute bg-white w-40 top-[34px] left-0 text-left">
        <div className="w-full px-5 my-2 text-[14px] text-gray-400 hover:bg-green-400 hover:text-white">
          Upload File
        </div>
        <div className="w-full px-5 my-2 text-[14px] text-gray-400 hover:bg-green-400 hover:text-white">
          Upload Folder
        </div>
        <div className="w-full px-5 my-2 text-[14px] text-gray-400 hover:bg-green-400 hover:text-white">
          Download File
        </div>
      </div>
    )
  );
};

export default FileOptions;
