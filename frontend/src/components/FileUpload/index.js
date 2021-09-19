import React, { useEffect, useState, useRef } from "react";
import SelectFileModal from "./SelectFileModalUpdate";
import UploadProgressModal from "./UploadProgressModal";

const index = ({
  upload,
  hideUploadModal,
  showProgressModal,
  hideProgressModal,
}) => {
  const [files, setFiles] = useState();
  const [progress, setProgress] = useState(false);

  let uploadInit = useRef(false);

  const uploadFiles = () => {
    setProgress(true);
  };

  const handleDrop = (e) => {
    console.log("Dropped");
    const files = e.dataTransfer.files;
    console.log(files, "Drop");
    Object.entries(files).map((file) => {
      console.log(file[1].name);
    });
    console.log(files);
    setFiles(files);
  };

  const handleFileSelection = (e) => {
    console.log(e.target.files, "target");
    const { files } = e.target;
    setFiles(e.target.files);
  };

  const clearFiles = () => {
    setFiles();
  };

  return (
    <div className="index-container">
      {upload && (
        <SelectFileModal
          upload={upload}
          files={files}
          progress={progress}
          uploadFiles={uploadFiles}
          hideUploadModal={hideUploadModal}
          handleDrop={handleDrop}
          handleFileSelection={handleFileSelection}
          clearFiles={clearFiles}
          showProgressModal={showProgressModal}
        />
      )}
      {progress && files && (
        <UploadProgressModal
          progress={progress}
          files={files}
          hideUploadModal={hideUploadModal}
          hideProgressModal={hideProgressModal}
        />
      )}
    </div>
  );
};

export default index;
