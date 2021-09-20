import React, { useState } from "react";
// import SelectFileModalUpdate from "./SelectFileModalUpdate";

const FileOptions = ({ options, showUploadModal }) => {


  return (
    options && (
      <div className="bg-white w-[235px] ml-10 -mt-3 text-left shadow-md rounded-sm">
        <div className="w-full px-5 h-8 my-2 text-[14px] cursor-pointer text-gray-400 hover:bg-green-400 hover:text-white flex items-center">
          <img src="/Icons/folder/active.svg" alt="" />
          <span className="ml-4">Folder</span>
        </div>
        <div className="w-full h-8 px-5 my-2 text-[14px] cursor-pointer text-gray-400 hover:bg-green-400 hover:text-white flex items-center">
          <img src="/Icons/file-text/active.svg" alt="" />
          <span className="ml-4">Document</span>
        </div>
        <div
          onClick={showUploadModal}
          className="w-full h-8 px-5 my-2 text-[14px] cursor-pointer text-gray-400 hover:bg-green-400 hover:text-white flex items-center"
        >
          <img src="/Icons/file-plus/active.svg" alt="" />
          <span className="ml-4">File Upload</span>
        </div>
        <div className="w-full h-8 px-5 my-2 text-[14px] cursor-pointer text-gray-400 hover:bg-green-400 hover:text-white flex items-center">
          <img src="/Icons/file-plus/active.svg" alt="" />
          <span className="ml-4">Folder Upload</span>
        </div>
      </div>
    )
  );
};

export default FileOptions;
