import React, {useState } from "react";
import { Link } from "react-router-dom";
import FileOptions from "../../FileUpload/FileOptions";
import FileUpload from "../../FileUpload/index";
import { FaArrowLeft } from "react-icons/fa/index";
import { BsArrowUpDown, BsViewList } from "react-icons/bs";
import { BsGrid3X2 } from "react-icons/bs";
import UploadProgressModal from "../../FileUpload/UploadProgressModal";
import { HandleClickEvent } from "../../Subcomponents/HandleClickEvent";
import SortMenuButton from "../../Subcomponents/MenuButton";

function FileHeader({
  view,
  setView,
  sortByDate,
  sortByName,
  sortBySize,
  sortByType,
  folderTitle,
}) {
  const [upload, setUpload] = useState(false);
  const [progress, setProgress] = useState(false);
  const [options, setOptions] = useState(false);
  const [demo, setDemo] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);

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

  const goBack = () => {
    const currentState = history.state;
    history.pushState(currentState, "", "/companyfiles/all-folders");
  };

  return (
    <>
      {/* <button
        onClick={showOptions}
        className="tw-mt-4 tw-px-3 tw-py-2 tw-text-sm tw-text-green-500 tw-border tw-rounded tw-border-green-500 hover:tw-bg-green-500 hover:tw-text-white tw-outline-none"
      >
        Add New
      </button> */}
      <FileOptions options={options} showUploadModal={showUploadModal} />
      <div className="tw-w-full tw-flex tw-justify-between tw-items-center tw-mt-2">
        <h2 className="tw-text-lg tw-truncate tw-font-semibold tw-text-gray-900 tw-flex tw-flex-row">
          <FaArrowLeft
            className="tw-text-lg tw-text-black tw-mr-3 tw-self-center"
            onClick={() => goBack()}
          />
          {
            `${folderTitle}`
          }
        </h2>
        {/*
        <div className="tw-flex tw-items-center tw-relative">
          <BsArrowUpDown
            title="sort"
            className="tw-text-gray-400 tw-text-lg tw-mx-2 hover:tw-text-gray-500 tw-cursor-pointer"
            onClick={() => setOpenStatus(true)}
          />
          <HandleClickEvent
            show={openStatus}
            onClickOutside={() => {
              setOpenStatus(false);
            }}
          >
            <div className="tw-bg-white tw-py-3 tw-w-44 tw-absolute tw--left-1/3 md:tw--left-3/4 tw-z-20 tw-rounded-sm">
              <SortMenuButton name={"Sort By Name"} cmd={sortByName} />
              <SortMenuButton name={"Sort By Date"} cmd={sortByDate} />
              <SortMenuButton name={"Sort By Size"} cmd={sortBySize} />
              <SortMenuButton name={"Sort By Type"} cmd={sortByType} />
            </div>
          </HandleClickEvent>
          {view == "grid" ? (
            <BsGrid3X2
              title="grid"
              className="tw-text-gray-400 tw-mx-2 tw-text-2xl hover:tw-text-gray-500 tw-cursor-pointer"
              onClick={() => setView("list")}
            />
          ) : (
            <BsViewList
              title="list"
              className="tw-text-gray-400 tw-mx-2 tw-text-2xl hover:tw-text-gray-500 tw-cursor-pointer"
              onClick={() => setView("grid")}
            />
          )}
          <Link
            to="/activities"
            className="tw-mx-4 tw-truncate tw-py-2 tw-px-4 tw-bg-green-500 tw-text-white tw-text-sm tw-rounded hover:tw-bg-green-600"
          >
            See Activities
          </Link>
        </div>
          */}
      </div>
      {upload && (
        <FileUpload
          upload={upload}
          progress={progress}
          hideUploadModal={hideUploadModal}
          showProgressModal={showProgressModal}
          hideProgressModal={hideProgressModal}
        />
      )}
    </>
  );
}

export default FileHeader;
