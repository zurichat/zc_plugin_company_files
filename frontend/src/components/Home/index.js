import React, { useState, useRef } from "react";
import RecentlyViewed from "./RecentlyViewed";
import Folder from "./Folder";
import Files from "./Files";
import SelectFileModal from "Components/FileUpload/SelectFileModal";
import FileOptions from "Components/FileUpload/FileOptions";
import ShortCut from "./ShortCut";
import UploadProgressModal from "Components/FileUpload/UploadProgressModal";
import FileUpload from "components/FileUpload";
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

  // const show

  return (
    <div
      className={(upload ? " overflow-y-hidden" : "") + "relative py-10 z-auto"}
    >
      <button
        onClick={showOptions}
        className="ml-10 mt-10 px-[14px] py-[10px] text-[12px] text-green-400 border-2 rounded-sm border-green-400 hover:text-white hover:bg-green-400 outline-none"
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
