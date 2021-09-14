import React, { useEffect, useRef, useState } from "react";

const SelectFileModal = ({ upload }) => {
  const [files, setFiles] = useState();
  const [uploadState, setUploadState] = useState(upload);
  // let files = useRef();
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

  const handleDrop = (e) => {
    console.log("Dropped");
    const fileData = e.dataTransfer;
    const files = fileData.files;
    Object.entries(files).map((file) => {
      console.log(file[1].name);
    });
    console.log(files);
    setFiles(files);
  };

  const handleFileSelection = (e) => {
    const { files } = e.target;
    setFiles(files);
  };

  const handleCancel = () => {
    setFiles();
  };

  const closeModal = () => {
    setUploadState(false);
    console.log();
  };

  useEffect(() => {
    initDragNDropEvents();
    onEnter();
    onLeave();

    dragNdrop.current.addEventListener("drop", handleDrop, false);
  }, []);

  if (upload) {
    return (
      <div className="w-full h-screen absolute top-0 left-0 bg-black bg-opacity-75">
        <div
          ref={dragArea}
          className="absolute px-[18px] py-[22px] w-[650px] h-[660px] top-1/2 left-1/2 rounded-[12px] bg-white bg-opacity-100 transform -translate-x-1/2 -translate-y-1/2 shadow-lg drop-shadow-lg"
        >
          <div className="modalHeader my-2 flex justify-between text-gray-400 border-b">
            <span className="text-[20px]">Load File(s)</span>
            <span
              onClick={closeModal}
              className="capitalize text-2xl hover:text-red-600 cursor-pointer "
            >
              &#10005;
            </span>
          </div>
          <div id="uploadBtn my-2">
            <label className="inline-block min-w-max px-[14px] py-[8px] bg-white text-green-600 border hover:text-white hover:bg-green-500 border-green-600 rounded-md text-center cursor-pointer">
              <input
                type="file"
                name=""
                id=""
                multiple
                className="hidden"
                onChange={handleFileSelection}
              />
              Choose Files...
            </label>
          </div>
          {!files ? (
            <div
              ref={dragNdrop}
              className="dragNdrop my-2 border-2 border-dashed  w-[612px] h-[430px] flex"
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
            <div className="w-[612px] h-[430px]  p-2 flex flex-col  border-2 my-2 border-dashed border-green-300">
              {Object.entries(files).map((file) => (
                <div
                  className="flex justify-between items-center"
                  key={file[1].lastModified}
                >
                  <div className="w-[350px] truncate">{file[1].name}</div>
                  <div>{(file[1].size / 1000000).toFixed(3)}MB</div>
                </div>
              ))}
            </div>
          )}
          <div className="uploadActions flex justify-end border-t mt-6 pt-6 text-[12px]">
            <button className="mx-4 px-[14px] py-[8px] bg-green-500 text-white rounded-sm">
              Upload
            </button>
            <button
              onClick={handleCancel}
              className=" px-[14px] py-[8px]  border border-green-100 text-green-500 text-[12px]"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default SelectFileModal;
