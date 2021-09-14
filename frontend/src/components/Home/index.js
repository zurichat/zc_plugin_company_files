import React, { useState } from "react";
import RecentlyViewed from "./RecentlyViewed";
import Folder from "./Folder";
import Files from "./Files";
import SelectFileModal from "Components/FileUpload/SelectFileModal";
import FileOptions from "Components/FileUpload/FileOptions";
import ShortCut from "./ShortCut";
const Index = () => {
  const [upload, setUpload] = useState(false);
  const [progress, setProgress] = useState(false);
  const [options, setOptions] = useState(false);

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
    setProgress(!progress);
  };

  const showProgressModal = () => {
    // hideProgressModal();
    setProgress(!progress);
    console.log(progress);
  };

  const hideProgressModal = () => {
    setProgress(!progress);
    setUpload(!upload);
  };

  // const show

  return (
    <div className="relative py-10 z-auto">
      <button
        onClick={showUploadModal}
        className="relative ml-10 mt-10 px-[14px] py-[10px] text-[12px] text-green-400 border-2 rounded-sm border-green-400 hover:text-white hover:bg-green-400 outline-none"
      >
        Add File
        <FileOptions options={options} />
      </button>
      <ShortCut />
      <RecentlyViewed />
      <Folder />
      <Files />
      {upload && (
        <SelectFileModal
          className=""
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
