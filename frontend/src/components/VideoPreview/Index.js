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
    }


    // useEffect(() => {
    //     if (isPlaying) {
    //         videoPlayer.current.play();
    //     } else {
    //         videoPlayer.current.pause();
    //     }
    // }, [isPlaying]);

  

    return (
            <div className={VideoPreview.bg}>
                <div className={VideoPreview.videobar}>
                    <div className={VideoPreview.videobarleft}>
                        <button onClick={previous}><FontAwesomeIcon  onClick={previous} className={VideoPreview.arrow} icon={faArrowLeft} /></button>
                        <FontAwesomeIcon className={VideoPreview.videoIcon} icon={faImage} />
                        <h1 className={VideoPreview.name}>
                            {/* The title of the video would be passed as props here {title} */}
                            Linda’s Office Shot.jpg
                        </h1>
                    </div>
                    <div>
                        <FontAwesomeIcon className={VideoPreview.videoIcon} icon={faDownload} />
                        <FontAwesomeIcon className={VideoPreview.videoIcon} icon={faEllipsisV} />
                    </div>
                </div>

                <div className={VideoPreview.videocon}>
                    <video 
                        ref={videoPlayer} 
                        // the video url would be passed as props src= {videoUrl}
                        src="/short.mp4"  
                        controls  
                        autoPlay 
                    
                        />
                    {/* {show && <button onClick={playPause} ><FontAwesomeIcon videoIcon={isPlaying ? faPause : faPlay} /></button>} */}
                </div>
            </div>
    )
}

export default Index
