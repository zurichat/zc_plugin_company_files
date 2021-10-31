import React, { useEffect, useRef, useState } from "react";

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
  let modalStatus = useRef(upload.current);
  let dragArea = useRef(null);
  let dragNdrop = useRef(null);

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
        className={
          (progress ? "bg-transparent w-auto " : "bg-black w-full ") +
          "h-screen absolute top-0 left-0 bg-opacity-75 overflow-y-hidden"
        }
      >
        {!progress && (
          <div
            ref={dragArea}
            className="absolute px-[18px] py-[22px] min-w-[400px] max-w-[650px] h-4/6 top-1/2 left-1/2 rounded-[12px] bg-white bg-opacity-100 transform -translate-x-1/2 -translate-y-1/2 shadow-lg drop-shadow-lg"
          >
            <div className="modalHeader my-2 flex justify-between text-gray-400 border-b">
              <span className="text-[20px]">Load File(s)</span>
              <span
                onClick={hideUploadModal}
                className="capitalize text-2xl hover:text-red-600 cursor-pointer "
              >
                &#10005;
              </span>
            </div>
            <div id="uploadBtn my-2">
              <label className=" flex justify-between bg-white text-gray-600 ">
                <input
                  type="file"
                  name=""
                  id=""
                  multiple
                  className="hidden"
                  onChange={handleFileSelection}
                />
                <span className="hover:text-white max-h-[200px] px-[14px] py-[8px] hover:bg-green-500 rounded-md text-center cursor-pointer">
                  Choose Files
                </span>
                {files && <span>{`${files.length} selected`}</span>}
              </label>
            </div>

            {!files ? (
              <div
                ref={dragNdrop}
                className="relative dragNdrop my-2 border-2 border-dashed  w-full h-1/2 flex overflow-y-auto"
              >
                <div className="m-auto">
                  <img
                    src="/Icons/upload/upload.svg"
                    alt=""
                    className="mx-auto"
                  />
                  <p className="text-gray-400 text-[25px]">Drop Files Here</p>
                </div>
              </div>
            ) : (
              <div className="w-auto max-h-[200px] relative  p-4 flex flex-col shadow-inner my-2 overflow-y-auto">
                {Object.entries(files).map((file) => (
                  <div
                    className="flex justify-between items-center"
                    key={file[1].name}
                  >
                    <div className="w-[350px] truncate">{file[1].name}</div>
                    <div>{(file[1].size / 1000000).toFixed(3)}MB</div>
                  </div>
                ))}
              </div>
            )}
            <div className="uploadActions flex justify-end border-t mt-6 pt-6 text-[12px]">
              <button
                onClick={uploadFiles}
                className="mx-4 px-[14px] py-[8px] bg-green-500 text-white rounded-sm"
              >
                Upload
              </button>
              <button
                onClick={clearFiles}
                className=" px-[14px] py-[8px]  border border-green-100 text-green-500 text-[12px]"
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
