// import React from 'react'
// import { useState, useRef, useEffect } from "react"
// import {  faArrowLeft, faImage, faDownload, faEllipsisV, faPlay, faPause,  } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import VideoPreview from "./videoPreview.module.css"

const Index = ({videoUrl, title}) => {
    // const [show, setShow] = useState(true);
    // const videoPlayer = useRef(null);

    // const [isPlaying, setIsPlaying] = useState(true);

    // const playPause = () => {
    //     setIsPlaying(!isPlaying);
    // }

    // const previous = () => {
    //     console.log("Go back");
    // }

  // useEffect(() => {
  //     if (isPlaying) {
  //         videoPlayer.current.play();
  //     } else {
  //         videoPlayer.current.pause();
  //     }
  // }, [isPlaying]);

  return (
    <div className="bg-gray-800 bg-opacity-70 overflow-auto h-full w-full flex-auto flex flex-col justify-between pb-6 absolute z-10 top-0 left-0 bottom-0 right-0">
      <nav className="h-10 w-full flex flex-row justify-between py-3 px-3 md:px-5 lg:px-7">
        <div className="flex">
          <div>
            <img
              src={active}
              alt="arrow-left"
              className="mr-5"
              onClick={() => setOpenStatus(false)}
            />
          </div>
          <div>
            <div className="flex flex-row">
              <img src={imageIcon} alt="image-icon" className="mr-2" />
              <p className="text-white">{file.fileName}</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div>
            <img src={downloadIcon} alt="download-icon" />
          </div>
          <div>
            <img src={Vertical} alt="more-icon" className="ml-2" />
          </div>
        </div>
      </nav>
      <div className="flex flex-col justify-between items-center h-3/4 w-full">
          <div className="flex items-center justify-center">
            <video
              src={file.url}
              controls
              className="md:min-w-0 min-w-full w-60 md:w-10/12"
            />
          </div>
      </div>
    </div>
  );
};

export default Index;
