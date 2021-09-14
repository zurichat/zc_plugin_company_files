import React, { useState } from "react";
import RecentlyViewed from "./RecentlyViewed";
import Folder from "./Folder";
import Files from "./Files";
import SelectFileModal from "Components/FileUpload/SelectFileModal";
import FileOptions from "Components/FileUpload/FileOptions";
import ShortCut from "./ShortCut";
const Index = () => {
  const [upload, setUpload] = useState(false);
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

  // const show

  return (
    <div className="relative mt-10 z-auto">
      <button
        onClick={showOptions}
        className="relative ml-10 px-[14px] py-[10px] text-[12px] text-green-600 border-2 rounded-sm border-green-600 hover:text-white hover:bg-green-600"
      >
        Add File
        <FileOptions options={options} />
      </button>

    <div>
      <ShortCut />
      <RecentlyViewed />
      <Folder />
      <Files />
      {upload && <SelectFileModal className="" upload={upload} />}
    </div>
  );
};

export default Index;
