import React, { useRef, useState, useEffect } from "react";
import { BsArrowRepeat, BsCheck, BsPause, BsPlay, BsX,  } from "react-icons/bs";
import { FaRegHourglass } from "react-icons/fa";

import UploadFiles from './helpers/upload.helper';

const arrowRepeat = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.887 6.2l-.964-.165A2.5 2.5 0 103.5 11H6v1H3.5a3.5 3.5 0 11.59-6.95 5.002 5.002 0 119.804 1.98A2.501 2.501 0 0113.5 12H10v-1h3.5a1.5 1.5 0 00.237-2.981L12.7 7.854l.216-1.028a4 4 0 10-7.843-1.587l-.185.96z"></path><path fill-rule="evenodd" d="M5 8.854a.5.5 0 00.707 0L8 6.56l2.293 2.293A.5.5 0 1011 8.146L8.354 5.5a.5.5 0 00-.708 0L5 8.146a.5.5 0 000 .708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 6z" clip-rule="evenodd"></path></svg>`
const processing = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.887 6.2l-.964-.165A2.5 2.5 0 103.5 11H6v1H3.5a3.5 3.5 0 11.59-6.95 5.002 5.002 0 119.804 1.98A2.501 2.501 0 0113.5 12H10v-1h3.5a1.5 1.5 0 00.237-2.981L12.7 7.854l.216-1.028a4 4 0 10-7.843-1.587l-.185.96z"></path><path fill-rule="evenodd" d="M5 8.854a.5.5 0 00.707 0L8 6.56l2.293 2.293A.5.5 0 1011 8.146L8.354 5.5a.5.5 0 00-.708 0L5 8.146a.5.5 0 000 .708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 6z" clip-rule="evenodd"></path></svg>`


const ProgressContainer = ({ file, uploader, addToFileMap, deleteCurrentFile, FILE_STATUS }) => {
  const extensionIndex = file.name.lastIndexOf('.');
  const thisElement = useRef();

  useEffect(() => {

    addToFileMap(file, {
      status: FILE_STATUS.PENDING,
      size: file.size,
      percentage: 0,
      uploadedChunkSize: 0,
      element: thisElement.current
    })

  })
  return (
    <div ref={thisElement} style={{ width: "100%"}}>

      <div className="file-name justify-between px-3 my-2" key={file.name} style={{ boxSizing: "border-box", alignItems: "center", color: "grey" }} >
        <div className="w-full" style={{ display: "flex", alignItems: "center" }}>
          <div className="file-status-container w-full flex" style={{ alignItems: "center", maxWidth: "86%" }}>
            <span ref={thisElement} style={{ fontSize: ".9rem", backgroundColor: "purple", padding: ".2rem"}} className="file-status mr-2 inline-block text-center rounded-full text-white">
              <FaRegHourglass style={{ fontSize: ".75rem"}} />
            </span>
            <p style={{ overflowX: "hidden", maxWidth: "80%" }} className="w-3/4 text-[14px] truncate">
              {file.name}
            </p>
          </div>
          <div className="file-actions w-2/12 text-right" style={{ display: "none", marginLeft: "auto", fontSize: ".9rem",  alignItems: "center", minWidth: "14%" }}>
            <span style={{ cursor: "pointer", padding: ".1rem"}} className="pause-button" onClick={() => uploader.abortFileUpload(file)}><BsPause /></span>
            <span style={{ cursor: "pointer", padding: ".1rem"}} className="resume-button ml-2" onClick={() => uploader.resumeFileUpload(file)}><BsPlay /></span>
            <span style={{ cursor: "pointer", padding: ".1rem"}} className="retry-button ml-2" onClick={() => uploader.retryFileUpload(file)}><BsArrowRepeat /></span>
            <span style={{ cursor: "pointer", padding: ".1rem"}} className="clear-button ml-2" 
              onClick={() => {
                uploader.clearFileUpload(file)
                deleteCurrentFile(file);
                thisElement.current.remove();
              }}
            ><BsX /></span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }} >
          <div className="progress-bar-container w-full h-[6px] my-2 mr-2 bg-green-50 rounded-full">
            <div style={{ height: "6px"}} className="progress-bar w-[0px] block rounded-full" ></div>
          </div>
          <span className="file-percentage" style={{ marginLeft: "auto", display: "block", }}>0%</span>
        </div>
      </div>
    </div>
  )
}

const FileProgressWrapper = ({ children }) => {
  return (
    <div>{ children }</div>
  )
}

const ProgressWrapper = ({ files, progress, setTotalUploadedFiles,
  setTotalUploadingFiles,
  setTotalFailedFiles,
  setTotalPausedFiles,
  setTotalChunkSize,
  setTotalUploadedChunkSize }) => {

  const thisElem = useRef();

  const allFiles = new Map();

  let uploader = null;

  const addToFileMap = (file, options) => {
    allFiles.set(file, options)
  }

  const deleteCurrentFile = (file) => {
    allFiles.delete(file)
  }

  const FILE_STATUS = {
    PENDING: 'pending',
    UPLOADING: 'uploading',
    PAUSED: 'paused',
    COMPLETED: 'completed',
    PROCESSING: 'processing',
    FAILED: 'failed'
  };

  const updateFileProgessElement = (fileObject) => {
    const fileElement = fileObject.element;

    const fileStatus = fileElement.querySelector('.file-status');
    const fileActions = fileElement.querySelector('.file-actions');
    const filePercentage = fileElement.querySelector('.file-percentage');
    const progressBar = fileElement.querySelector('.progress-bar');
    const pauseButton = fileElement.querySelector('.pause-button');
    const resumeButton = fileElement.querySelector('.resume-button');
    const retryButton = fileElement.querySelector('.retry-button');
    const clearButton = fileElement.querySelector('.clear-button');

    requestAnimationFrame(() => {
      if (fileObject.status === "completed") {
        fileStatus.style.backgroundColor = "#34D399"
        fileStatus.style.padding = ".2rem"
        fileStatus.style.fontSize = ".9rem"
        fileStatus.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"></path></svg>`
      }
      else if (fileObject.status === "uploading") {
        fileStatus.style.backgroundColor = "#E97F1C"
        fileStatus.style.padding = ".2rem .25rem"
        fileStatus.style.fontSize = "1.05rem"
        fileStatus.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height=".8rem" width=".75rem" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M.5 8a.5.5 0 01.5.5V12a1 1 0 001 1h12a1 1 0 001-1V8.5a.5.5 0 011 0V12a2 2 0 01-2 2H2a2 2 0 01-2-2V8.5A.5.5 0 01.5 8zM5 4.854a.5.5 0 00.707 0L8 2.56l2.293 2.293A.5.5 0 1011 4.146L8.354 1.5a.5.5 0 00-.708 0L5 4.146a.5.5 0 000 .708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 2a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 2z" clip-rule="evenodd"></path></svg>`
      }

      else if (fileObject.status === "paused") {
        fileStatus.style.backgroundColor = "grey"
        fileStatus.style.padding = ".2rem"
        fileStatus.style.fontSize = ".9rem"
        fileStatus.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 3.5a.5.5 0 01.5.5v8a.5.5 0 01-1 0V4a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v8a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clip-rule="evenodd"></path></svg>`
      }
      else if (fileObject.status === "processing") {
        fileStatus.style.backgroundColor = "#34D399"
        fileStatus.style.padding = ".2rem .25rem"
        fileStatus.style.fontSize = ".9rem"
        fileStatus.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.887 6.2l-.964-.165A2.5 2.5 0 103.5 11H6v1H3.5a3.5 3.5 0 11.59-6.95 5.002 5.002 0 119.804 1.98A2.501 2.501 0 0113.5 12H10v-1h3.5a1.5 1.5 0 00.237-2.981L12.7 7.854l.216-1.028a4 4 0 10-7.843-1.587l-.185.96z"></path><path fill-rule="evenodd" d="M5 8.854a.5.5 0 00.707 0L8 6.56l2.293 2.293A.5.5 0 1011 8.146L8.354 5.5a.5.5 0 00-.708 0L5 8.146a.5.5 0 000 .708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5v8a.5.5 0 01-1 0v-8A.5.5 0 018 6z" clip-rule="evenodd"></path></svg>`
      }

      else if (fileObject.status === "pending") {
        fileStatus.style.backgroundColor = "#FFA500"
        fileStatus.style.padding = ".2rem .25rem"
        fileStatus.style.fontSize = ".9rem"
        fileStatus.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M368 48h4c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h4c0 80.564 32.188 165.807 97.18 208C47.899 298.381 16 383.9 16 464h-4c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h360c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12h-4c0-80.564-32.188-165.807-97.18-208C336.102 213.619 368 128.1 368 48zM64 48h256c0 101.62-57.307 184-128 184S64 149.621 64 48zm256 416H64c0-101.62 57.308-184 128-184s128 82.38 128 184z"></path></svg>`
      }
      
      else {
        fileStatus.style.backgroundColor = "#FF6347"
        fileStatus.style.padding = ".2rem"
        fileStatus.style.fontSize = ".9rem"
        fileStatus.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-4.146-3.146a.5.5 0 00-.708-.708L8 7.293 4.854 4.146a.5.5 0 10-.708.708L7.293 8l-3.147 3.146a.5.5 0 00.708.708L8 8.707l3.146 3.147a.5.5 0 00.708-.708L8.707 8l3.147-3.146z" clip-rule="evenodd"></path></svg>`
      }

      fileActions.style.display = "flex"
      filePercentage.textContent = `${fileObject.percentage < 100 ? Number(fileObject.percentage).toFixed(2) : 100}%`;
      // fileStatus.className = `file-status ${fileObject.status}`;
      progressBar.style.width = fileObject.percentage + '%';
      progressBar.style.backgroundColor = fileObject.status === FILE_STATUS.UPLOADING
        ? '#E97F1C' : fileObject.status === FILE_STATUS.FAILED 
        ? '#FF6347' : fileObject.status === FILE_STATUS.PAUSED ? "gray" : '#34D399';

      pauseButton.style.display = fileObject.status === FILE_STATUS.UPLOADING ? 'inline-block' : 'none';
      resumeButton.style.display = fileObject.status === FILE_STATUS.PAUSED ? 'inline-block' : 'none';
      retryButton.style.display = fileObject.status === FILE_STATUS.FAILED ? 'inline-block' : 'none';
      clearButton.style.display = fileObject.status === FILE_STATUS.UPLOADING || fileObject.status === FILE_STATUS.PAUSED
        ? 'inline-block' : 'none';
      
      // updateProgressBox();
    })
  }

  const onAbort = (e, file) => {
    const fileObject = allFiles.get(file);

    fileObject.status = FILE_STATUS.PAUSED;
    updateFileProgessElement(fileObject);
  }

  const onError = (e, file) => {
    console.log(allFiles)
    console.log(file)
    const fileObject = allFiles.get(file);
    

    fileObject.status = FILE_STATUS.FAILED;
    fileObject.percentage = 0;

    updateFileProgessElement(fileObject);
  }

  const onProgress = (e, file) => {
    const fileObject = allFiles.get(file);

    fileObject.status = e.loaded >= e.total ? FILE_STATUS.PROCESSING : FILE_STATUS.UPLOADING;
    fileObject.percentage = e.percentage;
    fileObject.uploadedChunkSize = e.loaded;

    updateFileProgessElement(fileObject);
  }

  const onComplete = (e, file) => {
    const fileObject = allFiles.get(file);

    fileObject.status = FILE_STATUS.COMPLETED;
    fileObject.percentage = 100;

    updateFileProgessElement(fileObject);
  };

  // url: 'http://127.0.0.1:5500/api/v1/files/upload'
  if (progress) {
    uploader = new UploadFiles(files, {
      onAbort,
      onError,
      onProgress,
      onComplete,
      folderId: null
    })
  }

  const ListFiles = () => {
    return [...files].map((file, index) => {

      return <ProgressContainer 
        key={index}
        file={file} 
        addToFileMap={addToFileMap} 
        deleteCurrentFile={deleteCurrentFile}
        uploader={uploader}
        FILE_STATUS={FILE_STATUS}
      />
    })
  }


  [...allFiles].map((fileObject) => {
    if (fileObject.status === FILE_STATUS.FAILED) {
      setTotalFailedFiles(totalFailedFiles => totalFailedFiles += 1);
    } else {
      if (fileObject.status === FILE_STATUS.COMPLETED) {
        setTotalUploadedFiles(totalUploadedFiles => totalUploadedFiles += 1);
      } else if (fileObject.status === FILE_STATUS.PAUSED) {
        setTotalPausedFiles(totalPausedFiles => totalPausedFiles += 1);
      } else {
        setTotalUploadingFiles(totalUploadingFiles => totalUploadingFiles += 1);
      }

      setTotalChunkSize(totalChunkSize => totalChunkSize += fileObject.size);
      setTotalUploadedChunkSize(totalUploadedChunkSize => totalUploadedChunkSize += fileObject.uploadedChunkSize);
    }
  })
  
  return (
    <div >
      {progress && <FileProgressWrapper children={<ListFiles />} />}
    </div>
  )
}

const UploadProgressModal = ({
  progress,
  files,
  hideUploadModal,
  hideProgressModal,
}) => {


  const [ totalUploadedFiles, setTotalUploadedFiles] = useState(0)
  const [ totalUploadingFiles, setTotalUploadingFiles ] = useState(0)
  const [ totalFailedFiles, setTotalFailedFiles ] = useState(0)
  const [ totalPausedFiles, setTotalPausedFiles ] = useState(0)
  const [ totalChunkSize, setTotalChunkSize ] = useState(0)
  const [ totalUploadedChunkSize, setTotalUploadedChunkSize ] = useState(0);

  return (
    <div className="absolute bottom-12 right-12 z-30">
      {progress && (
        <div style={{ minWidth: "400px", padding: "24px", maxWidth: "420px" }} className="w-[420px] h-[380px] px-[24px] py-[24px] bg-white shadow-2xl rounded-2xl">
          <div className="w-full flex items-center justify-between mb-4">
            <div className="text-gray-500">
              <p>Your Uploads</p>
              <div className="flex justify-between text-gray-400 my-1 ">
                <span className="mr-3">40%</span>
                <span style={{ width: "24px" }} className="inline-block h-[24px] mx-1 text-center rounded-full bg-green-500 text-white">
                  &#x2713;
                </span>
                
                <span className=" mx-1">{totalUploadedFiles}</span>
                <span style={{ width: "24px" }} className="inline-block h-[24px] mx-1 text-center rounded-full bg-red-500 text-white">
                
                  &#10005;
                </span>
                <span>{totalFailedFiles}</span>
              </div>
            </div>
            <button
              onClick={hideUploadModal}
              className="px-3 py-1 bg-white border-2 border-green-400 text-green-400 text-[12px] rounded-md"
            >
              Close
            </button>
          </div>
          {files && (
            <div className="w-full mb-4 h-[280px] overflow-y-auto shadow-inner" style={{ overflowX: "visible"}}>
              <ProgressWrapper files={files} progress={progress}
                setTotalUploadedFiles = {setTotalUploadedFiles}
                setTotalUploadingFiles = {setTotalUploadingFiles}
                setTotalFailedFiles = {setTotalFailedFiles}
                setTotalPausedFiles = {setTotalPausedFiles}
                setTotalChunkSize = {setTotalChunkSize}
                setTotalUploadedChunkSize = {setTotalUploadedChunkSize}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadProgressModal;
