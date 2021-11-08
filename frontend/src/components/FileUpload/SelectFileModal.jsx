import React, { useEffect, useRef, useState } from "react";
import uploadImg from "../../../public/Icons/upload/upload.svg";

const SelectFileModal = ({
  upload,
  uploadFiles,
  progress,
  hideUploadModal,
  showProgressModal,
  handleFileSelection,
  handleDrop,
  files,
  clearFiles
}) => {
  const modalStatus = useRef(upload.current);
  const dragArea = useRef(null);
  const dragNdrop = useRef(null);

  const initDragNDropEvents = () => {
    ["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
      dragArea.current.addEventListener(
        eventName,
        (e) => {
          e.preventDefault();
          e.stopPropagation();
        },
        false
      );
    });
  };

  const onEnter = () => {
    ["dragenter", "dragover"].forEach((event) => {
      dragNdrop.current.addEventListener(
        event,
        (e) => {
          console.log("Enter");
          e.target.classList.add("bg-green-200");
        },
        false
      );
    });
  };

  const onLeave = () => {
    ["dragleave", "drop"].forEach((ev) => {
      dragNdrop.current.addEventListener(ev, (e) => {
        console.log("Left");
        e.target.classList.remove("bg-green-200");
      });
    }, false);
  };

  const closeModal = () => {
    console.log(modalStatus);
    modalStatus.current = false;
    console.log(modalStatus.current);
  };

  useEffect(() => {
    initDragNDropEvents();
    onEnter();
    onLeave();

    dragNdrop.current.addEventListener("drop", handleDrop, false);
  }, []);

  if (upload) {
    return (
      <div
        className={`${
          progress ? "tw-bg-transparent tw-w-auto " : "tw-bg-black tw-w-full "
        }tw-h-screen tw-fixed tw-z-30 tw-top-0 tw-left-0 tw-bg-opacity-75 tw-overflow-y-hidden`}
      >
        {!progress && (
          <div
            ref={dragArea}
            className="tw-absolute tw-w-4/5 sm:tw-w-96 tw-h-4/5 tw-px-5 tw-py-6 tw-top-1/2 tw-left-1/2 tw-rounded-lg tw-bg-white tw-bg-opacity-100 tw-transform tw--translate-x-1/2 tw--translate-y-1/2 tw-shadow-lg tw-drop-shadow-lg tw-transition-all tw-duration-300"
          >
            <div className="modalHeader tw-my-2 tw-flex tw-justify-between tw-text-gray-400 tw-border-b">
              <span className="tw-text-[20px]">Load File(s)</span>
              <span
                onClick={hideUploadModal}
                className="tw-capitalize tw-text-2xl hover:tw-text-red-600 tw-cursor-pointer "
              >
                &#10005;
              </span>
            </div>
            <div id="uploadBtn tw-my-2">
              <label className="tw-flex tw-justify-between tw-bg-white tw-text-gray-600 ">
                <input
                  type="file"
                  name=""
                  id=""
                  multiple
                  className="tw-hidden"
                  onChange={handleFileSelection}
                />

                <span className="tw-border tw-border-green-100 hover:tw-text-white tw-px-3 tw-py-2 hover:tw-bg-green-500 tw-rounded-md tw-text-center tw-cursor-pointer">
                  Choose Files
                </span>
                {files && <span>{`${files.length} selected`}</span>}
              </label>
            </div>

            {!files ? (
              <div
                ref={dragNdrop}
                className="tw-relative dragNdrop tw-w-full tw-h-3/5 tw-my-2 tw-border-2 tw-border-dashed tw-flex tw-overflow-y-auto"
              >
                <div className="tw-m-auto">
                  <img
                    src={uploadImg}
                    alt=""
                    className="tw-mx-auto tw-w-1/2 tw-h-1/2"
                  />
                  <p className="tw-text-gray-400 tw-text-[25px]">
                    Drop Files Here
                  </p>
                </div>
              </div>
            ) : (
              <div className="tw-w-auto tw-h-3/5 tw-relative tw-p-4 tw-flex tw-flex-col tw-shadow-inner tw-my-2 tw-overflow-y-auto">
                {[...files].map((file) => (
                  <div
                    className="tw-flex tw-justify-between tw-items-center"
                    key={file.name}
                  >
                    <div className="tw-w-[350px] tw-truncate">{file.name}</div>
                    <div>{(file.size / 1000000).toFixed(2)}MB</div>
                  </div>
                ))}
              </div>
            )}
            <div className="uploadActions tw-h-auto tw-flex tw-justify-end tw-border-t tw-mt-6 tw-pt-6 tw-text-sm">
              <button
                onClick={uploadFiles}
                className="tw-mx-4 tw-px-4 tw-py-2 tw-bg-green-500 tw-text-white tw-rounded-sm"
              >
                Upload
              </button>
              <button
                onClick={clearFiles}
                className="tw-px-4 tw-py-2  tw-border tw-border-green-100 tw-text-green-500 tw-text-sm hover:tw-bg-green-500 hover:tw-text-white tw-transition-colors tw-duration-300"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default SelectFileModal;
