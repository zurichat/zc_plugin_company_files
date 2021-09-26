import React, { useState, useRef } from "react";
import RecentlyViewed from "./RecentlyViewed";
import Folder from "./Folder/index";
import Files from "./Files/index";
// import SelectFileModal from "../FileUpload/SelectFileModal";
import FileOptions from "../FileUpload/FileOptions";
import ShortCut from "./ShortCut";

import UploadProgressModal from "../FileUpload/UploadProgressModal";
import FileUpload from "../FileUpload/index";

const Index = () => {
  const [upload, setUpload] = useState(false);
  const [progress, setProgress] = useState(false);
  const [options, setOptions] = useState(false);
  const [demo, setDemo] = useState(false);
  // let progress = useRef(false)

  const showOptions = (e) => {
    setOptions(!options);
    e.stopPropagation();
    document.addEventListener("click", hideOptions);
  };

  const hideOptions = (event) => {
    setOptions(false);
    event.stopPropagation();
    document.removeEventListener("click", hideOptions);
  };

  const showUploadModal = () => {
    setUpload(!upload);
  };

  const hideUploadModal = () => {
    setUpload(!upload);
  };

  const showProgressModal = () => {
    hideUploadModal();
    setProgress(true);
    setDemo(true);
    console.log({ Progress: progress, Demo: demo });
  };

  const hideProgressModal = () => {
    setProgress(false);
  };

  return (
    <div
      className={(upload ? " overflow-y-hidden" : "") + " w-full py-10 z-auto"}
    >
      <button
        onClick={showOptions}
        className="ml-10 mt-10 px-3 py-2 text-sm text-green-400 border-2 rounded-sm border-green-400 hover:text-white hover:bg-green-400 outline-none"
      >
        Add File
      </button>
      <FileOptions options={options} showUploadModal={showUploadModal} />
      <ShortCut />
      <RecentlyViewed />
      <Folder />
      <Files />
      {upload && (
        <FileUpload
          upload={upload}
          progress={progress}
          hideUploadModal={hideUploadModal}
          showProgressModal={showProgressModal}
          hideProgressModal={hideProgressModal}
        />
      )}
    </div>
  );
};

export default Index;
