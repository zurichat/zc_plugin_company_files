import React, { useEffect, useRef, useState } from "react";
import Nav from "../Subcomponents/nav";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa/index";
import { GiSpeaker } from "react-icons/gi";
import Minimize from "../../../public/Icons/minimize/active.svg";

function index({ file, setOpenStatus }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(file.url));

  function playPause() {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    console.log(audio.duration);
    console.log(audio.currentTime);
  }, [isPlaying]);

  useEffect(() => {
    audio.addEventListener("ended", () => setIsPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setIsPlaying(false));
    };
  }, []);

  return (
    <div className="bg-gray-800 bg-opacity-70 overflow-auto h-full w-full flex-auto flex flex-col justify-between pb-6 absolute z-10 top-0 left-0 bottom-0 right-0">
      <Nav file={file} setOpenStatus={setOpenStatus} />
      <div className="flex flex-col justify-between items-center h-3/4 w-full">
        <div className="flex h-full w-full md:px-6 px-2 justify-center">
          <div className="flex w-3/4 items-center justify-center relative bg-black px-4 md:px-48">
            <img
              src="https://images.unsplash.com/photo-1548032885-b5e38734688a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2455&q=80"
              alt="music"
              className="h-60 w-80"
            />
            <div className="absolute bottom-7">
              <div className="bg-green-100 min-w-max h-1">
                <div className="bg-green-400 h-1"></div>
              </div>
              <div className="flex justify-between">
                <div>
                  <GiSpeaker className="text-white text-xl" />
                </div>
                <div className="flex flex-row">
                  <FaBackward className="text-white text-xl" />
                  {!isPlaying ? (
                    <FaPlay
                      className="text-green-500 text-xl"
                      onClick={() => playPause()}
                    />
                  ) : (
                    <FaPause
                      className="text-green-500 text-xl"
                      onClick={() => playPause()}
                    />
                  )}
                  <FaForward className="text-white text-xl" />
                  <span>0:02</span>
                </div>
                <div>
                  <img src={Minimize} alt="minimize" />
                </div>
              </div>
            </div>
            {/* <audio src={file.url} ref={audioFile}>
              Your browser does not support the <code>audio</code> element
            </audio> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
