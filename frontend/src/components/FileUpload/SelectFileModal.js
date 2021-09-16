import React, { useEffect, useRef, useState } from "react";

import axios from 'axios';

class UploadFiles {
  constructor (files, options) {
    this.fileRequests = new WeakMap()
    this.endpoints = {
      UPLOAD: 'http://127.0.0.1:5500/api/v1/files/upload',
      UPLOAD_STATUS: 'http://127.0.0.1:5500/api/v1/files/uploadStatus',
      UPLOAD_REQUEST: 'http://127.0.0.1:5500/api/v1/files/uploadRequest'
    }

    this.defaultOptions = {
      url: this.endpoints.UPLOAD,
      fileId: null,
      folderId: null,
      startingByte: 0,
      onAbort() { },
      onError() { },
      onProgress() { },
      onComplete() { }
    }

    this.files = files;
    this.options = options;

    // console.log({ ...this.defaultOptions, ...options })
    [...this.files].map((file, index) => {
      this.uploadFile(file, { ...this.defaultOptions, ...this.options })
    })
    
  }

  uploadChunks = (file, options) => {

    const payload = new FormData();
    const request = new XMLHttpRequest();
    const chunk = file.slice(options.startingByte);

    payload.append("chunk", chunk, file.name);
    payload.append("fileId", options.fileId)

    request.open("POST", options.url, true);

    request.setRequestHeader("X-File-Id", options.fileId)
    if (options.folderId) request.setRequestHeader("X-Folder-Id", options.folderId)
    request.setRequestHeader('Content-Range', `bytes=${options.startingByte}-${options.startingByte + chunk.size}/${file.size}`)
    
    request.onload = event => {
      (request.status === 200 || request.status === 201)
      ? options.onComplete(event, file) : options.onError(event, file)
    }

    request.onerror = event => options.onError(event, file);
    request.ontimeout = event => options.onError(event, tile);

    request.upload.onprogress = event => {
      const loaded = options.startingByte + event.loaded;
      options.onProgress({
        ...event,
        loaded,
        total: file.size,
        percentage: Math.round((loaded * 100) / file.size)
      }, file)
    }

    request.onabort = event => options.onAbort(event, file)

    this.fileRequests.get(file).request = request;

    request.send(payload)

  } 

  uploadFile = (file, options) => {
    const fileInfoRequest = new Request('http://127.0.0.1:5500/api/v1/files/uploadRequest', {
      method: 'POST',
      body: JSON.stringify({ fileName: file.name }),
      headers: new Headers({ 'Content-Type': 'application/json' })
    });

    fetch(fileInfoRequest)
      .then(res => res.json())
      .then(({ data: { fileId }}) => {
        options = { ...options, fileId };
        this.fileRequests.set(file, { request: null, options });

        this.uploadChunks(file, options);
      }).catch(e => {
				options.onError({...e, file})
			})
  }


  abortFileUpload = file => {
    const fileRequest = this.fileRequests.get(file);

    if (fileRequest && fileRequest.request) {
      fileRequest.request.abort();
      return true;
    } else return false;
  }

  retryFileUpload = file => {
    const fileRequest = this.fileRequests.get(file);

    if (fileRequest) {
      return fetch(`${this.endpoints.UPLOAD_STATUS}?fileName=${file.name}&fileId=${fileRequest.options.fileId}`)
      .then(res => res.json())
      .then(response => {
        this.uploadChunks(file, { ...fileRequest.options, startingByte: Number(response.totalChunkUploaded)});
    
      })
      .catch(() => {
        this.uploadChunks(file, fileRequest.options)
      })
    }
  }

  clearFileUpload = async file => {
    const fileRequest = this.fileRequests.get(file);

    if (fileRequest) {

      await this.abortFileUpload(file);
      fileRequest.delete(file);
      return true;

    } else return false;
  }

  resumeFileUpload = file => {
    const fileRequest = this.fileRequests.get(file);

    if (fileRequest) {
      return fetch(`${this.endpoints.UPLOAD_STATUS}?fileName=${file.name}&fileId=${fileRequest.options.fileId}`)
      .then(res => res.json())
      .then(response => {
        this.uploadChunks(file, { ...fileRequest.options, startingByte: Number(response.totalChunkUploaded)});
    
      })
      .catch(error => {
        fileRequest.options.onError({...error, file})
      })
    }
  }

}

const ProgressContainer = ({ file, uploader, addToFileMap, deleteCurrentFile, FILE_STATUS }) => {
  const thisElement = useRef();
  const extensionIndex = file.name.lastIndexOf('.');

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
    <div ref={thisElement} className="w-full">
      <div className="file-status-container " style={{
                display: "flex", 
                justifyContent: "flex-end", 
                padding: ".3rem",
                marginBottom: "-2rem",
                zIndex: 30
                }}>

        <span className="file-status" style={{marginRight: ".5rem"}}>{FILE_STATUS.PENDING}</span>
        <span className="file-percentage">0%</span>
      </div>
      <p className="file-name text-[14px]">{file.name}</p>
      <div className="progress-bar-container w-full h-[6px] my-4 bg-black-50 rounded-full">
        <div className="progress-bar block w-[200px] h-full bg-black-400 rounded-full"></div>
      </div>

      <div className="file-actions">
        <button style={{ marginRight: ".4rem"}} className="pause-button"
          onClick={() => uploader.abortFileUpload(file)}
        >
          <span className="title">Pause</span>
        </button>
        <button style={{ marginRight: ".4rem"}} className="resume-button"
          onClick={() => uploader.resumeFileUpload(file)}
        >
          <span className="title">Resume</span>
        </button>
        <button style={{ marginRight: ".4rem"}} className="retry-button"
          onClick={() => uploader.retryFileUpload(file)}
        >
          <span className="title">Retry</span>
        </button>
        <button className="clear-button"
          onClick={() => {
            uploader.clearFileUpload(file)
            deleteCurrentFile(file);
            thisElement.current.remove();
          }}
        >
          <span className="title">Clear</span>
        </button>
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
    const filePercentage = fileElement.querySelector('.file-percentage');
    const progressBar = fileElement.querySelector('.progress-bar');
    const pauseButton = fileElement.querySelector('.pause-button');
    const resumeButton = fileElement.querySelector('.resume-button');
    const retryButton = fileElement.querySelector('.retry-button');
    const clearButton = fileElement.querySelector('.clear-button');

    requestAnimationFrame(() => {
      fileStatus.textContent = fileObject.status;
      filePercentage.textContent = `${fileObject.percentage < 100 ? Number(fileObject.percentage).toFixed(2) : 100}%`;
      fileStatus.className = `file-status ${fileObject.status}`;
      progressBar.style.width = fileObject.percentage + '%';
      progressBar.style.backgroundColor = fileObject.status === FILE_STATUS.UPLOADING
        ? 'black' : fileObject.status === FILE_STATUS.FAILED ? 'red' : '#60E838';

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

  if (progress) {
    uploader = new UploadFiles(files, {
      url: 'http://127.0.0.1:5500/api/v1/files/upload',
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

const SelectFileModal = ({
  upload,
  progress,
  hideUploadModal,
  showProgressModal,
}) => {

  const [ totalUploadedFiles, setTotalUploadedFiles] = useState(0)
  const [ totalUploadingFiles, setTotalUploadingFiles ] = useState(0)
  const [ totalFailedFiles, setTotalFailedFiles ] = useState(0)
  const [ totalPausedFiles, setTotalPausedFiles ] = useState(0)
  const [ totalChunkSize, setTotalChunkSize ] = useState(0)
  const [ totalUploadedChunkSize, setTotalUploadedChunkSize ] = useState(0);

  let percentage = totalChunkSize > 0 ? Math.min(100, Math.round((totalUploadedChunkSize * 100) / totalChunkSize)) : 0;

  const [files, setFiles] = useState();
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

  const handleDrop = (e) => {
    console.log("Dropped");
    const fileData = e.dataTransfer;
    const files = fileData.files;
    Object.entries(files).map((file) => {
      console.log(file[1].name);
    });

    setFiles(files);
  };

  const handleFileSelection = (e) => {
    const { files } = e.target;
    setFiles(files);
    console.log("this is progress: " + progress)
  };

  const handleCancel = () => {
    setFiles();
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
    // percentage = totalChunkSize > 0 ? Math.min(100, Math.round((totalUploadedChunkSize * 100) / totalChunkSize)) : 0;

  }, []);

  console.log("progress: " + progress)

  if (upload) {
    return (
      <div className="w-full h-screen absolute top-0 left-0 bg-black bg-opacity-75">
        <div
          ref={dragArea}
          className="absolute px-[18px] py-[22px] w-[650px] h-[660px] top-1/2 left-1/2 rounded-[12px] bg-white bg-opacity-100 transform -translate-x-1/2 -translate-y-1/2 shadow-lg drop-shadow-lg overflow-y-auto"
        >
          <div className="modalHeader my-2 flex justify-between text-gray-400 border-b">
            {!progress && <span className="text-[20px]">Load File(s)</span>}
            {progress && (
              <div className="w-full flex items-center justify-between mb-4">
                <div>
                  <p>Your Uploads</p>
                  <div className="flex justify-between text-gray-400 text-[12px] ">
                    <p>{percentage}%</p>
                    <p>{totalUploadingFiles}</p>
                    <p>{totalUploadedFiles}</p>
                    <p>{totalPausedFiles}</p>
                    <p>{totalFailedFiles}</p>
                  </div>
                </div>
                <button
                  onClick={hideUploadModal}
                  className="px-3 py-1 bg-white border-2 border-green-400 text-green-400 rounded-md"
                >
                  Close
                </button>
              </div>
            )}
            {!progress && (
              <span
                onClick={hideUploadModal}
                className="capitalize text-2xl hover:text-red-600 cursor-pointer "
              >
                &#10005;
              </span>
            )}
          </div>
          {!progress && (
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
          )}
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
            <div className={
                (progress ? " mt-10 border-none " : "") +
                "w-[612px] h-[430px]  p-2 flex flex-col  border-2 my-2 border-dashed border-green-300" }>
              {
                !progress && [...files].map((file, index) => {
                  return <div className="flex justify-between items-center" key={index}>
                    <div className="w-[350px] truncate">{file.name}</div>
                    <div>{(file.size / 1000000).toFixed(3)}MB</div>
                  </div>
                })
              }
              {upload && <ProgressWrapper progress={progress} files={files}
                setTotalUploadedFiles={setTotalUploadedFiles}
                setTotalUploadingFiles={setTotalUploadingFiles}
                setTotalFailedFiles={setTotalFailedFiles}
                setTotalPausedFiles={setTotalPausedFiles}
                setTotalChunkSize={setTotalChunkSize}
                setTotalUploadedChunkSize={setTotalUploadedChunkSize}
              />}
            </div>
          )}
          {!progress && (
            <div className="uploadActions flex justify-end border-t mt-6 pt-6 text-[12px]">
              <button
                onClick={showProgressModal}
                className="mx-4 px-[14px] py-[8px] bg-green-500 text-white rounded-sm"
              >
                Upload
              </button>
              <button
                onClick={handleCancel}
                className=" px-[14px] py-[8px]  border border-green-100 text-green-500 text-[12px]"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
};

export default SelectFileModal;
