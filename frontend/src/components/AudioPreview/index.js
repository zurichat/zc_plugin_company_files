import React, { useEffect, useState, useLayoutEffect } from "react";
import Nav from "../Subcomponents/nav";
import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaUndo,
} from "react-icons/fa/index";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import Minimize from "../../../public/Icons/minimize/active.svg";

function index({ file, setOpenStatus }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [audio] = useState(new Audio(file.url));
  audio.volume = 0.1;

  function playPause() {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  }

  function muteUnmute() {
    setIsMuted(!isMuted);
    audio.muted = !audio.muted;
  }

  function forward() {
    if (audio.currentTime < audio.duration) {
      audio.currentTime += 10;
    }
  }

  function backward() {
    if (audio.currentTime > 0) {
      audio.currentTime -= 10;
    }
  }

  function restart() {
    // restart audio from the beginning
    audio.currentTime = 0;
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    }
  }

  function setPosition(e) {
    console.log(this);
    const width = e.target.clientWidth;
    const clickX = e.nativeEvent.offsetX;
    console.log(width, clickX, e);
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
  }

  useLayoutEffect(() => {
    function formatTime(seconds) {
      let minutes = Math.floor(seconds / 60);
      minutes = minutes >= 10 ? minutes : "0" + minutes;
      seconds = Math.floor(seconds % 60);
      seconds = seconds >= 10 ? seconds : "0" + seconds;
      return minutes + ":" + seconds;
    }
    audio.addEventListener("timeupdate", () => {
      setTime(formatTime(audio.currentTime));
      setProgress((audio.currentTime / audio.duration) * 100);
    });
    console.log(time, progress, audio.volume);
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
          <div className="flex w-3/5 items-center justify-center relative bg-black px-4 md:px-48">
            <img
              src="https://images.unsplash.com/photo-1548032885-b5e38734688a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2455&q=80"
              alt="music"
              className="h-60 w-96"
            />
            <div className="absolute bottom-7 w-full px-3">
              <div
                className="bg-green-100 min-w-max h-1"
                onClick={(e) => setPosition(e)}
              >
                <div
                  className="bg-green-400 h-1"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-3">
                <div className="flex items-center">
                  {!isMuted ? (
                    <GiSpeaker
                      className="text-white text-xl"
                      onClick={() => muteUnmute()}
                      title="Mute"
                    />
                  ) : (
                    <GiSpeakerOff
                      className="text-white text-xl"
                      onClick={() => muteUnmute()}
                      title="Unmute"
                    />
                  )}
                </div>
                <div className="flex flex-row items-center">
                  <FaUndo
                    className="text-white text-sm: md:text-xl mr-2"
                    onClick={() => restart()}
                    title="Restart"
                  />
                  <FaBackward
                    className="text-white text-sm: md:text-xl hover:text-green-300 mr-2"
                    onClick={() => backward()}
                    title="Backward"
                  />
                  {!isPlaying ? (
                    <FaPlay
                      className="text-green-500 text-sm: md:text-xl mr-2"
                      onClick={() => playPause()}
                      title="Play"
                    />
                  ) : (
                    <FaPause
                      className="text-green-500 text-sm: md:text-xl mr-2"
                      onClick={() => playPause()}
                      title="Pause"
                    />
                  )}
                  <FaForward
                    className="text-white text-sm: md:text-xl hover:text-green-300 mr-2"
                    onClick={() => forward()}
                    title="Forward"
                  />
                  <span className="text-white text-sm: md:text-xl">{time}</span>
                </div>
                <div className="flex items-center">
                  <img src={Minimize} alt="minimize" title="minimize" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
