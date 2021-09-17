import React,{useState,useRef} from "react";
import SelectFileModal from "./SelectFileModal";
import UploadProgressModal from "./UploadProgressModal";

const index = ({
  upload,
  progress,
  hideUploadModal,
  showProgressModal,
  hideProgressModal,
}) => {
  const [files, setFiles] = useState();
//   const [progress, setProgress] = useState(false);


  const showUploadModal = () => {
    setUpload(!upload);
  };

  const handleDrop = (e) => {
    console.log("Dropped");
    const files = e.dataTransfer.files;
    console.log(files,'Drop');   
    Object.entries(files).map((file) => {
      console.log(file[1].name);
    });
    console.log(files);
    setFiles(files);
  };

  const handleFileSelection = (e) => {
    // if(files){
    //   clearFiles();
    // }
    console.log(e.target.files,'target');
    const { files } = e.target;
    setFiles(e.target.files);
  };
  return (
    <div className="">
      {upload && (
        <SelectFileModal
          upload={upload}
          files={files}
          progress={progress}
          hideUploadModal={hideUploadModal}
          showProgressModal={showProgressModal}
          hideProgressModal={hideProgressModal}
          handleDrop={handleDrop}
          handleFileSelection={handleFileSelection}
        />
      )}
      {progress && (
        <UploadProgressModal
          progress={progress}
          showProgressModal={showProgressModal}
          files={files}
        />
      )}
    </div>
  );
};

export default index;
