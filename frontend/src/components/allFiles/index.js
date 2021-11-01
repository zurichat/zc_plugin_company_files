import React, { useState, useRef, useLayoutEffect } from "react";
import Files from "./AllFiles";
// import SelectFileModal from "../FileUpload/SelectFileModal";
import { RTCSubscription } from "../../../helpers/RTCSubscription";

import UploadProgressModal from "../FileUpload/UploadProgressModal";
import FileUpload from "../FileUpload/index";
import { useSnackbar } from "react-simple-snackbar";

const AllFiles = () => {
  const [upload, setUpload] = useState(false);
  const [progress, setProgress] = useState(false);
  const [options, setOptions] = useState(false);
  const [demo, setDemo] = useState(false);
  const [newFile, setNewFiles] = useState({ data: {} });
  const [SnackBar] = useSnackbar({
    position: "bottom-center",
    style: { backgroundColor: "#00B87C", color: "#fff" }
  });

  // let progress = useRef(false)

  const [newFiles, setNewFiles] = useState({ data: {} });

  useLayoutEffect(() => {
    RTCSubscription("newFile", (stuff) => {
      console.log({ stuff });
      //setNewFiles(stuff.data);
      console.log({ newFiles });
    });
  }, []);

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
      className={
        (upload ? " overflow-y-hidden" : "") + " w-full py-4 px-10 z-auto"
      }
    >
      <button
        onClick={showOptions}
        className="mt-4 px-3 py-2 text-sm text-green-500 border rounded border-green-500 hover:text-white hover:bg-green-500 outline-none"
      >
        Add File
      </button>
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
      {Object.keys(newFile.data).length > 0 &&
        SnackBar(
          `"${newFile.data.fileName}"` + " uploaded successfully 🎉!",
          10e3
        )}
    </div>
  );
};

export default AllFiles;
