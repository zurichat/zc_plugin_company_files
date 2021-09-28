import React, { useState, useRef, useLayoutEffect } from "react";
import Files from "./allFiles";
// import SelectFileModal from "../FileUpload/SelectFileModal";
import RealTime from "../../helpers/realtime.helper";


import UploadProgressModal from "../FileUpload/UploadProgressModal";
import FileUpload from "../FileUpload/index";
import SnackBar from "reuse-react-snackbar";

const AllFiles = () => {
  const [upload, setUpload] = useState(false);
  const [progress, setProgress] = useState(false);
  const [options, setOptions] = useState(false);
  const [demo, setDemo] = useState(false);
  const [newFile, setNewFile] = useState({ data: {} });

  // let progress = useRef(false)

  useLayoutEffect(() => {
    const fetchNewData = () => {
      RealTime.subscribe("newFile", "", (data) => setNewFile(data));
    };
    fetchNewData();
    console.log(newFile);
  }, [newFile]);

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
      {Object.keys(newFile.data).length && (
        <SnackBar
          message={newFile.data.fileName + " added successfully"}
          mode="SUCCESS"
          open={true}
          timeout={10000}
          style={{
            textStyle: {
              color: "white",
            },
            buttonStyle: {
              backgroundColor: "white",
              color: "black",
            },
            containerStyle: {
              background: "grey",
              boxShadow: "black 6px 7px 12px -4px",
            },
          }}
        />
      )}
    </div>
  );
};

export default AllFiles;
