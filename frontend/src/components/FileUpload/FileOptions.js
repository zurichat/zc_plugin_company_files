import React, { useState } from "react";
import folder from "../../../public/Icons/folder/active.svg";
import fileText from "../../../public/Icons/file-text/active.svg";
import filePlus from "../../../public/Icons/file-plus/active.svg";
import folderPlus from "../../../public/Icons/folder/active.svg";
import FileOption from "./FileOption";
// import SelectFileModalUpdate from "./SelectFileModalUpdate";

const FileOptions = ({ options, showUploadModal }) => {
  return (
    options && (
      <div className="tw-bg-white tw-mt-2 tw-absolute tw-z-20 tw-w-52 tw--mt-3 tw-text-left tw-shadow-md tw-rounded-sm">
        <FileOption
          image={folder}
          altText={"folder"}
          name={"Folder"}
          cmd={""}
        />
        <FileOption
          image={fileText}
          altText={"document"}
          name={"Document"}
          cmd={""}
        />
        <FileOption
          image={filePlus}
          altText={"file-plus"}
          name={"File Upload"}
          cmd={showUploadModal}
        />
        <FileOption
          image={folderPlus}
          altText={"folder-plus"}
          name={"Folder Upload"}
          cmd={""}
        />
      </div>
    )
  );
};

export default FileOptions;
