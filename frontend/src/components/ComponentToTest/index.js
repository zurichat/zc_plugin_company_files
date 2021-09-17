// import Button from "Components/Button";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Centrifuge from "centrifuge";
const centrifuge = new Centrifuge("ws://localhost:8000/connection/websocket");

centrifuge.on('connect', ( data ) => {
  axios.get("http://localhost:5500/api/v1/files/all");
  console.log(data)
});

centrifuge.on('disconnect', ( data ) => {
  console.log(data)
});

const ComponentToTest = () => {

  const [ allFiles, setAllFiles ] = useState([])

  const fetchData = () => {
    centrifuge.connect();
    centrifuge.subscribe("allFiles", (response) => setAllFiles(response.data))
  }

  useEffect(() => {
    fetchData()
  }, [allFiles.data])

  const deleteFile = async (fileId) => {
    const deleted = await axios.delete(`http://localhost:5500/api/v1/files/deleteFile/${fileId}`);
  }

  return (
    <div className="list-files" style={{ display: "flex", flexDirection: "row" }}>
      {
        allFiles?.data?.map((file, index) => {
          if ((file.url.endsWith(".mp4") || file.url.endsWith(".3gp"))) {
            return <div style={{ marginBottom: ".2rem" }} key={index}>
              <video alt={file.fileName} src={file.url} style={{ width: 200 }} controls>
                <source src={file.url}></source>
              </video>
              <p>{file.fileName}</p>
            </div>
          }
          return <div style={{ marginBottom: ".2rem"}} key={index}>
            <img alt={file.fileName} src={file.url} style={{ width: 200 }} />
            <p>{file.fileName}</p>
          </div>
        })
      }
    </div>
  )
}

export default ComponentToTest;


























// #################################################################3


// class UploadFiles {
//   constructor (files, options) {
//     this.fileRequests = new WeakMap()
//     this.endpoints = {
//       UPLOAD: 'http://127.0.0.1:5500/api/v1/files/upload',
//       UPLOAD_STATUS: 'http://127.0.0.1:5500/api/v1/files/uploadStatus',
//       UPLOAD_REQUEST: 'http://127.0.0.1:5500/api/v1/files/uploadRequest'
//     }

//     this.defaultOptions = {
//       url: this.endpoints.UPLOAD,
//       fileId: null,
//       folderId: null,
//       startingByte: 0,
//       onAbort() { },
//       onError() { },
//       onProgress() { },
//       onComplete() { }
//     }

//     this.files = files;
//     this.options = options;

//     // console.log({ ...this.defaultOptions, ...options })
//     [...this.files].map((file, index) => {
//       this.uploadFile(file, { ...this.defaultOptions, ...this.options })
//     })
    
//   }

//   uploadChunks = (file, options) => {

//     const payload = new FormData();
//     const request = new XMLHttpRequest();
//     const chunk = file.slice(options.startingByte);

//     payload.append("chunk", chunk, file.name);
//     payload.append("fileId", options.fileId)

//     request.open("POST", options.url, true);

//     request.setRequestHeader("X-File-Id", options.fileId)
//     if (options.folderId) request.setRequestHeader("X-Folder-Id", options.folderId)
//     request.setRequestHeader('Content-Range', `bytes=${options.startingByte}-${options.startingByte + chunk.size}/${file.size}`)
    
//     request.onload = event => {
//       (request.status === 200 || request.status === 201)
//       ? options.onComplete(event, file) : options.onError(event, file)
//       console.log("running")
//     }

//     request.onerror = event => options.onError(event, file);
//     request.ontimeout = event => options.onError(event, tile);

//     request.upload.onprogress = event => {
//       const loaded = options.startingByte + event.loaded;
//       options.onProgress({
//         ...event,
//         loaded,
//         total: file.size,
//         percentage: Math.round((loaded * 100) / file.size)
//       }, file)
//     }

//     request.onabort = event => options.onAbort(event, file)

//     this.fileRequests.get(file).request = request;

//     request.send(payload)

//   } 

//   uploadFile = (file, options) => {
//     const fileInfoRequest = new Request('http://127.0.0.1:5500/api/v1/files/uploadRequest', {
//       method: 'POST',
//       body: JSON.stringify({ fileName: file.name }),
//       headers: new Headers({ 'Content-Type': 'application/json' })
//     });

//     fetch(fileInfoRequest)
//       .then(res => res.json())
//       .then(({ data: { fileId }}) => {
//         options = { ...options, fileId };
//         this.fileRequests.set(file, { request: null, options });

//         this.uploadChunks(file, options);
//       }).catch(e => {
// 				options.onError({...e, file})
// 			})
//   }


//   abortFileUpload = file => {
//     const fileRequest = this.fileRequests.get(file);

//     if (fileRequest && fileRequest.request) {
//       fileRequest.request.abort();
//       return true;
//     } else return false;
//   }

//   retryFileUpload = file => {
//     const fileRequest = this.fileRequests.get(file);

//     if (fileRequest) {
//       return axios.get(
//         `${this.endpoints.UPLOAD_STATUS}?fileName=${file.name}&fileId=${fileRequest.options.fileId}`
//       )
//       .then(response => {
//         this.uploadChunks(file, { ...fileRequest.options, startingByte: Number(response.totalChunkUploaded)});
    
//       })
//       .catch(() => {
//         this.uploadChunks(file, fileRequest.options)
//       })
//     }
//   }

//   clearFileUpload = async file => {
//     const fileRequest = this.fileRequests.get(file);

//     if (fileRequest) {

//       await this.abortFileUpload(file);
//       fileRequest.delete(file);
//       return true;

//     } else return false;
//   }

//   resumeFileUpload = file => {
//     const fileRequest = this.fileRequests.get(file);

//     if (fileRequest) {
//       return axios.get(
//         `${this.endpoints.UPLOAD_STATUS}?fileName=${file.name}&fileId=${fileRequest.options.fileId}`
//       )
//       .then(response => {
//         this.uploadChunks(file, { ...fileRequest.options, startingByte: Number(response.totalChunkUploaded)});
    
//       })
//       .catch(error => {
//         fileRequest.options.onError({...error, file})
//       })
//     }
//   }

// }

// // #################################################################3

// const ProgressContainer = ({ file, uploader, addToFileMap, deleteCurrentFile, FILE_STATUS }) => {
  
//   const thisElement = useRef();
//   const extensionIndex = file.name.lastIndexOf('.');
//   useEffect(() => {

//     addToFileMap(file, {
//       status: FILE_STATUS.PENDING,
//       size: file.size,
//       percentage: 0,
//       uploadedChunkSize: 0,
//       element: thisElement.current
//     })

//   })

//   return (
//     <div ref={thisElement} className="file-details">
//       <div className="file-status-container">
//         <span className="file-status">{FILE_STATUS.PENDING}</span>
//         <span className="file-percentage">0%</span>
//       </div>
//       <p>
//         <span className="file-name">{file.name}</span>
//         {/* <span className="file-extension">{file.name.substring(extensionIndex)}</span> */}
//       </p>
//       <div className="progress-bar-container"><div className="progress-bar" style={{ width: 0}}></div></div>

//       <div className="file-actions">
//         <button className="pause-button"
//           onClick={() => uploader.abortFileUpload(file)}
//         >
//           <span className="title">Pause</span>
//         </button>
//         <button className="resume-button"
//           onClick={() => uploader.resumeFileUpload(file)}
//         >
//           <span className="title">Resume</span>
//         </button>
//         <button className="retry-button"
//           onClick={() => uploader.retryFileUpload(file)}
//         >
//           <span className="title">Retry</span>
//         </button>
//         <button className="clear-button"
//           onClick={() => {
//             uploader.clearFileUpload(file)
//             deleteCurrentFile(file);
//             thisElement.current.remove();
//           }}
//         >
//           <span className="title">Clear</span>
//         </button>
//       </div>
//     </div>
//   )
// }


// const FilesProgressWrapper = ({ children }) => {
//   return (
//     <div className="file-progress-wrapper">
//       {children}
//     </div>
//   )
// }

// const Wrapper = ({files}) => {

//   const thisElem = useRef();

//   const [ totalUploadedFiles, setTotalUploadedFiles] = useState(0)
//   const [ totalUploadingFiles, setTotalUploadingFiles ] = useState(0)
//   const [ totalFailedFiles, setTotalFailedFiles ] = useState(0)
//   const [ totalPausedFiles, setTotalPausedFiles ] = useState(0)
//   const [ totalChunkSize, setTotalChunkSize ] = useState(0)
//   const [ totalUploadedChunkSize, setTotalUploadedChunkSize ] = useState(0)

//   const allFiles = new Map();

//   const addToFileMap = (file, options) => {
//     allFiles.set(file, options)
//   }

//   const deleteCurrentFile = (file) => {
//     allFiles.delete(file)
//   }

//   const FILE_STATUS = {
//     PENDING: 'pending',
//     UPLOADING: 'uploading',
//     PAUSED: 'paused',
//     COMPLETED: 'completed',
//     PROCESSING: 'processing',
//     FAILED: 'failed'
//   }

//   const updateFileProgessElement = (fileObject) => {
//     const fileElement = fileObject.element;

//     const fileStatus = fileElement.querySelector('.file-status');
//     const filePercentage = fileElement.querySelector('.file-percentage');
//     const progressBar = fileElement.querySelector('.progress-bar');
//     const pauseButton = fileElement.querySelector('.pause-button');
//     const resumeButton = fileElement.querySelector('.resume-button');
//     const retryButton = fileElement.querySelector('.retry-button');
//     const clearButton = fileElement.querySelector('.clear-button');

//     requestAnimationFrame(() => {
//       fileStatus.textContent = fileObject.status;
//       filePercentage.textContent = `${fileObject.percentage < 100 ? Number(fileObject.percentage).toFixed(2) : 100}%`;
//       fileStatus.className = `file-status ${fileObject.status}`;
//       progressBar.style.width = fileObject.percentage + '%';
//       progressBar.style.backgroundColor = fileObject.status === FILE_STATUS.UPLOADING
//         ? 'green' : fileObject.status === FILE_STATUS.FAILED ? 'red' : '#282a36';

//       pauseButton.style.display = fileObject.status === FILE_STATUS.UPLOADING ? 'inline-block' : 'none';
//       resumeButton.style.display = fileObject.status === FILE_STATUS.PAUSED ? 'inline-block' : 'none';
//       retryButton.style.display = fileObject.status === FILE_STATUS.FAILED ? 'inline-block' : 'none';
//       clearButton.style.display = fileObject.status === FILE_STATUS.UPLOADING || fileObject.status === FILE_STATUS.PAUSED
//         ? 'inline-block' : 'none';
      
//       // updateProgressBox();
//     })
//   }

//   const onAbort = (e, file) => {
//     const fileObject = allFiles.get(file);

//     fileObject.status = FILE_STATUS.PAUSED;
//     updateFileProgessElement(fileObject);
//   }

//   const onError = (e, file) => {
//     const fileObject = allFiles.get(file);
//     console.log(fileObject)

//     fileObject.status = FILE_STATUS.FAILED;
//     fileObject.percentage = 100;
//     updateFileProgessElement(fileObject);
//   }

//   const onProgress = (e, file) => {
//     const fileObject = allFiles.get(file);

//     fileObject.status = e.loaded >= e.total ? FILE_STATUS.PROCESSING : FILE_STATUS.UPLOADING;
//     fileObject.percentage = e.percentage;
//     fileObject.uploadedChunkSize = e.loaded;

//     updateFileProgessElement(fileObject);
//   }

//   const onComplete = (e, file) => {
//     const fileObject = allFiles.get(file);

//     fileObject.status = FILE_STATUS.COMPLETED;
//     fileObject.percentage = 100;

//     updateFileProgessElement(fileObject);
//   }

//   const uploader = new UploadFiles(files, {
//     url: 'http://127.0.0.1:5500/api/v1/files/upload',
//     onAbort,
//     onError,
//     onProgress,
//     onComplete,
//     folderId: "uuid here"
//   })

//   const ListFiles = () => {
//     return [...files].map((file, index) => {
//       console.log(file)
//       return <ProgressContainer 
//         key={index}
//         file={file} 
//         addToFileMap={addToFileMap} 
//         deleteCurrentFile={deleteCurrentFile}
//         uploader={uploader}
//         FILE_STATUS={FILE_STATUS}
//       />
//     })
//   }

//   [...allFiles].map(fileObject => {
    
//     if (fileObject.status === FILE_STATUS.FAILED) {
//       setTotalFailedFiles(totalFailedFiles => totalFailedFiles += 1);
//     } else {
//       if (fileObject.status === FILE_STATUS.COMPLETED) {
//         setTotalUploadedFiles(totalUploadedFiles => totalUploadedFiles += 1);
//       } else if (fileObject.status === FILE_STATUS.PAUSED) {
//         setTotalPausedFiles(totalPausedFiles => totalPausedFiles += 1);
//       } else {
//         setTotalUploadingFiles(totalUploadingFiles => totalUploadingFiles += 1);
//       }

//       setTotalChunkSize(totalChunkSize => totalChunkSize += fileObject.size);
//       setTotalUploadedChunkSize(totalUploadedChunkSize => totalUploadedChunkSize += fileObject.uploadedChunkSize);
//     }

//   })

//   const percentage = totalChunkSize > 0 ? Math.min(100, Math.round((totalUploadedChunkSize * 100) / totalChunkSize)) : 0;

//   return (
//     <div ref={thisElem} >
//       <h4>{
//         percentage === 100
// 				? `Uploaded ${totalUploadedFiles} File${totalUploadedFiles !== 1 ? 's' : ''}`
//         : `Uploading ${totalUploadingFiles}/${files.length} File${files.length !== 1 ? 's' : ''}`
//       }</h4>
//       <p className="uploads-progress">
//         <span className="uploads-percentage">{percentage + "%"}</span>
//         <span className="success-count">{totalUploadedFiles}</span>
//         <span className="failed-count">{totalFailedFiles}</span>
//         <span className="paused-count">{totalPausedFiles}</span>
//       </p>
//       <button type="button" className="maximise">Maximise</button>
//       <p className="upload-progress-bar" style={{ width: percentage + "%"}}></p>
//       <FilesProgressWrapper children={<ListFiles />} />
//     </div>
//   )
// }



// #################################################################

{/* <Element />
    <div style={{marginBottom: "3rem"}}>

      <input 
        type="file" 
        multiple={true}
        onChange={selectFile} />
        <button style={{color: "white", background: "#FFC371", padding: ".5rem"}} onClick={submitForm}>Submit</button>
    </div>
    {
      progressInfos && progressInfos.val.length > 0 && 
        progressInfos?.val.map((progressInfo, index) => (
          <div key={index}>
            <span>{progressInfo.percentage + "%"}</span>
            <span style={{margin: "0 .5rem"}}>-</span>
            <span>{progressInfo.fileName}</span>
          </div>
        ))
    } */}

// ################################################################

// const [ allFiles, setAllFiles ] = useState([]);
// const [ selectedFiles, setSelectedFiles ] = useState([])
// const [ progressInfos, setProgressInfos ] = useState({ val: [] })
// const [ fileInfos, setFileInfos ] = useState([])
// const [ message, setMessage ] = useState([])
// const progressInfoRefs = useRef(null)

// // const fetchData = async () => {
// //   centrifuge.connect();
// //   centrifuge.subscribe("all_files", (response) => setAllFiles(response.data))
// // }

// const upload = (file, onUploadProgress) => {

//   const url = "http://localhost:5500/api/v1/files/uploadRequest";
//   const formData = new FormData();
  
//   // formData.append(`file`, file)

//   return axios.post(
//     url, 
//     {fileName: file.name}, 
//     {
//       headers: {
//         "Content-type": "application/json"
//       },
//       onUploadProgress
//     }
//   )
//   .then((data) => {
//     return axios
//     .get(`http://localhost:5500/api/v1/files/uploadStatus?fileName=${data.fileName}&fileId=${data.fileId}`)
//   })
//   .then(data => console.log({ status: data }))
//   .catch(error => {
//     console.log(error)
//   })
// }

// const uploader = (index, file) => {
//   let _progressInfos = [ ...progressInfoRefs.current.val ];
//   return upload(file, (event) => {

//     _progressInfos[index].percentage = Math.round((100 * event.loaded) / event.total);

//     setProgressInfos({ val: _progressInfos });

//   })
//   .then(() => {
//     setMessage((prevMessage) => ([...prevMessage, "Uploaded the file successfully: " + file.name]))
//   })
//   .catch(() => {
//     _progressInfos[index].percentage = 0;
//     setProgressInfos({ val: _progressInfos })
//     setMessage((prevMessage) => ([...prevMessage, "Could not upload the file: " + file.name]))
//   })
// }

// const submitForm = () => {

//   const files = Array.from(selectedFiles);

//   let _progressInfos = files.map(file => ({ percentage: 0, fileName: file.name }))

//   progressInfoRefs.current = { val: _progressInfos }

//   const uploadPromises = files.map((file, i) => uploader(i, file))

//   Promise.all(uploadPromises)
//   .then(() => axios.get("http://localhost:5500/api/v1/file/read"))
//   .then(data => setFileInfos(data))
  
//   setMessage([])
// };

// const selectFile = (event) => {
//   setSelectedFiles(event.target.files)
//   setProgressInfos({ val: [] })
// }

// // useEffect(() => {
// //   fetchData()
// // }, [])

// // return <Button onClick>button</Button>;
// const Element = UploadAndTrackFiles()
